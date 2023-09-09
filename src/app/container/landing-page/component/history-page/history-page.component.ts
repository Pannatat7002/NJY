import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../../service/auth-service/auth.service'
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firestore } from "../../../../service/config/firebaseConfig";
import {ProfileForms} from "../../interfaces/form-data"
@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {
  _userProfile:ProfileForms ={}
  // @Input() _userProfile:any
  @Output() onBackPath = new EventEmitter<string>();
  @Input() _timeout:boolean = true;
  userToken:any = this.AuthService.jwt_decode(this.cookieService.get('accessToken')
  )
  constructor(
    // private workDataService: WorkDatabaseService,
    private AuthService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    // const userToken: any = this.AuthService.jwt_decode(accessToken)
    this.getUserProfile()
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

  async getUserProfile() {    
    const DataProfile: any = await getDocs(collection(firestore, "Users")); //get data getDataProfile
    DataProfile.forEach((doc: any) => {
      const dataUser = JSON.parse(JSON.stringify(doc.data()));
      if (this.userToken.email === dataUser.email) {
        this._userProfile = dataUser        
      }
    });
  }
  // getUserProfile() {
  //   this.workDataService.getHistory('นาย สุภัทร อาดนารี').then((res) => {
  //     console.log(res.user[0]);
  //     this.userProfile = res.user[0]
  //     this.timeout = false;
  //   })
  // }

  onBack() {
    // console.log('onBack');
    this.onBackPath.emit('home')
  }
}
