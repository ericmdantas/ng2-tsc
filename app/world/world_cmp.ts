/// <reference path="../../typings/tsd.d.ts"/>

import {Component, View, LifecycleEvent} from 'angular2/angular2';

@Component({
  selector: 'world',
  lifecycle: [LifecycleEvent.onInit]
})
@View({
  templateUrl: 'app/world/world.html',
  styleUrls: ['app/world/world.css']
})

export class WorldCmp {
    onInit() {
      console.log('world_cmp init');
    }
}
