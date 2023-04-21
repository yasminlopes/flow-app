import { Component, Input, OnInit } from '@angular/core';

interface CardItems{
  icon: string,
  title: string,
  value: number,
  tooltip?: string,
}

@Component({
  selector: 'app-card-totalizer',
  templateUrl: './card-totalizer.component.html',
  styleUrls: ['./card-totalizer.component.scss']
})

export class CardTotalizerComponent implements OnInit {

  @Input() items: CardItems[] = [];
  @Input() totalizer: Object;

  constructor() { }

  ngOnInit(): void {
  }

}
