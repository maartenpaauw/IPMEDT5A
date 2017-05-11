import {AfterViewInit, Component, OnInit} from '@angular/core';
import {IntervalObservable} from "rxjs/observable/IntervalObservable";
import {Subscription} from "rxjs/Subscription";
import {AantalPerUur} from "../../interfaces/aantalperuur.interface";
import {StatisticsService} from "../../services/statistics/statistics.service";
import {AutoUnsubscribe} from "../../decorators/auto.unsubscribe.decorator";

@Component({
  selector: 'app-ingedrukt-vandaag',
  templateUrl: './ingedrukt-vandaag.component.html',
  styleUrls: ['./ingedrukt-vandaag.component.scss']
})
@AutoUnsubscribe()
export class IngedruktVandaagComponent implements AfterViewInit {

  public lineChartLabels:Array<string>;
  public lineChartData: Array<any>;
  public lineChartType: string = 'bar';
  public title: string = 'Ingedrukt vandaag';

  public lineChartOptions: any = {
    scaleBeginAtZero: true
  };

  public lineChartColors: Array<any> = [
    { // Yellow
        backgroundColor: 'rgba(255,205,86,0.8)',
        borderColor: 'rgba(255,205,86,0.5)',
        pointBackgroundColor: 'rgba(255,205,86,0.5)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,205,86,0.5)'
    }
  ];

  private observable: Subscription;

  constructor(private statisticsService: StatisticsService) {}

  private data(): void {
    this.statisticsService.getPressedTodayGroupedByHour().subscribe(
        (res: Array<AantalPerUur>) => {
          const data   = [];
          const labels = [];

          for (let item of res) {
            data.push(item.aantal);
            labels.push(item.uur);
          }

          this.lineChartData = [{ data: data, label: 'Knoppen' }];
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

