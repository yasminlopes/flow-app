import { Component, OnInit } from '@angular/core';
import { DAYS_OF_WEEK, MONTHS } from './model/greetings';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss'],
})
export class GreetingsComponent implements OnInit {

  public currentDate: Date = new Date();
  public daysOfWeek = DAYS_OF_WEEK;
  public months = MONTHS;

  constructor() {}

  ngOnInit(): void {}

  getGreetings() {
    const currentHour = this.currentDate.getHours();
    return currentHour >= 6 && currentHour < 12
      ? 'Bom dia!'
      : currentHour >= 12 && currentHour < 18
      ? 'Boa tarde!'
      : 'Boa noite!'
  }

  getCurrentDate() {
    const dayOfWeek = this.daysOfWeek[this.currentDate.getDay()];
    const dayOfMonth = this.currentDate.getDate();
    const month = this.months[this.currentDate.getMonth()];
    const year = this.currentDate.getFullYear();

    return `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
  }
}
