import {
    Component,
    OnInit,
} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {UserService} from '../core/services/user.service';
import * as moment from 'moment';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
            state('expanded', style({height: '*'})),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ]
})

export class UserProfileComponent implements OnInit {
    profileTags: Array<any> = [];
    profileData: any = [];
    profileQuestions: Array<any> = [];

    constructor(private readonly userService: UserService) {

    }


    ngOnInit(): void {
        this.userService.getUserProfile(552).subscribe((data: any) => {
            this.profileData = data.items[0];
        });
        this.userService.getUserTags(552).subscribe((data: any) => {
            this.profileTags = data.items;
        });
        this.userService.getUserQuestion(552).subscribe((data: any) => {
            this.profileQuestions = data.items;
        });
    }

    getTime(time) {
        return moment(time).startOf('day').fromNow();
    }
}
