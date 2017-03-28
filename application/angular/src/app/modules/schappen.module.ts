import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {LoginGuard} from "../guards/login.guard";
import {SchappenComponent} from "../components/schappen/schappen.component";
import {ShelvesService} from "../services/shelves/shelves.service";


@NgModule({
    declarations: [
        SchappenComponent
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
            }
        ])
    ]
})
export class SchappenModule {}