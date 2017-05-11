import { Injectable } from '@angular/core';
import { List } from 'immutable';
import * as Pusher from 'pusher-js';
import {BehaviorSubject, Observable} from "rxjs";
import {PUSHER_KEY} from "../../../constants";
import {Notification } from '../../interfaces/notification.interface';

@Injectable()
export class PusherService {

  private pusher: any;

  private _messages: BehaviorSubject<List<Notification>> = new BehaviorSubject(List([]));
  public messages: Observable<List<Notification>> = this._messages.asObservable();

  public listen(channelName: string, event: string): void {

    this.pusher = new Pusher(PUSHER_KEY, {
      disableStats: true,
      cluster: 'eu'
    });

    let channel = this.pusher.subscribe(channelName);

    channel.bind(event, (data) => {
      this._messages.next(data);
    });

    return this.pusher;
  }
}
