import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-voorraad',
  templateUrl: './voorraad.component.html',
  styleUrls: ['./voorraad.component.scss']
})
export class VoorraadComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Voorraad — IPMEDT5A");
  }

}
