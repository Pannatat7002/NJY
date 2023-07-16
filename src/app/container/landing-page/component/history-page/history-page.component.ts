import { Component, OnInit } from '@angular/core';
import { WorkDatabaseService } from 'src/app/service/work-database.service';
import { AuthService } from '../../../../service/auth-service/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {
  timeout:boolean = true;
  userProfile:any
  constructor(
    private workDataService:WorkDatabaseService,
    private AuthService: AuthService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.getUserProfile()
    // setTimeout(() => {                           // <<<---using ()=> syntax
    //   this.timeout = false;
    // }, 1500);

  }

  SignOut(){
    this.AuthService.SignOut().then(()=>{
      this.router.navigate([''])
    })
  }

    getUserProfile(){
      this.workDataService.getHistory('สมทรง หลิมบุญงาม').then((res)=>{
        console.log(res.user[0]);
        this.userProfile = res.user[0]
        this.timeout = false;
      })
    }
}
