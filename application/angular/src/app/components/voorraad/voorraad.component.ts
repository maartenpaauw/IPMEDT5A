import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ProductsService} from "../../services/products/products.service";
import {Product} from "../../interfaces/product.interface";
import {Subscription} from "rxjs/Subscription";
import {AutoUnsubscribe} from "../../decorators/auto.unsubscribe.decorator";

@Component({
  selector: 'app-voorraad',
  templateUrl: './voorraad.component.html',
  styleUrls: ['./voorraad.component.scss']
})
@AutoUnsubscribe()
export class VoorraadComponent implements OnInit {

  public products: Array<Product>;

  private productSubscription: Subscription;

  constructor(private titleService: Title,
              private productsService: ProductsService) { }

  ngOnInit() {
    this.titleService.setTitle("Voorraad — IPMEDT5A");

    this.productSubscription = this.productsService.getProducts().subscribe(
        (res: Array<Product>) => {
          this.products = res;
        }
    );
  }

}
