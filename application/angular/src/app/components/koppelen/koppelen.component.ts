import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {Shelf} from "../../interfaces/shelf.interface";
import {ShelvesService} from "../../services/shelves/shelves.service";
import {LoginGuard} from "../../guards/login.guard";
import {Product} from "../../interfaces/product.interface";
import {ProductsService} from "../../services/products/products.service";

@Component({
  selector: 'app-koppelen',
  templateUrl: './koppelen.component.html',
  styleUrls: ['./koppelen.component.scss']
})

export class KoppelenComponent implements OnInit {

  private mac_address: string;
  private uuid: string;
  private shelf: Shelf;
  private products: Array<Product>;

  constructor(private titleService: Title,
              private activatedRoute: ActivatedRoute,
              private shelvesService: ShelvesService,
              private productsService: ProductsService,
              private loginGuard: LoginGuard) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.mac_address = params['mac_address'];
      this.uuid        = params['uuid'];
    });

    this.shelvesService.getShelf(this.mac_address).subscribe(
        (res: Shelf) => {
          this.shelf = res;

          this.titleService.setTitle(`Koppelen schap ${this.shelf.id} — IPMEDT5A`);
        },
        (err) => {
          this.loginGuard.redirect();
        }
    );

    this.productsService.getProducts().subscribe(
        (res: Array<Product>) => {
          this.products = res;
        }
    );
  }
}
