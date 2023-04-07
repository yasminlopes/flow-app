import { Component, OnInit } from '@angular/core';
import { CARD_ITEMS } from '../../model/home-cards';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cardItems = CARD_ITEMS

  constructor() { }

  ngOnInit(): void {}
}
