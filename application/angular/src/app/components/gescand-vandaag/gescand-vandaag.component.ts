import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {IntervalObservable} from "rxjs/observable/IntervalObservable";
import {Subscription} from "rxjs/Subscription";
import {AantalPerUur} from "../../interfaces/aantalperuur.interface";
import {StatisticsService} from "../../services/statistics/statistics.service";

@Component({
  selector: 'app-gescand-vandaag',
  templateUrl: './gescand-vandaag.component.html',
  styleUrls: ['./gescand-vandaag.component.scss']
})
export class GescandVandaagComponent implements OnInit, AfterViewInit, OnDestroy {

  public lineChartLabels:Array<string>;
  public lineChartData: Array<any>;
  public lineChartType: string = 'bar';
  public title: string = 'Gescanned vandaag';
  public lineChartOptions: any = {
    scaleBeginAtZero: true
  };

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

  ngOnInit() {
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

