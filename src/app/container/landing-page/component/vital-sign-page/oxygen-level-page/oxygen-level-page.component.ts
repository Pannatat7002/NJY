import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { WorkDatabaseService } from 'src/app/service/work-database.service';

@Component({
  selector: 'app-oxygen-level-page',
  templateUrl: './oxygen-level-page.component.html',
  styleUrls: ['./oxygen-level-page.component.scss']
})
export class OxygenLevelPageComponent implements OnInit {
  timeout: boolean = true;
  barChartOptions = {
    responsive: true,
  };
  barChartLabels: any
  barChartType: any = 'line';
  barChartLegend: any = true;
  barChartPlugins = [];
  mouthNow: any
  barChartData: any
  timeOutLoading: boolean = false;
  _selectTitle: any = 'อัตราออกซิเจน'
  _selectDate: any = 'week'
  _selectRecord: any
  //ListData
  listTitle: any
  listDateTime: any
  listRecord: any
  @Output() onBackPath = new EventEmitter<string>();
  @Input() userProfile: any
  @Input() defaultDateTime: any

  constructor(
    private workDataService: WorkDatabaseService,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {                           // <<<---using ()=> syntax
      this.timeout = false;
    }, 300);
    this.createDataTitle()
    this.getCurrentMonth()
  }

  getChart(item?: any) {
    // listData = [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40]
    var days = this.getCurrentMonth().days
    switch (this._selectDate) {
      case 'week':
        this.barChartLabels = days.splice(0, 7)
        break;
      case 'month':
        this.barChartLabels = days.splice(0, 31)
        break;
      case 'year':
        this.barChartLabels = days.splice(0, 12)
        break;
      default:

    }
    // this.barChartLabels = days.splice(0, dayscout)
    // this.barChartLabels = days.splice(0, item.data.length)
    this.mouthNow = this.getCurrentMonth().month
    this.barChartData = [
      {
        data: item['data'],
        label: item.badge,
        borderColor: '#6f42c1',
        backgroundColor	:"#6f42c1",
        tension: 0.1,
        fill: false,
        pointStyle: 'dash',
        hitRadius: 5,
        borderWidth: 3,
        // bodyColor:'#38454c',
        display: true
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

  loading(event: any) {
    // console.log('event',event);
    this.timeOutLoading = event
  }

  onBack() {
    this.onBackPath.emit('home')
  }

  selectTitle(item: any) {
    console.log('itemstart', item);

    this._selectTitle = item
    this.getChart(item)
  }

  selectDate(item: any) {
    this._selectDate = item
    this.getChart(this._selectTitle )
  }

  createDataTitle() {
    console.log('(this.userProfile', this.userProfile);

    // this.queryVitalSigns(this.userProfile.ender)
    this.queryVitalSigns("นายวีระยุทร์ สุธีสรโยธิน")
    this.listDateTime = ["week", "month", "year"]
    this.listRecord = [
      {
        dateRecord: 'บันทึก 1 ก.ค 2023',
        link: "https://drive.google.com/drive/folders/1ARskezcbg4jxQXjj1CjNcVzkGIMsoEsp?usp=drive_link",
        status: false,
      },
      {
        dateRecord: 'บันทึก 1 ต.ค 2023',
        link: "https://drive.google.com/drive/folders/1ARskezcbg4jxQXjj1CjNcVzkGIMsoEsp?usp=drive_link",
        status: false,
      },
      {
        dateRecord: 'บันทึก 1 ม.ค 2023',
        link: "https://drive.google.com/drive/folders/1ARskezcbg4jxQXjj1CjNcVzkGIMsoEsp?usp=drive_link",
        status: false,
      },
      {
        dateRecord: 'บันทึก 1 ก.พ 2023',
        link: "https://drive.google.com/drive/folders/1ARskezcbg4jxQXjj1CjNcVzkGIMsoEsp?usp=drive_link",
        status: true,
      },
      {
        dateRecord: 'บันทึก 1 ธ.ค 2023',
        link: "https://drive.google.com/drive/folders/1ARskezcbg4jxQXjj1CjNcVzkGIMsoEsp?usp=drive_link",
        status: true,
      },
      {
        dateRecord: 'บันทึก 1 มิ.ย 2023',
        link: "https://drive.google.com/drive/folders/1ARskezcbg4jxQXjj1CjNcVzkGIMsoEsp?usp=drive_link",
        status: true,
      },
    ]
  }

  downloadRecord() {
    console.log('downloadRecord', this._selectRecord);
    window.open(this._selectRecord.link, "_blank");

  }

  queryVitalSigns(userName: string) {
    this.workDataService.queryVitalSigns(userName, this.defaultDateTime).then((res) => {
      var data: any = res.daily_Health_vitality.vital_signs
      console.log('queryVitalSigns', data);
      this.listTitle = [
        {
          badge: 'อัตราออกซิเจน',
          data: [],
          unit: "%"
        },
        // {
        //   badge: 'ขณะหัวใจห้องล่างคลายตัว(DBP)',
        //   data: [],
        //   unit: "mmHg"
        // },
        // {
        //   badge: ' ชีพจร (Pulse)  ',
        //   data: [],
        //   unit: "/min"
        // }
      ]
      Object.keys(data).forEach((list: any) => {
        var item: any = data[list]['Blood_Pressure']
        this.listTitle[0]['data'].push(Number(item.O2) || 0)
        // this.listTitle[1]['data'].push(Number(item.dbp) || 0)
        // this.listTitle[2]['data'].push(Number(item[" pulse"]) || 0)
      })
      console.log('this.listTitle', this.listTitle);
      this.selectTitle(this.listTitle[0])
    }).catch((err) => {
      console.log('queryVitalSigns err', err);
    })
  }
}