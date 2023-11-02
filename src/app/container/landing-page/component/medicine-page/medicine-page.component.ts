import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WorkDatabaseService } from 'src/app/service/work-database.service';

@Component({
  selector: 'app-medicine-page',
  templateUrl: './medicine-page.component.html',
  styleUrls: ['./medicine-page.component.scss']
})
export class MedicinePageComponent implements OnInit {
  timeout: boolean = true;
  barChartOptions = {
    responsive: true,
  };
  barChartLabels: any
  // barChartType: any = 'line';
  barChartType: any = 'bar';
  barChartLegend: any = true;
  barChartPlugins = [];
  mouthNow: any
  barChartData: any
  timeOutLoading: boolean = false;
  _selectContent: any = 'now'
  _selectDate: any = 'week'
  _selectRecord: any
  //ListData
  listTitle: any
  listDateTime: any
  listRecord: any
  @Output() onBackPath = new EventEmitter<string>();
  @Input() userProfile: any
  @Input() defaultDateTime: any

  constructor(private workDataService: WorkDatabaseService,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {                           // <<<---using ()=> syntax
      this.timeout = false;
    }, 300);
    // this.createDataTitle()
    this.getCurrentMonth()
  }
  loading(event: any) {
    // console.log('event',event);
    this.timeOutLoading = event
  }
  onBack() {
    this.onBackPath.emit('home')
  }

  getCurrentMonth() {
    const monthsTh = [
      'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
      'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
    ];

    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const daysInMonth = new Date(currentYear, currentMonthIndex + 1, 0).getDate();

    const currentMonth = monthsTh[currentMonthIndex];

    const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);
    this.mouthNow = currentMonth
    return {
      month: currentMonth,
      days: daysArray
    };
  }

  selectContent(item: any) {
    this._selectContent = item
    // this.getChart(this._selectTitle )
  }
  
}
