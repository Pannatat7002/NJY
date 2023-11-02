import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine-start',
  templateUrl: './medicine-start.component.html',
  styleUrls: ['./medicine-start.component.scss']
})
export class MedicineStartComponent implements OnInit {
  @Input() defaultDateTime: any
  @Input() getCurrentDateTime: any

  constructor() { }

  ngOnInit(): void {
  }

}
