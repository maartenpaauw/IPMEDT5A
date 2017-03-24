import {NgModule} from "@angular/core";
import {SizesComponent} from "../components/sizes/sizes.component";
import {SizesService} from "../services/sizes/sizes.service";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        SizesComponent
    ],
    providers: [
        SizesService
    ],
    imports: [
        CommonModule,
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