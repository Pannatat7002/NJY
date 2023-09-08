import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @Output() outPaths = new EventEmitter<string>();

  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  onNextPaths(path:string){
    // this.router.navigate([''])
    this.outPaths.emit(path)
  }
}
