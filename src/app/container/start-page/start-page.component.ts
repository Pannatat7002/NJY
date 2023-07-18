import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const Token = this.cookieService.get('accessToken')
    if(!!Token){
      this.router.navigate(['/landing'])
    } else {
      this.router.navigate(['/signin-page'])
    }
  }

}
