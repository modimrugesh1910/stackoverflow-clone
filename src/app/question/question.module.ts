import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TablesRouterModule} from './question.router';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material';
import {QuestionComponent} from './question.component';
import {MaterialModule} from '../shared/angular-material.module';
import {CoreModule} from '../core/core.module';
import {QuestionService} from './question.service';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        CoreModule,
        TablesRouterModule
    ],
    declarations: [
        QuestionComponent
    ],

    exports: [],
    providers: [
        QuestionService,
        {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
    ]
})
export class QuestionModule {
}


