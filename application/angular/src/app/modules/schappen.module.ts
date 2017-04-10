import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {LoginGuard} from "../guards/login.guard";
import {EditGuard} from "../guards/edit.guard";
import {ShelvesService} from "../services/shelves/shelves.service";
import {SchappenComponent} from "../components/schappen/schappen.component";
import {KoppelenComponent} from "../components/koppelen/koppelen.component";


@NgModule({
    declarations: [
        SchappenComponent,
        KoppelenComponent
    ],
    providers: [
        ShelvesService
    ],
    imports: [
        CommonModule,
        NgbModule,
        RouterModule.forChild([
            {
                path: '',
                component: SchappenComponent,
                pathMatch: 'full',
                canActivate: [
                    LoginGuard
                ]
            },
            {
                path: ':mac_address/koppelen',
                component: KoppelenComponent,
                pathMatch: 'full',
                canActivate: [
                    LoginGuard,
                    EditGuard
                ]
            }
        ])
    ]
})
export class SchappenModule {}