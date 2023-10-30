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
  _selectTitle:any = 'อัตราการเต้นของหัวใจ'
  _selectDate:any = 'week'
  _selectRecord:any
  //ListData
  listTitle:any
  listDateTime:any
  listRecord:any
  @Output() onBackPath = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {                           // <<<---using ()=> syntax
      this.timeout = false;
    }, 300);
    // console.log('Current Month:', this.getCurrentMonth().month);
    // console.log('Days in Current Month:', this.getCurrentMonth().days);
    this.createDataTitle()
    this.getCurrentMonth()
    this.getChart()
  }

  getChart(){
    var listData = [65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40]
    var days = this.getCurrentMonth().days
    this.barChartLabels = days.splice(0,listData.length)
    this.mouthNow = this.getCurrentMonth().month
    this.barChartData = [
    { data: listData, 
      label: this._selectTitle,
      // borderColor: '#dc3545',
      // backgroundColor	:"#dc3545",
      tension: 0.1,
      fill: false,
      pointStyle : 'dash',
      hitRadius	: 5,
      borderWidth:3,
      // bodyColor:'#38454c',
      display:true
    },
    
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
    // console.log('event',event);
    this.timeOutLoading = event
  }

  onBack() {
    // console.log('onBack');
    this.onBackPath.emit('home')
  }

  selectTitle(item:any){
    this._selectTitle = item.badge
    this.getChart()
    console.log('item',item);
    
  }

  selectDate(item:any){
    this._selectDate = item
    console.log('item',item);

  }
  
  createDataTitle(){
    this.listTitle = [
      {
        badge:'อัตราการเต้นของหัวใจ',
        data:"47-155",
        unit:"bpm"
      },
      {
        badge:'อัตราการเต้นของหัวใจขณะ',
        data:"155",
        unit:"rpm"
      },
      {
        badge:'อัตราออกซิเจน',
        data:"105",
        unit:"Spo2"
      }
    ]

    this.listDateTime = [
      // {
        "week",
        "month",
        "3 month"
      // }
    ]

    this.listRecord = [
      {
        dateRecord:'บันทึก 1 ก.ค 2023',
        link:"https://drive.google.com/drive/folders/1ARskezcbg4jxQXjj1CjNcVzkGIMsoEsp?usp=drive_link",
        status:false,
      },
      {
        dateRecord:'บันทึก 1 ต.ค 2023',
        link:"https://drive.google.com/drive/folders/1ARskezcbg4jxQXjj1CjNcVzkGIMsoEsp?usp=drive_link",
        status:false,
      },
      {
        dateRecord:'บันทึก 1 ม.ค 2023',
        link:"https://drive.google.com/drive/folders/1ARskezcbg4jxQXjj1CjNcVzkGIMsoEsp?usp=drive_link",
        status:false,
      },
      {
        dateRecord:'บันทึก 1 ก.พ 2023',
        link:"https://drive.google.com/drive/folders/1ARskezcbg4jxQXjj1CjNcVzkGIMsoEsp?usp=drive_link",
        status:true,
      },
      {
        dateRecord:'บันทึก 1 ธ.ค 2023',
        link:"https://drive.google.com/drive/folders/1ARskezcbg4jxQXjj1CjNcVzkGIMsoEsp?usp=drive_link",
        status:true,
      },
      {
        dateRecord:'บันทึก 1 มิ.ย 2023',
        link:"https://drive.google.com/drive/folders/1ARskezcbg4jxQXjj1CjNcVzkGIMsoEsp?usp=drive_link",
        status:true,
      },
    ]
  }

  downloadRecord(){
    console.log('downloadRecord',this._selectRecord);
    window.open(this._selectRecord.link, "_blank");

  }
}
