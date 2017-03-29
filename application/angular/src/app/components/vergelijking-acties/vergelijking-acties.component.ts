import { AfterViewInit, Component, OnInit} from '@angular/core';
import {VergelijkingActiesService} from "../../services/vergelijking-acties/vergelijking-acties.service";
import {Action} from "../../interfaces/action.interface";

@Component({
  selector: 'app-vergelijking-acties',
  templateUrl: './vergelijking-acties.component.html',
  styleUrls: ['./vergelijking-acties.component.scss']
})
export class VergelijkingActiesComponent implements OnInit, AfterViewInit {

  public pieChartLabels: Array<string>;
  public pieChartData:   Array<number>;

  constructor(private vergelijkingActiesService: VergelijkingActiesService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
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

}
