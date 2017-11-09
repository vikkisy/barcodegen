import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  colorsArr = [];
  constructor(){
      for (let i: number  = 0; i<= 10; i++) {
          const rand = (Math.floor(Math.random() * 5)) + 1;
          if (rand == 1) {
              this.colorsArr.push('Green');
            }
          if (rand == 2) {
            this.colorsArr.push('HotPink');
          }
          if (rand == 3) {
            this.colorsArr.push('MediumTurquoise');
          }
          if (rand == 4) {
            this.colorsArr.push('MediumVioletRed');
          }
          if (rand == 5) {
            this.colorsArr.push('MidnightBlue');
          }

      }
  }
  
  


}
