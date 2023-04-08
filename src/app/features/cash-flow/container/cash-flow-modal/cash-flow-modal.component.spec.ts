import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashFlowModalComponent } from './cash-flow-modal.component';

describe('CashFlowModalComponent', () => {
  let component: CashFlowModalComponent;
  let fixture: ComponentFixture<CashFlowModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashFlowModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashFlowModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
