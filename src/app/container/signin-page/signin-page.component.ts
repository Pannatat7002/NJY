import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth-service/auth.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit {
  alertError:any
  constructor(
    private AuthService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {}
  onClickSubmit(result:any) {
    console.log("You have email : " + result.email);
    console.log("You have password : " + result.password);
    this.signin(result.email,result.password)
  }

  signin(email:any,password:any) {
    this.AuthService.SignIn(email,password).then((res: any) => {
      console.log('res', res);

      const userToken = res.user._delegate.accessToken
      if(userToken){
        this.router.navigate(['/landing'])
      }
      console.log('userToken', userToken);
      console.log('JWT', this.AuthService.jwt_decode(userToken));

    }).catch((err)=>{
      this.alertError = JSON.stringify(err.code)
    })
  }
  submit() {
    console.log('1');

  }
}
