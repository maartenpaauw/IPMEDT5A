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
import {DemosService} from "../../services/demos/demos.service";
import {Demo} from "../../interfaces/demo.interface";

@Component({
  selector: 'app-koppelen',
  templateUrl: './koppelen.component.html',
  styleUrls: ['./koppelen.component.scss']
})
@AutoUnsubscribe()
export class KoppelenComponent implements OnInit {

  public shelf: Shelf;
  public current_product_id: number;
  public uuid: string;
  public products: Array<Product>;
  public message: string;
  public type: string = 'success';

  private mac_address: string;
  private product_id: number;
  private paramsSubscription: Subscription;
  private shelfSubscription: Subscription;
  private demoSubscription: Subscription;
  private shelfUpdateSubscription: Subscription;
  private productSubscription: Subscription;

  constructor(private titleService: Title,
              private activatedRoute: ActivatedRoute,
              private shelvesService: ShelvesService,
              private demosService: DemosService,
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
          this.current_product_id = this.shelf.demo.product.id;
          console.info(this.current_product_id);
          this.titleService.setTitle(`Koppelen schap ${this.shelf.id} — IPMEDT5A`);
        },
        (err) => {
          this.loginGuard.redirect();
        }
    );

    this.productSubscription = this.productsService.getProducts().subscribe(
        (res: Array<Product>) => {
          this.products = res;
          this.product_id = this.products[0].id;
        }
    );
  }

  public product(event): void {
      this.product_id = (event.target).value;
  }

  public koppelen(): void {

      const data = {
          'uuid': this.uuid,
          'product_id': this.product_id
      };

    this.demoSubscription = this.demosService.storeDemos(data).subscribe(
        (res: Demo) => {
            this.shelfUpdateSubscription = this.shelvesService.linkDemo(this.mac_address, res.uuid).subscribe(
                (res: Shelf) => {
                    this.message = `Schap #${res.id} is succesvol gelinkt aan het product 
                                    ${res.demo.product.shoe.brand} - ${res.demo.product.shoe.name } 
                                    (${res.demo.product.shoe.color }) met maat ${res.demo.product.size.eu_size}.`;
                },
                (err: any) => {
                    this.message = 'Er is iets mis gegaan, probeer het later opnieuw.';
                    this.type = 'danger';
                }
            )
        },
        (err: any) => {
           this.message = 'Er is iets mis gegaan, probeer het later opnieuw.';
           this.type = 'danger';
        }
    );
  }
}
