import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ShelvesService} from "../../services/shelves/shelves.service";
import {Shelf} from "../../interfaces/shelf.interface";
import {AutoUnsubscribe} from "../../decorators/auto.unsubscribe.decorator";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-schappen',
  templateUrl: './schappen.component.html',
  styleUrls: ['./schappen.component.scss']
})
@AutoUnsubscribe()
export class SchappenComponent implements OnInit {

  public shelves: Array<Shelf>;

  private shelfSubscription: Subscription;

  constructor(private titleService: Title,
              private shelvesService: ShelvesService) { }

  ngOnInit() {
    this.titleService.setTitle("Schappen — IPMEDT5A");

    this.shelfSubscription = this.shelvesService.getShelves().subscribe(
        (res: any) => {
          this.shelves = res.data;
        }
    );
  }

}
