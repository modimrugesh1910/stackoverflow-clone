import {Component, OnInit, Input, HostListener, ElementRef} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
    isOpen: boolean = false;

    @Input() currentUser = null;

    @HostListener('document:click', ['$event', '$event.target'])
    onClick(event: MouseEvent, targetElement: HTMLElement) {
        if (!targetElement) {
            return;
        }

        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.isOpen = false;
        }
    }


    constructor(private elementRef: ElementRef, private router: Router) {
    }


    ngOnInit() {
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }

    getUserpage() {
        setTimeout(() => {
            this.router.navigate(['/auth/user']);
        }, 500);
    }
}
