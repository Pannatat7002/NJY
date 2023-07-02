import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-service',
  templateUrl: './loading-service.component.html',
  styleUrls: ['./loading-service.component.scss']
})
export class LoadingServiceComponent implements OnInit {
  timeout:boolean = true
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {                           // <<<---using ()=> syntax
      this.timeout = false;
    }, 1000);
  }

}
