import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-sidemenu-item',
    templateUrl: './sidemenu-item.component.html',
    styleUrls: ['./sidemenu-item.component.scss']
})
export class SidemenuItemComponent implements OnInit {

    @Input() menu;
    @Input() iconOnly: boolean;
    @Input() secondaryMenu = false;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    openLink(menu) {
      this.router.navigateByUrl(menu.link);
        // this.menu.open = this.menu.open;
    }

    chechForChildMenu() {
        return (this.menu && this.menu.sub) ? true : false;
    }

}
