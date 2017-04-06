import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {PusherService} from "../../services/pusher/pusher.service";
import {ToastsManager} from "ng2-toastr";
import {Shelf} from "../../interfaces/shelf.interface";
import {Notification} from '../../interfaces/notification.interface';
import {List} from "immutable";
import {Size} from "../../interfaces/size.interface";
import {Tag} from "../../interfaces/tag.interface";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    private notifications: PusherService;
    private demo: PusherService;

    constructor(private toastsManager: ToastsManager,
                private viewContainerRef: ViewContainerRef) {

        this.toastsManager.setRootViewContainerRef(viewContainerRef);
    }

    ngOnInit(): void {
        this.notificationsPusher();
        this.demoPusher();
    }

    private demoPusher(): void {
        this.demo = new PusherService('demo', 'demo.linked');
    }

    private notificationsPusher(): void {

        this.notifications = new PusherService('notifications', 'button.pressed');

        this.notifications.messages.subscribe((data: any | Notification) => {
            if (typeof (data.size) === 'undefined') {

                const shelf: Shelf            = data.shelf;
                const sizes: Array<Size>      = data.sizes;
                const tag: Tag                = data.tag;
                const eu_sizes: Array<string> = [];

                for (let size of sizes) {
                    eu_sizes.push(size.eu_size);
                }

                let message: string = `Een klant wilt bij schap ${shelf.id} 
                                       de schoen ${shelf.demo.product.shoe.name}, ${shelf.demo.product.shoe.brand} 
                                       passen in een van de ${eu_sizes.join(', ')} `;

                this.toastsManager.success(message, null, {
                    toastLife: 10000
                });
            }
        });
    }

}
