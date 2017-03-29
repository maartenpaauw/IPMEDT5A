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

  ngOnInit() {
  }
}
