import { Component, OnInit } from '@angular/core';

import {SizesService} from "../../services/sizes/sizes.service";

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrls: ['./sizes.component.scss']
})
export class SizesComponent implements OnInit {

  private sizes: any;

  constructor(private sizesService: SizesService) { }

  ngOnInit() {
    this.sizesService.getSizes().subscribe(
        (res: any) => {
          console.log(res);
          this.sizes = res;
        }
    );
  }

}
