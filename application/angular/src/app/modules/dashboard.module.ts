import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DashboardComponent} from "../components/dashboard/dashboard.component";
import {LoginGuard} from "../guards/login.guard";
import {OverzichtComponent} from "../components/overzicht/overzicht.component";

@NgModule({
    declarations: [
        DashboardComponent,
        OverzichtComponent
    ],
    providers: [
    ],
    imports: [
        CommonModule,
        NgbModule,
        RouterModule.forChild([
            {
                path: '',
                component: DashboardComponent,
                pathMatch: 'full',
                canActivate: [
                    LoginGuard
                ]
            }
        ])
    ]
})
export class DashboardModule {}