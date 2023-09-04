import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth-service/auth.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { WorkDatabaseService } from 'src/app/service/work-database.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
selectMode:string = "main"
userProfile:any
timeout:boolean = true;
timeOutLoading:boolean = false;
  constructor(
    private AuthService:AuthService,
    private router: Router,
    private workDataService: WorkDatabaseService,
    private cookieService: CookieService,
  ) { }

  ngOnInit(): void {
    const Token = this.cookieService.get('accessToken')
    if(!Token){
      this.router.navigate([''])
    } else {
      this.userProfile = JSON.parse(this.cookieService.get('userProfile'))    
      this.getUserProfile(this.userProfile.ender)
    }
  }

  loading(event:any){
    console.log('event',event);
    this.timeOutLoading = event
  }

  SignOut(){
    this.AuthService.SignOut().then(()=>{
      this.router.navigate([''])
    })
  }


  getUserProfile(user:string) {
    this.workDataService.getHistory(user).then((res) => {
      this.userProfile = res.user[0]
      this.timeout = false
    }).catch((err)=>{
      this.timeout = false
    })
  }
}
