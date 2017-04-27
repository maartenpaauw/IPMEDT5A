import {AfterViewInit, Component } from '@angular/core';
import {IntervalObservable} from "rxjs/observable/IntervalObservable";
import {Subscription} from "rxjs/Subscription";
import {AantalPerUur} from "../../interfaces/aantalperuur.interface";
import {StatisticsService} from "../../services/statistics/statistics.service";
import {AutoUnsubscribe} from "../../decorators/auto.unsubscribe.decorator";

@Component({
  selector: 'app-gescand-vandaag',
  templateUrl: './gescand-vandaag.component.html',
  styleUrls: ['./gescand-vandaag.component.scss']
})
@AutoUnsubscribe()
export class GescandVandaagComponent implements AfterViewInit {

  public lineChartLabels:Array<string>;
  public lineChartData: Array<any>;
  public lineChartType: string = 'bar';
  public title: string = 'Gescanned vandaag';

  public lineChartOptions: any = {
    scaleBeginAtZero: true
  };

  public lineChartColors: Array<any> = [
      { // Blue
          backgroundColor: 'rgba(54,162,235,0.8)',
          borderColor: 'rgba(54,162,235,0.5)',
          pointBackgroundColor: 'rgba(54,162,235,0.5)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(54,162,235,0.5)'
      }
  ];

  private observable: Subscription;

  constructor(private statisticsService: StatisticsService) {}

  private data(): void {
    this.statisticsService.getScannedTodayGroupedByHour().subscribe(
        (res: Array<AantalPerUur>) => {
          const data   = [];
          const labels = [];

          for (let item of res) {
            data.push(item.aantal);
            labels.push(item.uur);
          }

          this.lineChartData = [{ data: data, label: 'Maten' }];
          this.lineChartLabels = labels;
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

