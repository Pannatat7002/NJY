import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { Router } from '@angular/router';

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

  ) { }

  ngOnInit(): void {
    console.log('HomePageComponent userProfile',this.userProfile);
    this.nameHeader = this.userProfile.name
  }

  onNextPaths(path:string){
    // this.router.navigate([''])
    this.outPaths.emit(path)
  }
}
