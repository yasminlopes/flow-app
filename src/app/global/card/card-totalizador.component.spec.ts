import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTotalizadorComponent } from './card-totalizador.component';

describe('CardTotalizadorComponent', () => {
  let component: CardTotalizadorComponent;
  let fixture: ComponentFixture<CardTotalizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTotalizadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTotalizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
