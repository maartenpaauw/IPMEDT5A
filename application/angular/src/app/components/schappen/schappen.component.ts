import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ShelvesService} from "../../services/shelves/shelves.service";
import {Shelf} from "../../interfaces/shelf.interface";

@Component({
  selector: 'app-schappen',
  templateUrl: './schappen.component.html',
  styleUrls: ['./schappen.component.scss']
})
export class SchappenComponent implements OnInit {

  public shelves: Array<Shelf>;

  constructor(private titleService: Title,
              private shelvesService: ShelvesService) { }

  ngOnInit() {
    this.titleService.setTitle("Schappen — IPMEDT5A");

    this.shelvesService.getShelves().subscribe(
        (res: any) => {
          this.shelves = res.data;
        }
    );
  }

}
