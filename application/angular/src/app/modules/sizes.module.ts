import {NgModule} from "@angular/core";
import {SizesComponent} from "../components/sizes/sizes.component";
import {SizesService} from "../services/sizes/sizes.service";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [
        SizesComponent
    ],
    providers: [
        SizesService
    ],
    imports: [
        CommonModule,
        NgbModule,
        RouterModule.forChild([
            {
                path: '',
                component: SizesComponent,
                pathMatch: 'full'
            }
        ])
    ]
})
export class SizesModule {}