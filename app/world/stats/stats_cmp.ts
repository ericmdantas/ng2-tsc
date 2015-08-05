/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {NgFor} from 'angular2/directives';
import {StatsModel} from 'app/world/stats/stats_model';
import {MessageBus, PLAYER_GOT_HIT, MONSTER_GOT_HIT, PLAYER_DIED, MONSTER_DIED} from 'app/utils/utils';

@Component({
    selector: 'stats',
    viewInjector: [StatsModel]
})
@View({
    templateUrl: 'app/world/stats/stats.html',
    styleUrls: ['app/world/stats/stats.css'],
    directives: [NgFor]
})

export class StatsCmp {
    title: string = 'Stats';
    stat: StatsModel;
    mb: MessageBus;

    constructor(@Inject(StatsModel) stat: StatsModel) {
        console.log('stats_cmp init');

        this.stat = stat;
        this.mb = MessageBus.getInstance();

        this.mb.listen(PLAYER_GOT_HIT, this.updateStuff.bind(this));
        this.mb.listen(MONSTER_GOT_HIT, this.updateStuff.bind(this));

        this.mb.listen(PLAYER_DIED, this.updateStuff.bind(this));
        this.mb.listen(MONSTER_DIED, this.updateStuff.bind(this));
    }

    updateStuff(info: Object):void {

    }
}