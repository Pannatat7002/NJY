import { Component, Input, OnInit } from '@angular/core';
import { WorkDatabaseService } from 'src/app/service/work-database.service';
import { AuthService } from '../../../../service/auth-service/auth.service'
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {
  @Input() _userProfile:any
  @Input() _timeout:boolean = true;
  
  constructor(
    // private workDataService: WorkDatabaseService,
    private AuthService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    // this.getUserProfile()
    // setTimeout(() => {                           // <<<---using ()=> syntax
    //   this.timeout = false;
    // }, 1500);
  }

  SignOut() {
    this.cookieService.delete('accessToken')
    this.cookieService.deleteAll('accessToken')
    this.AuthService.SignOut().then(() => {
      setTimeout(() => {                           // <<<---using ()=> syntax
        this.router.navigate([''])
      }, 1000);
    })
  }

  // getUserProfile() {
  //   this.workDataService.getHistory('นาย สุภัทร อาดนารี').then((res) => {
  //     console.log(res.user[0]);
  //     this.userProfile = res.user[0]
  //     this.timeout = false;
  //   })
  // }
}
