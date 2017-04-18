import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

import {IdlePreload, IdlePreloadModule} from "./idle.preload.module";

import {LoginFormComponent} from "../components/login-form/login-form.component";

import {LoginGuard} from "../guards/login.guard";
import {NotFoundComponent} from "../components/not-found/not-found.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
    },
    {
        path: 'dashboard',
        loadChildren: './dashboard.module#DashboardModule',
        canActivate: [
            LoginGuard
        ]
    },
    {
        path: 'voorraad',
        loadChildren: './voorraad.module#VoorraadModule',
        canActivate: [
            LoginGuard
        ]
    },
    {
        path: 'instellingen',
        loadChildren: './settings.module#SettingsModule',
        canActivate: [
            LoginGuard
        ]
    },
    {
        path: 'schappen',
        loadChildren: './schappen.module#SchappenModule',
        canActivate: [
            LoginGuard,
        ]
    },
    {
        path: 'login',
        component: LoginFormComponent
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '/404'
    },
];

@NgModule({
    imports: [
        IdlePreloadModule.forRoot(),
        RouterModule.forRoot(routes, {
            preloadingStrategy: IdlePreload
        })
    ]
})

export class RoutingModule {}
