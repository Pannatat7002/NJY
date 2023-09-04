import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth-service/auth.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { WorkDatabaseService } from 'src/app/service/work-database.service';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit {
  alertError: any
  userProfile: any
  timeOutLoading: boolean = false
  forgot:boolean = false;
  constructor(
    private AuthService: AuthService,
    private router: Router,
    private cookieService: CookieService,
    private workDataService: WorkDatabaseService,
  ) { }

  async ngOnInit() {
    const Token = await this.cookieService.get('accessToken')
    if (Token) {
      console.log("Token", Token);
      this.router.navigate(['/landing'])
    }
  }
  onClickSubmit(result: any) {
    console.log("You have email : " + result.email);
    console.log("You have password : " + result.password);
    this.signin(result.email, result.password)
  }

  signin(email: any, password: any) {
    this.AuthService.SignIn(email, password).then((res: any) => {
      const accessToken: any = res.user._delegate.accessToken
      if (accessToken) {
        const userToken: any = this.AuthService.jwt_decode(accessToken)
        this.workDataService.getUserProfile(userToken.email).then((res) => {
          this.userProfile = res.user
          console.log('this.userProfile', this.userProfile[0].ender)
          if (this.userProfile) {
            this.cookieService.set('accessToken', accessToken)
            this.cookieService.set('userProfile', JSON.stringify(this.userProfile[0]))
            this.router.navigate(['/landing'])
          } else {
            this.alertError = JSON.stringify("ไมาพบข้อมูลในระบบ")
          }
        }).catch((err) => {
          this.alertError = JSON.stringify("อีเมลไม่ถูกต้อง")

        })
      }
    }).catch((err) => {
      this.alertError = JSON.stringify(err.code)
    })
  }

  loading(event: any) {
    console.log('event', event);
    this.timeOutLoading = event
  }

  submit() {
    console.log('1');

  }

  // forget() {
  //   const auth = getAuth();
  //   console.log('forget auth',auth);
    
  //   sendPasswordResetEmail(auth,'pannatat7002@gmail.com')
  //     .then(() => {
  //       // Password reset email sent!
  //       // ..
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });
  // }

  closeforGet(evet:boolean){
    this.forgot = evet
  }
}
