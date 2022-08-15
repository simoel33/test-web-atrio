import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  firstProgress = 50;
  secondProgress = 25
  ngOnInit(): void {
  }
  makeChange(value:number)
  {
    if(this.firstProgress == 100 && this.secondProgress==100 && value!=0) return;
    if(value == 0)
    {
      this.firstProgress = this.secondProgress = 0;
       return;
      }
    this.firstProgress+=value;
    this.secondProgress+=value;
  }
}
