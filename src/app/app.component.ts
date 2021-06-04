import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GettingStarted';
  num1: any | number;
  num2 : any | number;
  result : any | number;
  // num1 = new FormControl('');
  // num2 = new FormControl('');
  // result: string = "";

  AddNumber() {
    // let number1 = Number(this.num1.value);
    // let number2 = Number(this.num2.value);
    // this.result = (number1 + number2).toString();

    this.result = (parseFloat(this.num1.toString()) + parseFloat(this.num2.toString()) );
  }
}
