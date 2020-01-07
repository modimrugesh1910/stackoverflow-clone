import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';

export const authRoutes: Routes = [{
  path: '', component: AuthComponent, children: [
    {path: '', redirectTo: 'question', pathMatch: 'full'},
    {path: 'question', loadChildren: '../question/question.module#QuestionModule'},
    {path: 'user', loadChildren: '../user-profile/user-profile.module#UserProfileModule'},
  ]
}];
