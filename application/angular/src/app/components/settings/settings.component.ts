import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {SettingsService} from "../../services/settings/settings.service";
import {Setting} from "../../interfaces/setting.interface";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public kan_aanpassen: Setting;

  constructor(private titleService: Title,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.titleService.setTitle("Settings — IPMEDT5A");

    this.settingsService.getKanAanpassen().subscribe(
        (res: any) => {
            this.kan_aanpassen = res.data;
        }
    );
  }

  public toggleKanAanpassen()
  {
      this.settingsService.toggleKanAanpassen().subscribe(
          (res: any) => {
              this.kan_aanpassen = res.data;
          }
      );
  }

}
