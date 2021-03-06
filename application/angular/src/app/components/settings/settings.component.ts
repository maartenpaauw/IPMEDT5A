import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {SettingsService} from "../../services/settings/settings.service";
import {Setting} from "../../interfaces/setting.interface";
import {AutoUnsubscribe} from "../../decorators/auto.unsubscribe.decorator";
import {Subscription} from "rxjs/Subscription";
import {environment} from "../../../environments/environment";
import {ProductsService} from "../../services/products/products.service";
import {Product} from "../../interfaces/product.interface";
import {IntervalObservable} from "rxjs/observable/IntervalObservable";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
@AutoUnsubscribe()
export class SettingsComponent implements OnInit, AfterViewInit {

    public settings: Array<Setting>;
    public exampleFile: string = `${environment.urlWithoutApi}storage/producten.csv`;

    public type: string = 'success';
    public message: string;

    private settingsSubscription: Subscription;
    private settingSubscription: Subscription;
    private uploadSubscription: Subscription;

    private file: Array<File>;

    private observable: Subscription;

    constructor(private titleService: Title,
                private settingsService: SettingsService,
                private productsService: ProductsService) {
    }

    ngOnInit() {
        this.titleService.setTitle("Instellingen — IPMEDT5A");
    }

    ngAfterViewInit(): void {
        this.getSettings();

        this.observable = IntervalObservable.create(5000).subscribe(() => {
            this.getSettings();
        })
    }

    private getSettings() {
        this.settingsSubscription = this.settingsService.getSettings().subscribe(
            (res: any) => {
                this.settings = res;
            }
        );
    }

    /**
     *
     * @param setting
     */
    public toggleSetting(setting) {
        this.settingSubscription = this.settingsService.toggleSetting(setting).subscribe(
            (res: any) => {
                this.getSettings();
            }
        );
    }

    /**
     *
     * @param event
     */
    public voorraadLijst(event) {
        this.file = event.target.files;
    }

    /**
     *
     */
    public voorraadUploaden() {
        if(this.file)
        {
            const formData = new FormData();
            formData.append('file', this.file[0], this.file[0].name);

            this.uploadSubscription = this.productsService.uploadProducts(formData).subscribe(
                (res: Array<Product>) => {
                    this.message = 'Het uploaden van de nieuwe producten is gelukt.';
                },
                (err: any) => {
                    this.message = 'Er is iets fout gegaan...';
                    this.type= 'danger';
                }
            );
        }
    }
}