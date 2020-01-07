import {Component, OnInit, Input, OnChanges, AfterViewInit} from '@angular/core';
import {MediaChange} from '@angular/flex-layout';
import {UserService} from '../core/services/user.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']

})

export class AuthComponent implements OnInit, OnChanges, AfterViewInit {
    @Input() isVisible = true;
    visibility = 'shown';

    sideNavOpened = true;
    matDrawerOpened = false;
    matDrawerShow = true;
    sideNavMode = 'side';

    private media;

    themeColor = '';

    ngOnChanges() {
        this.visibility = this.isVisible ? 'shown' : 'hidden';
    }

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.media.subscribe((mediaChange: MediaChange) => {
            this.toggleView();
        });

        this.userService.themeColor$.subscribe((themeClass) => {
            console.log(themeClass)
            this.themeColor = themeClass;
        });
    }

    ngAfterViewInit(): void {
        this.userService.themeColor$.subscribe((themeClass) => {
            console.log(themeClass)
            this.themeColor = themeClass;
        });
    }

    getRouteAnimation(outlet) {
        return outlet.activatedRouteData.animation;
        //return outlet.isActivated ? outlet.activatedRoute : ''
    }

    toggleView() {
        if (this.media.isActive('gt-md')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = true;
            this.matDrawerOpened = false;
            this.matDrawerShow = true;
        } else if (this.media.isActive('gt-xs')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = false;
            this.matDrawerOpened = true;
            this.matDrawerShow = true;
        } else if (this.media.isActive('lt-sm')) {
            this.sideNavMode = 'over';
            this.sideNavOpened = false;
            this.matDrawerOpened = false;
            this.matDrawerShow = false;
        }
    }
}
