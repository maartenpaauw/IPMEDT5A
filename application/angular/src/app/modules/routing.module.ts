import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

import {IdlePreload, IdlePreloadModule} from "./idle.preload.module";

import {LoginFormComponent} from "../components/login-form/login-form.component";

import {LoginGuard} from "../guards/login.guard";

const routes: Routes = [
    // {
    //     path: '',
    //     pathMatch: 'full'
    // },
    {
        path: 'login',
        component: LoginFormComponent
    },
    {
        path: 'sizes',
        loadChildren: './sizes.module#SizesModule',
        canActivate: [
            LoginGuard
        ]
    }
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
