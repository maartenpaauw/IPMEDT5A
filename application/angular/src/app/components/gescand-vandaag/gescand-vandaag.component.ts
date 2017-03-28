import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gescand-vandaag',
  templateUrl: './gescand-vandaag.component.html',
  styleUrls: ['./gescand-vandaag.component.scss']
})
export class GescandVandaagComponent implements OnInit {

  // lineChart
  public lineChartData:Array<any> = [
    {data: [8, 14, 31, 17, 31, 27, 41, 16, 6], label: 'Schoenen'}
  ];
  public lineChartLabels:Array<any> = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(231, 76, 60,0.5)',
      borderColor: 'rgba(192, 57, 43,1.0)',
      pointBackgroundColor: 'rgba(231, 76, 60,1.0)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(192, 57, 43,1.0)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  constructor() { }

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

