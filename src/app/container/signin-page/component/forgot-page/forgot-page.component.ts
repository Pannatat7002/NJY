import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../../../service/auth-service/auth.service'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
@Component({
  selector: 'app-forgot-page',
  templateUrl: './forgot-page.component.html',
  styleUrls: ['./forgot-page.component.scss']
})
export class ForgotPageComponent implements OnInit {
  timeOutLoading: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  loading(event: any) {
    console.log('event', event);
    this.timeOutLoading = event
  }

  forget() {
    const auth = getAuth();
    console.log('forget auth',auth);
    
    sendPasswordResetEmail(auth,'pannatat7002@gmail.com')
      .then(() => {
        window.location.href = "/"
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
}
