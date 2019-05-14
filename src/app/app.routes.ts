import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NpagefoundComponent } from './shared/npagefound/npagefound.component';
import { RegisterComponent } from './login/register.component';

const appRoutes: Routes =  [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', component: NpagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash : true});
