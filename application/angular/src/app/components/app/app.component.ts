import {Component, OnInit} from '@angular/core';
import {PusherService} from "../../services/pusher/pusher.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  private notifications: PusherService;

  ngOnInit(): void {

    this.notifications = new PusherService('notifications', 'button.pressed');

    this.notifications.messages.subscribe(data => {
      console.log(data);
    });

  }

}
