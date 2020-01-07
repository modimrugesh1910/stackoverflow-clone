import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {User} from '../interfaces/user.interface';
import {environment} from '../../../environments/environment';
import {BehaviorSubject, Subject} from 'rxjs';
import {URL_API} from '../core.apis';

@Injectable()
export class UserService {
    selectedUser: User = {
        fullName: '',
        email: '',
        password: ''
    };

    noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

    private subjectThemeColor = new Subject<string>();
    public themeColor$  = this.subjectThemeColor.asObservable();

    constructor(private http: HttpClient) { }

    // HttpMethods
    postUser(user: User) {
        return this.http.post(environment.apiBaseUrl + '/register', user, this.noAuthHeader);
    }

    login(authCredentials) {
        return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials, this.noAuthHeader);
    }

    getUserProfile(id) {
        return this.http.get(URL_API.GET_USER_PROFILE(id));
    }

    getUserTags(id) {
        return this.http.get(URL_API.GET_USER_TAGS(id));
    }

    getUserQuestion(id) {
        return this.http.get(URL_API.GET_USER_QUESTION(id));
    }


    // Helper Methods

    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    deleteToken() {
        localStorage.removeItem('token');
    }

    getUserPayload() {
        const token = this.getToken();
        if (token) {
            const userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
        } else {
            return null;
        }
    }

    isLoggedIn() {
        const userPayload = this.getUserPayload();
        if (userPayload) {
            return userPayload.exp > Date.now() / 1000;
        } else {
            return false;
        }
    }
}
