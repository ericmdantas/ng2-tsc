/// <reference path="../../typings/tsd.d.ts" />

import {Component, EventEmitter, Inject, OnInit} from 'angular2/angular2';
import {CustomEEService} from 'app/custom_ee_service/custom_ee_service.js';

@Component({
  selector: 'custom-ee-cmp',
  template: `
    <p>custom-ee-cmp</p>
  `,
  outputs: ['whateverEvent']
})
class CustomEECmp implements OnInit {
  whateverEvent: EventEmitter = new EventEmitter();

  onInit() {
    this.whateverEvent.next({whatever: true});
  }
}

@Component({
  selector: 'custom-ee-cmp-wrapper',
  template: `
    <custom-ee-cmp (whatever-event)="doWhatever($event)"></custom-ee-cmp>
    <p [text-content]="r | date:'hh:mm:ss H'"></p>
  `,
  bindings: [CustomEEService],
  directives: [CustomEECmp]
})
export class CustomEECmpWrapper implements OnInit {
  r: Object;

  constructor(@Inject(CustomEEService) private _cees: CustomEEService) {

  }

  onInit() {
    console.log('custom-ee-cmp-wrapper init');

    this._cees
        .do()
        .subscribe((info) => {
          this.r = info;
        });
  }

  doWhatever(ev) {
    console.log(JSON.stringify(ev));
  }
}
