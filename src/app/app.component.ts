import { Component } from '@angular/core';

@Component({                                
  selector: 'app-root',                                 //where to displat template
  templateUrl: './app.component.html',                  //template
  styleUrls: ['./app.component.css']                    //css for template
})  
export class AppComponent {                             
  title = 'GettingStarted';
  num1 : string;
  num2 : string; 
  result: number;
  constructor() { 
    // Initialization inside the constructor
    this.num1 = "";
    this.num2 = "";
    this.result = 0;
  }
  AddNumber() {
    this.result = parseInt(this.num1) + parseInt(this.num2);
  }
}
