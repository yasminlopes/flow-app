import { Component, Input, OnInit } from '@angular/core';

interface CardItems{
  icon: string,
  title: string,
  value: number
}

@Component({
  selector: 'app-card-totalizador',
  templateUrl: './card-totalizador.component.html',
  styleUrls: ['./card-totalizador.component.scss']
})

export class CardTotalizadorComponent implements OnInit {

  @Input() items: CardItems[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
