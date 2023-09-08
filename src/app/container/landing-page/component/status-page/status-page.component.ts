import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.scss']
})
export class StatusPageComponent implements OnInit {
  timeout:boolean = true;
  barChartOptions = {
    responsive: true,
  };
  barChartLabels:any
  barChartType:any = 'line';
  barChartLegend:any = true;
  barChartPlugins = [];
  mouthNow:any
  barChartData: any
  timeOutLoading:boolean = false;
  @Output() onBackPath = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {                           // <<<---using ()=> syntax
      this.timeout = false;
    }, 300);
    console.log('Current Month:', this.getCurrentMonth().month);
    console.log('Days in Current Month:', this.getCurrentMonth().days);
    this.getCurrentMonth()
    this.getChart()
  }

  getChart(){
    this.barChartLabels = this.getCurrentMonth().days
    this.mouthNow = this.getCurrentMonth().month
    this.barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40], label: 'BP' },
    // { data: [28, 48, 40, 19, 86, 27, 90,65, 59, 80, 81, 56, 55, 40], label: 'Spo2' },
  ];
  }

  getCurrentMonth() {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
  
    const daysInMonth = new Date(currentYear, currentMonthIndex + 1, 0).getDate();
  
    const currentMonth = months[currentMonthIndex];
  
    const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);
  
    return {
      month: currentMonth,
      days: daysArray
    };
  }

  loading(event:any){
    console.log('event',event);
    this.timeOutLoading = event
  }

  onBack() {
    console.log('onBack');
    this.onBackPath.emit('home')
  }
}
