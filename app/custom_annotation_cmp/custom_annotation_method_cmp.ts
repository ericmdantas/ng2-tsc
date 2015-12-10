import {
  Component,
  OnInit,
  Observable
} from 'angular2/core';

function someObs() {
  return Observable.create((o) => {
    o.next({a: true});
  });
}

@Component({
  selector: 'custom-annotation-method-cmp',
  template: `
    <p>{{s | json}}</p>
  `
})
export class CustomAnnotationMethodCmp implements OnInit {
  s: Observable<any>;

  _upt = () => {
    someObs().subscribe((i) => this.s = i);
  }

  ngOnInit() {
    this._upt();
  }
}
