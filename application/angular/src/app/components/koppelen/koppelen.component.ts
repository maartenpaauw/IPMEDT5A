import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {Shelf} from "../../interfaces/shelf.interface";
import {ShelvesService} from "../../services/shelves/shelves.service";
import {LoginGuard} from "../../guards/login.guard";
import {Product} from "../../interfaces/product.interface";
import {ProductsService} from "../../services/products/products.service";
import {Subscription} from "rxjs/Subscription";
import {AutoUnsubscribe} from "../../decorators/auto.unsubscribe.decorator";

@Component({
  selector: 'app-koppelen',
  templateUrl: './koppelen.component.html',
  styleUrls: ['./koppelen.component.scss']
})
@AutoUnsubscribe()
export class KoppelenComponent implements OnInit {

  private mac_address: string;
  private product_id: number;
  public shelf: Shelf;
  public uuid: string;
  public products: Array<Product>;

  private paramsSubscription: Subscription;
  private shelfSubscription: Subscription;
  private productSubscription: Subscription;

  constructor(private titleService: Title,
              private activatedRoute: ActivatedRoute,
              private shelvesService: ShelvesService,
              private productsService: ProductsService,
              private loginGuard: LoginGuard) { }

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      this.mac_address = params['mac_address'];
      this.uuid        = params['uuid'];
    });

    this.shelfSubscription = this.shelvesService.getShelf(this.mac_address).subscribe(
        (res: Shelf) => {
          this.shelf = res;

          this.titleService.setTitle(`Koppelen schap ${this.shelf.id} — IPMEDT5A`);
        },
        (err) => {
          this.loginGuard.redirect();
        }
    );

    this.productSubscription = this.productsService.getProducts().subscribe(
        (res: Array<Product>) => {
          this.products = res;
        }
    );
  }

  public product(event): void {
      this.product_id = (event.target).value;
  }

  public koppelen(): void {
    // TODO post naar naar demo.
  }
}
