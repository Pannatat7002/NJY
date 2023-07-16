import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth-service/auth.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
selectMode:string = "main"

  constructor(
    private AuthService:AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  SignOut(){
    this.AuthService.SignOut().then(()=>{
      this.router.navigate([''])
    })
  }
}
