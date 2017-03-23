import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

import {LoginFormComponent} from "../login-form/login-form.component";
import {LoginGuard} from "../guards/login.guard";

const routes: Routes = [
    // {
    //     path: '',
    //     pathMatch: 'full'
    // },
    {
        path: 'login',
        component: LoginFormComponent,
        canActivate: [
            LoginGuard
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ]
})

export class RoutingModule {}
