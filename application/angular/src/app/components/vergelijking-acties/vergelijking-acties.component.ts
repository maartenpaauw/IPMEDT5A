import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vergelijking-acties',
  templateUrl: './vergelijking-acties.component.html',
  styleUrls: ['./vergelijking-acties.component.scss']
})
export class VergelijkingActiesComponent implements OnInit {

  constructor() { }

  // Pie
  public pieChartLabels:string[] = ['Gescande maten', 'Opgepakte schoenen'];
  public pieChartData:number[] = [300, 500];
  public pieChartType:string = 'pie';
  public pieChartColors: any[] = [{ backgroundColor: ["rgba(231, 76, 60,1.0)", "rgba(52, 152, 219,1.0)"] }];

  ngOnInit() {
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
