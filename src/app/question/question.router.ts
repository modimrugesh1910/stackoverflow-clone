import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuestionComponent} from './question.component';

const materialWidgetRoutes: Routes = [
  {path: '', component: QuestionComponent, data: {animation: 'watchlist'}},
];

@NgModule({
  imports: [
    RouterModule.forChild(materialWidgetRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TablesRouterModule {
}
