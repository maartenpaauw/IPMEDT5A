import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ShelvesService} from "../../services/shelves/shelves.service";

@Component({
  selector: 'app-schappen',
  templateUrl: './schappen.component.html',
  styleUrls: ['./schappen.component.scss']
})
export class SchappenComponent implements OnInit {

  private shelves: any;

  constructor(private titleService: Title,
              private shelvesService: ShelvesService) { }

  ngOnInit() {
    this.titleService.setTitle("Schappen — IPMEDT5A");

    this.shelvesService.getShelves().subscribe(
        (res: any) => {
          console.log(res);
          this.shelves = res;
        }
    );
  }

}
