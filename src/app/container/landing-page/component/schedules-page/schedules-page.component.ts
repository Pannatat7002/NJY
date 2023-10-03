import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-schedules-page',
  templateUrl: './schedules-page.component.html',
  styleUrls: ['./schedules-page.component.scss']
})
export class SchedulesPageComponent implements OnInit {
  @Output() onBackPath = new EventEmitter<string>();
  days: any = []
  textdate:any
  month: any = []
  constructor() { }

  ngOnInit(): void {
    this.getCurrentMonth()

  }
  onBack() {
    // console.log('onBack');
    this.onBackPath.emit('home')
  }

  getCurrentMonth() {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const thaimonths = [
      'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
      'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
    ];
    const thaiDate = [
      'อาทิตย์','จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'
    ];
    // this.days = thaiDate

    const selectedDate = new Date(); // ในตัวอย่างนี้เลือกวันที่ปัจจุบัน
    const dayOfWeek = selectedDate.getDay();
    this.textdate = thaiDate[dayOfWeek]


    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const daysInMonth = new Date(currentYear, currentMonthIndex + 1, 0).getDate();

    const currentMonth = thaimonths[currentMonthIndex];

    const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);
    this.days = daysArray
    this.month = currentMonth
    console.log('this.days', this.days);
    console.log('this.month', this.month);

    return {
      month: currentMonth,
      days: daysArray
    };
  }

  selectDate(numberDate:any){
    console.log('this.days[numberDate]',this.days[numberDate]);
    
  }
}
