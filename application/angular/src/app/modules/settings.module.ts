import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SettingsComponent} from "../components/settings/settings.component";
import {LoginGuard} from "../guards/login.guard";
import {SettingsService} from "../services/settings/settings.service";
import {ProductsService} from "../services/products/products.service";

@NgModule({
    declarations: [
        SettingsComponent
    ],
    providers: [
        SettingsService,
        ProductsService
    ],
    imports: [
        CommonModule,
        NgbModule,
        RouterModule.forChild([
            {
                path: '',
                component: SettingsComponent,
                pathMatch: 'full',
                canActivate: [
                    LoginGuard
                ]
            }
        ])
    ]
})
export class SettingsModule {}