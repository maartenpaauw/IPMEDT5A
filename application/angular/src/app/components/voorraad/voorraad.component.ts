import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ProductsService} from "../../services/products/products.service";
import {Product} from "../../interfaces/product.interface";

@Component({
  selector: 'app-voorraad',
  templateUrl: './voorraad.component.html',
  styleUrls: ['./voorraad.component.scss']
})
export class VoorraadComponent implements OnInit {

  public products: Array<Product>;

  constructor(private titleService: Title,
              private productsService: ProductsService) { }

  ngOnInit() {
    this.titleService.setTitle("Voorraad — IPMEDT5A");

    this.productsService.getProducts().subscribe(
        (res: any) => {
          this.products = res;
        }
    );
  }

}
