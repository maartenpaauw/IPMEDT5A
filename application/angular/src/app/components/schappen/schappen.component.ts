import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-schappen',
  templateUrl: './schappen.component.html',
  styleUrls: ['./schappen.component.scss']
})
export class SchappenComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle("Schappen — IPMEDT5A");
  }

}
