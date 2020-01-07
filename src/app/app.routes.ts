import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: '**', redirectTo: 'auth'},
];
/** Router module for root URL component */
export const AppRoutes = RouterModule.forRoot(routes, {
});
