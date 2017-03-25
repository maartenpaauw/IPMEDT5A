import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from 'ng2-charts';
import {DashboardComponent} from "../components/dashboard/dashboard.component";
import {LoginGuard} from "../guards/login.guard";
import {OverzichtComponent} from "../components/overzicht/overzicht.component";
import {OpgepaktVandaagComponent} from "../components/opgepakt-vandaag/opgepakt-vandaag.component";

@NgModule({
    declarations: [
        DashboardComponent,
        OverzichtComponent,
        OpgepaktVandaagComponent
    ],
    providers: [
    ],
    imports: [
        CommonModule,
        NgbModule,
        ChartsModule,
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