import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {URL_API} from '../core.apis';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem(URL_API.LOCAL_STORAGE.KEYS.TOKEN)) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}
