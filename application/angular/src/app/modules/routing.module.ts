import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

import {LoginFormComponent} from "../login-form/login-form.component";

const routes: Routes = [
    // {
    //     path: '',
    //     pathMatch: 'full'
    // },
    {
        path: 'login',
        component: LoginFormComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ]
})

export class RoutingModule {}
