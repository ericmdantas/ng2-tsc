import {Component, View, NgFor, NgIf} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {FormBuilder, Validators, ControlGroup, formDirectives} from 'angular2/forms';
import {RouterOutlet, RouteConfig} from 'angular2/router';
import {AppService} from './app_service';
import {Stuff} from './stuff_type';
import {TrashCan} from '../common/trash_can';
import {Card} from '../common/card';

@Component({
  selector: 'app',
  viewInjector: [FormBuilder, AppService]
})
@View({
    templateUrl: 'app/components/app.html',
    directives: [formDirectives, NgIf, Card, TrashCan, RouterOutlet],
    styleUrls: ['app/components/app.css']
})
@RouteConfig([
    {path: '/something-something', component: App}
])
export class App {
    stuffList: List<Stuff>;
    stuffForm: ControlGroup;
    service: AppService;
    stuffCount: int = 0;
    subTitle: string = `There are this much stuff: `;

    constructor(@Inject(FormBuilder) fb: FormBuilder, appService: AppService) {
        this.stuffForm = fb.group({
            "info": ["something", Validators.required]
        });

        this.service = appService;
        this.stuffList = [];
    }

    add():void {
        this.service
            .add(this.stuffForm.value.info)
            .subscribe(res => {
                this.stuffList.push({info: res, createdAt: Date.now()});
                this.stuffCount++;
        });
    }

    remove(date: Date):void {
        this.service
            .remove(this.stuffList, date)
            .subscribe(list => {
               this.stuffList = list;
               if (this.stuffCount)
                   this.stuffCount--;
            });
    }

    somethingDropped(date: Date) {
        this.remove(date);
    }
}
