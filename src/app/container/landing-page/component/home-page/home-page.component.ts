import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @Output() outPaths = new EventEmitter<string>();
  @Input() userProfile: any = '-'
  nameHeader:any
  constructor(
    private router: Router,
    private cookieService: CookieService,
    
    ) { }
    
    ngOnInit(): void {
    const Token = this.cookieService.get('accessToken')
    if (!Token || Token === undefined) {
      this.router.navigate([''])
    }
    console.log('HomePageComponent userProfile',this.userProfile);
    this.nameHeader = this.userProfile.name
  }

  onNextPaths(path:string){
    // this.router.navigate([''])
    this.outPaths.emit(path)
  }
}
