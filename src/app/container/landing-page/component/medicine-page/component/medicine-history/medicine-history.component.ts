import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine-history',
  templateUrl: './medicine-history.component.html',
  styleUrls: ['./medicine-history.component.scss']
})
export class MedicineHistoryComponent implements OnInit {
  @Input() defaultDateTime: any
  @Input() getCurrentDateTime: any
  listTitle: any
  listTitleDate: any
  constructor() { }

  ngOnInit(): void {
    this.createData()
  }

  createData() {
    this.listTitle = {
      12: [
        {
          dateTime: 'เช้า',
          status: "success"
        },
        {
          dateTime: 'กลางวัน',
          status: "cancel"
        },
        {
          dateTime: 'เย็น',
          status: "request"
        },
        {
          dateTime: 'กลางคืน',
          status: "cancel"
        }
      ],
      11: [
        {
          dateTime: 'เช้า',
          status: "success"
        },
        {
          dateTime: 'กลางวัน',
          status: "cancel"
        },
        {
          dateTime: 'เย็น',
          status: "cancel"
        },
        {
          dateTime: 'กลางคืน',
          status: "cancel"
        }
      ],
      10: [
        {
          dateTime: 'เช้า',
          status: "success"
        },
        {
          dateTime: 'กลางวัน',
          status: "success"
        },
        {
          dateTime: 'เย็น',
          status: "success"
        },
        {
          dateTime: 'กลางคืน',
          status: "cancel"
        }
      ],
      9: [
        {
          dateTime: 'เช้า',
          status: "success"
        },
        {
          dateTime: 'กลางวัน',
          status: "success"
        },
        {
          dateTime: 'เย็น',
          status: "success"
        },
        {
          dateTime: 'กลางคืน',
          status: "cancel"
        }
      ],
      8: [
        {
          dateTime: 'เช้า',
          status: "success"
        },
        {
          dateTime: 'กลางวัน',
          status: "success"
        },
        {
          dateTime: 'เย็น',
          status: "success"
        },
        {
          dateTime: 'กลางคืน',
          status: "request"
        }
      ],
      7: [
        {
          dateTime: 'เช้า',
          status: "success"
        },
        {
          dateTime: 'กลางวัน',
          status: "success"
        },
        {
          dateTime: 'เย็น',
          status: "request"
        },
        {
          dateTime: 'กลางคืน',
          status: "success"
        }
      ],
      6: [
        {
          dateTime: 'เช้า',
          status: "success"
        },
        {
          dateTime: 'กลางวัน',
          status: "success"
        },
        {
          dateTime: 'เย็น',
          status: "success"
        },
        {
          dateTime: 'กลางคืน',
          status: "success"
        }
      ],
    }
    this.listTitleDate = Object.keys(this.listTitle)
    console.log(' this.listTitleDate', this.listTitleDate)
  }

  downloadRecord() {
    // console.log('downloadRecord', this._selectRecord);
    // window.open(this._selectRecord.link, "_blank");

  }
}
