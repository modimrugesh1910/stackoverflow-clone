import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MAT_DATE_LOCALE} from '@angular/material';

import {MaterialModule} from '../shared/angular-material.module';
import {CoreModule} from '../core/core.module';
import {UserProfileComponent} from './user-profile.component';
import {RouterModule, Routes} from '@angular/router';

const userRoutes: Routes = [
    {path: '', component: UserProfileComponent, data: {animation: 'user'}},
];

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        CoreModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        UserProfileComponent
    ],

    exports: [],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
    ]
})
export class UserProfileModule {
}


