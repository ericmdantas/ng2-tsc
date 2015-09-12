/// <reference path="../typings/tsd.d.ts" />

import {Component, View, OnInit, bootstrap} from 'angular2/angular2';
import {ContainerCmp} from 'app/container/container_cmp.js';
import {WkCmp} from 'app/wk/wk_cmp.js';
import {MainHostCmp} from 'app/host/host_cmp.js';
import {MainQueryCmp} from 'app/query/query_cmp.js';
import {NiyCmp} from 'app/not_instantiated_yet/niy_cmp.js';
import {Cmp1Cmp} from 'app/di/di_hierarchy_cmp.js';
import {XhrCmp} from 'app/xhr/xhr_cmp.js';
import {WkXhrCmp} from 'app/wk_xhr/wk_xhr_cmp.js';
import {FormCmp} from 'app/form/form_cmp.js'
import {HeavyWkCmp} from 'app/heavy_wk/heavy_wk_cmp.js';
import {PCmp} from 'app/event_bubbles/event_bubbles_cmp.js';

@Component({
  selector: 'app'
})
@View({
  template: `
  <main>
    <container [tit]="'wk'">
      <wk></wk>
    </container>

    <container [tit]="'host'">
      <main-host></main-host>
    </container>

    <container [tit]="'query'">
      <main-query></main-query>
    </container>

    <container [tit]="'niy'">
      <niy-cmp></niy-cmp>
    </container>

    <container [tit]="'di-hierarchy'">
      <cmp1></cmp1>
    </container>

    <container [tit]="'xhr'">
      <xhr-cmp></xhr-cmp>
    </container>

    <container [tit]="'wk-xhr'">
      <wk-xhr-cmp></wk-xhr-cmp>
    </container>

    <container [tit]="'form'">
      <form-cmp></form-cmp>
    </container>

    <container [tit]="'heavy_wk'">
      <heavy-wk-cmp></heavy-wk-cmp>
    </container>

    <container [tit]="'event-bubbles'">
      <p-cmp></p-cmp>
    </container>
  </main>
  `,
  directives: [WkCmp, ContainerCmp, MainHostCmp,
               MainQueryCmp, MainQueryCmp, NiyCmp,
               Cmp1Cmp, XhrCmp, WkXhrCmp, FormCmp,
               HeavyWkCmp, PCmp]
})

export class AppCmp implements OnInit {
  onInit() {
    console.log('app init');
  }
}

Promise.all([bootstrap(ContainerCmp), bootstrap(WkCmp), bootstrap(MainHostCmp),
             bootstrap(MainQueryCmp), bootstrap(NiyCmp), bootstrap(Cmp1Cmp),
             bootstrap(XhrCmp), bootstrap(WkXhrCmp), bootstrap(FormCmp),
             bootstrap(HeavyWkCmp), bootstrap(PCmp) ])
       .then(() => console.log('app boot'))
       .catch((error) => console.log(`error on app boot: ${error}`));
