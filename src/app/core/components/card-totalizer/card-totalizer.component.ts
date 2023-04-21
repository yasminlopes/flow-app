import { Component, Input, OnInit } from '@angular/core';

interface CardItems{
  icon: string,
  title: string,
  value: number
}

@Component({
  selector: 'app-card-totalizer',
  templateUrl: './card-totalizer.component.html',
  styleUrls: ['./card-totalizer.component.scss']
})

export class CardTotalizerComponent implements OnInit {

  @Input() items: CardItems[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
