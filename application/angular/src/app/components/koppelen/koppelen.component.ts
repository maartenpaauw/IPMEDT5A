import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-koppelen',
  templateUrl: './koppelen.component.html',
  styleUrls: ['./koppelen.component.scss']
})

export class KoppelenComponent implements OnInit {

  private mac_address: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.mac_address = params['mac_address'];
    });
  }

}
