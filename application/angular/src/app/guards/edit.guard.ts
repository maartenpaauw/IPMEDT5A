import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { SettingsService } from "../services/settings/settings.service";
import { Setting } from "../interfaces/setting.interface";
import {LoginGuard} from "./login.guard";

@Injectable()
export class EditGuard implements CanActivate {

  constructor(private settingsService: SettingsService,
              private loginGuard: LoginGuard) {}

  canActivate(): boolean {
    this.settingsService.getSetting('kan_koppelen').subscribe(
        (res: Setting) => {
          if(res.value) {
              return true;
          }

          else {
              this.loginGuard.redirect();
              return false;
          }
        },
        (err) => {
          this.loginGuard.redirect();
          return false;
        }
    );

    return true;
  }
}
