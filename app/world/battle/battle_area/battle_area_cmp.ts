/// <reference path="../../../../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {PlayerCmp, MonsterCmp} from 'app/world/world';
import {FightCmp, GotHitDirective} from 'app/world/battle/battle';
import {StatsCmp} from 'app/world/stats/stats';
import {LogCmp} from 'app/world/log/log';

@Component({
    selector: 'battle-area'
})
@View({
    templateUrl: 'app/world/battle/battle_area/battle_area.html',
    styleUrls: ['app/world/battle/battle_area/battle_area.css'],
    directives: [PlayerCmp, MonsterCmp, GotHitDirective, FightCmp, LogCmp]
})

export class BattleAreaCmp {
    constructor() {
        console.log('battle_area init');
    }
}

Promise.all( [bootstrap(PlayerCmp),
              bootstrap(MonsterCmp),
              bootstrap(LogCmp),
              bootstrap(FightCmp)] )
       .then(() => {
            console.log('player and monster bootstraped correctly');
       })
       .catch((error) => {
            console.log(`error bootstraping battle_areas components: ${error}`);
       });
