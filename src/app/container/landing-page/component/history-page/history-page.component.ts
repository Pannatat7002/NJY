import { Component, OnInit } from '@angular/core';
import { WorkDatabaseService } from 'src/app/service/work-database.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {
  timeout:boolean = true;
  userProfile:any
  constructor(
    private workDataService:WorkDatabaseService
  ) { }
  
  ngOnInit(): void {
    this.getUserProfile()
    // setTimeout(() => {                           // <<<---using ()=> syntax
    //   this.timeout = false;
    // }, 1500);

  }


    getUserProfile(){
      this.workDataService.getHistory('สมทรง หลิมบุญงาม').then((res)=>{
        console.log(res.user[0]);
        this.userProfile = res.user[0]
        this.timeout = false;
      })
    }
}
