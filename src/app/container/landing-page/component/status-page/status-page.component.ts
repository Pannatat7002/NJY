import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['./status-page.component.scss']
})
export class StatusPageComponent implements OnInit {
  timeout:boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {                           // <<<---using ()=> syntax
      this.timeout = false;
    }, 1500);
  }

}
