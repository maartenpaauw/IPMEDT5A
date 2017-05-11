import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from 'ng2-charts';
import {DashboardComponent} from "../components/dashboard/dashboard.component";
import {LoginGuard} from "../guards/login.guard";
import {OverzichtComponent} from "../components/overzicht/overzicht.component";
import {OpgepaktVandaagComponent} from "../components/opgepakt-vandaag/opgepakt-vandaag.component";
import {GescandVandaagComponent} from "../components/gescand-vandaag/gescand-vandaag.component";
import {VergelijkingActiesComponent} from "../components/vergelijking-acties/vergelijking-acties.component";
import {StatisticsService} from "../services/statistics/statistics.service";
import {IngedruktVandaagComponent} from "../components/ingedrukt-vandaag/ingedrukt-vandaag.component";

@NgModule({
    declarations: [
        DashboardComponent,
        OverzichtComponent,
        OpgepaktVandaagComponent,
        GescandVandaagComponent,
        IngedruktVandaagComponent,
        VergelijkingActiesComponent
    ],
    providers: [
        StatisticsService
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