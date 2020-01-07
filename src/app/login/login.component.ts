import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {URL_API} from '../core/core.apis';
import {UserService} from '../core/services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    model = {
        email: '',
        password: ''
    };
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    serverErrorMessages: string;

    constructor(private router: Router, private fb: FormBuilder,
                private userService: UserService, private httpClient: HttpClient) {
    }

    ngOnInit() {
        if (this.userService.isLoggedIn()) {
            this.router.navigateByUrl('/auth/table');
        }
    }

    onSubmit(form: NgForm) {
        this.router.navigate(['/auth/question']);
        // TODO - use below code when having login api
        // this.userService.login(form.value).subscribe(
        //     res => {
        //         this.userService.setToken(res['token']);
        //         this.router.navigateByUrl('/auth/question');
        //     },
        //     err => {
        //         this.serverErrorMessages = err.error.message;
        //     }
        // );
    }
}

