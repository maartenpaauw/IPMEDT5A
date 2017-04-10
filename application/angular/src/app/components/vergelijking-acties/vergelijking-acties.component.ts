import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {VergelijkingActiesService} from "../../services/vergelijking-acties/vergelijking-acties.service";
import {Action} from "../../interfaces/action.interface";
import {IntervalObservable} from "rxjs/observable/IntervalObservable";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-vergelijking-acties',
  templateUrl: './vergelijking-acties.component.html',
  styleUrls: ['./vergelijking-acties.component.scss']
})
export class VergelijkingActiesComponent implements OnInit, AfterViewInit, OnDestroy {

  public pieChartLabels: Array<string>;
  public pieChartData: Array<number>;
  public chartType: string = "pie";
  public title: string = "Acties";

  private observable: Subscription;

  constructor(private vergelijkingActiesService: VergelijkingActiesService) { }

  private data(): void {
      this.vergelijkingActiesService.getActionsCount().subscribe(
          (res: Array<Action>) => {

              this.pieChartLabels = [];
              this.pieChartData = [];

              for(let action of res) {
                  this.pieChartLabels.push(action.name);
                  this.pieChartData.push(action.statistics_count);
              }
          }
      );
  }

  ngOnInit(): void {
      this.data();
  }

  ngAfterViewInit(): void {
      this.observable = IntervalObservable.create(2000).subscribe(() => {
          this.data();
      });
  }

  ngOnDestroy(): void {
      this.observable.unsubscribe();
  }
}
