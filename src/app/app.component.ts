import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'attendanceApp';
  count =0;

  incrementCounter(){
    this.count++;
  }
  decrementCounter(){
    this.count--;
  }
}
