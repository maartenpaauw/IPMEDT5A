import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {OpgepaktVandaagService} from "../../services/opgepakt-vandaag/opgepakt-vandaag.service";
import {IntervalObservable} from "rxjs/observable/IntervalObservable";
import {Subscription} from "rxjs/Subscription";
import {AantalPerUur} from "../../interfaces/aantalperuur.interface";

@Component({
  selector: 'app-opgepakt-vandaag',
  templateUrl: './opgepakt-vandaag.component.html',
  styleUrls: ['./opgepakt-vandaag.component.scss']
})
export class OpgepaktVandaagComponent implements OnInit, AfterViewInit, OnDestroy {

  public lineChartLabels:Array<string>;
  public lineChartData: Array<any>;
  public lineChartType: string = 'bar';
  public title: string = 'Opgepakt vandaag';
  public lineChartOptions: any = {
      scaleBeginAtZero: true
  };

  private observable: Subscription;

  constructor(private opgepaktVandaagService: OpgepaktVandaagService) {}

  private data(): void {
      this.opgepaktVandaagService.getPickedUpTodayGroupedByHour().subscribe(
        (res: Array<AantalPerUur>) => {
            const data   = [];
            const labels = [];

            for (let item of res) {
                data.push(item.aantal);
                labels.push(item.uur);
            }

            this.lineChartData = [{ data: data, label: 'Schoenen' }];
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

