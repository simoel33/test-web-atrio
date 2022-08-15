import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  constructor() { }
  @Input() value = 0;
  ngOnInit(): void {
  }

  reset(){
  this.value= 0;
  }
  add(val:number){
    if(this.value == 100) return;
    this.value+=val;
  }
}
