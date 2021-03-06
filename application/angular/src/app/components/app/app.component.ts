import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {PusherService} from "../../services/pusher/pusher.service";
import {ToastsManager} from "ng2-toastr";
import {Shelf} from "../../interfaces/shelf.interface";
import {Notification} from '../../interfaces/notification.interface';
import {Size} from "../../interfaces/size.interface";
import {Tag} from "../../interfaces/tag.interface";
import {Demo} from "../../interfaces/demo.interface";
import {Connect} from "../../interfaces/connect.interface";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {AutoUnsubscribe} from "../../decorators/auto.unsubscribe.decorator";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
@AutoUnsubscribe()
export class AppComponent implements OnInit {

    private notifications: PusherService;
    private demo: PusherService;

    private demoSubscribtion: Subscription;
    private notificationsSubscribtion: Subscription;

    constructor(private toastsManager: ToastsManager,
                private viewContainerRef: ViewContainerRef,
                private router: Router) {

        this.toastsManager.setRootViewContainerRef(viewContainerRef);
    }

    ngOnInit(): void {
        this.notificationsPusher();
        this.demoPusher();
    }

    private demoPusher(): void {
        this.demo = new PusherService();
        this.demo.listen('demos', 'demo.scanned');

        this.demoSubscribtion = this.demo.messages.subscribe((data: any | Connect) => {
            if (typeof (data.size) === 'undefined') {
                this.router.navigateByUrl(`/schappen/${data.shelf.mac_address}/koppelen/${data.uuid}`);
            }
        });
    }

    private notificationsPusher(): void {

        this.notifications = new PusherService();
        this.notifications.listen('notifications', 'button.pressed');

        this.notificationsSubscribtion = this.notifications.messages.subscribe((data: any | Notification) => {
            if (typeof (data.size) === 'undefined') {

                const shelf: Shelf = data.shelf;
                const sizes: Array<Size> = data.sizes;
                const tag: Tag = data.tag;
                const demo: Demo = data.shelf.demo;

                const eu_sizes: Array<string> = [];

                for (let size of sizes) {
                    eu_sizes.push(size.eu_size);
                }

                if(!demo) {
                    this.toastsManager.warning(`Een klant heeft hulp nodig bij schap ${shelf.id}.`, null, {
                        toastLife: 10000
                    });
                }

                else if(sizes.length == 0) {
                    this.toastsManager.error(`De schoen ${shelf.demo.product.shoe.name}, 
                                              ${shelf.demo.product.shoe.brand} is helaas niet op voorraad in maat
                                              ${tag.size.eu_size}`, null, {
                        toastLife: 10000
                    })
                }

                else {

                    if(!(eu_sizes.indexOf(tag.size.eu_size) != -1)) {
                        this.toastsManager.warning(`Een klant wilt bij schap ${shelf.id} 
                                                    de schoen ${shelf.demo.product.shoe.name}, 
                                                    ${shelf.demo.product.shoe.brand} 
                                                    passen in een van de ${eu_sizes.join(', ')} `, null, {
                            toastLife: 10000
                        });
                    }

                    else {
                        this.toastsManager.success(`Een klant wilt bij schap ${shelf.id} 
                                                    de schoen ${shelf.demo.product.shoe.name}, 
                                                    ${shelf.demo.product.shoe.brand} 
                                                    passen in de maat ${tag.size.eu_size}`, null, {
                            toastLife: 10000
                        });
                    }
                }
            }
        });
    }

}
