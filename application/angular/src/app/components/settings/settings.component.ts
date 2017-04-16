import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {SettingsService} from "../../services/settings/settings.service";
import {Setting} from "../../interfaces/setting.interface";
import {AutoUnsubscribe} from "../../decorators/auto.unsubscribe.decorator";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
@AutoUnsubscribe()
export class SettingsComponent implements OnInit {

    public settings: Array<Setting>;

    private settingsSubscription: Subscription;
    private settingSubscription: Subscription;

    constructor(private titleService: Title,
                private settingsService: SettingsService) {
    }

    ngOnInit() {
        this.titleService.setTitle("Settings — IPMEDT5A");

        this.getSettings();
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
}