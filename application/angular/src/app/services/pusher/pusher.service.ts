import { Injectable } from '@angular/core';
import { List } from 'immutable';
import * as Pusher from 'pusher-js';
import {BehaviorSubject, Observable} from "rxjs";
import {PUSHER_KEY} from "../../../constants";

@Injectable()
export class PusherService {

  private pusher: any;

  private _messages: BehaviorSubject<List<string>> = new BehaviorSubject(List([]));
  public messages: Observable<List<string>> = this._messages.asObservable();

  constructor(private channelName: string,
              private event: string) {

    console.log('PusherService', 'constructor');

    this.pusher = new Pusher(PUSHER_KEY, {
      disableStats: true,
      cluster: 'eu'
    });

    this.pusher.logToConsole = true;

    let channel = this.pusher.subscribe(channelName);

    channel.bind(event, (data) => {
      this._messages.next(data);
    });
  }

}
