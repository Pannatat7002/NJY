import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'NJY-follow-app';
  title = 'Health-follow-app';
  eventLoading:boolean = false
  Loading(event:boolean){
    this.eventLoading = event
  }
  //TOkenfirebase = 1//0g2M_xLgPTdx7CgYIARAAGBASNwF-L9Ir3n1y7jS7P0RiuOQ2M5kFbd8KE0Op-i6NoJYKQkxSqDlV1sCKkYz7KjbzQb9hnMhTQFI       
}
