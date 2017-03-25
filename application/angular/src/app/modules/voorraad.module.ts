import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {VoorraadComponent} from "../components/voorraad/voorraad.component";
import {LoginGuard} from "../guards/login.guard";


@NgModule({
    declarations: [
        VoorraadComponent
    ],
    providers: [
    ],
    imports: [
        CommonModule,
        NgbModule,
        RouterModule.forChild([
            {
                path: '',
                component: VoorraadComponent,
                pathMatch: 'full',
                canActivate: [
                    LoginGuard
                ]
            }
        ])
    ]
})
export class VoorraadModule {}