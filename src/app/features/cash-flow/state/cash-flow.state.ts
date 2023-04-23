import { Injectable } from '@angular/core';
import { CashFlow } from '../models/cash-flow';
import { StateCollection } from 'src/app/shared/utils/state-colletion';

@Injectable({
    providedIn: 'root'
  })

  export class CashFlowState {
  
    public cashFlow = new StateCollection<CashFlow>([]);
  
  }