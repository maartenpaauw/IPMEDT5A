import {AfterViewInit, Component} from '@angular/core';
import {Action} from "../../interfaces/action.interface";
import {IntervalObservable} from "rxjs/observable/IntervalObservable";
import {Subscription} from "rxjs/Subscription";
import {StatisticsService} from "../../services/statistics/statistics.service";
import {AutoUnsubscribe} from "../../decorators/auto.unsubscribe.decorator";

@Component({
  selector: 'app-vergelijking-acties',
  templateUrl: './vergelijking-acties.component.html',
  styleUrls: ['./vergelijking-acties.component.scss']
})
@AutoUnsubscribe()
export class VergelijkingActiesComponent implements AfterViewInit {

  public pieChartLabels: Array<string>;
  public pieChartData: Array<number>;
  public chartType: string = "pie";
  public title: string = "Acties";

  private actionSubscription: Subscription;
  private observable: Subscription;

  constructor(private statisticsService: StatisticsService) { }

  private data(): void {
      this.actionSubscription = this.statisticsService.getActionsCount().subscribe(
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

  ngAfterViewInit(): void {
      this.data();

      this.observable = IntervalObservable.create(5000).subscribe(() => {
          this.data();
      });
  }
}
