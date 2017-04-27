import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ProductsService} from "../../services/products/products.service";
import {Product} from "../../interfaces/product.interface";
import {Subscription} from "rxjs/Subscription";
import {AutoUnsubscribe} from "../../decorators/auto.unsubscribe.decorator";
import {IntervalObservable} from "rxjs/observable/IntervalObservable";

@Component({
  selector: 'app-voorraad',
  templateUrl: './voorraad.component.html',
  styleUrls: ['./voorraad.component.scss']
})
@AutoUnsubscribe()
export class VoorraadComponent implements OnInit, AfterViewInit {

  public products: Array<Product>;

  private productSubscription: Subscription;
  private observable: Subscription;

  constructor(private titleService: Title,
              private productsService: ProductsService) { }

  ngOnInit() {
    this.titleService.setTitle("Voorraad — IPMEDT5A");
  }

  ngAfterViewInit() {
    this.getProducts();

    this.observable = IntervalObservable.create(5000).subscribe(() => {
      this.getProducts();
    });
  }

  private getProducts(): void {
    this.productSubscription = this.productsService.getProducts().subscribe(
        (res: Array<Product>) => {
          this.products = res;
        }
    );
  }
}
