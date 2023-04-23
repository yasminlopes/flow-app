import { Injectable } from '@angular/core';
import { CashFlowResponse } from './models/cash-flow';
import { CashFlowApiService } from './services/cash-flow-api.service';
import { CashFlowState } from './state/cash-flow.state';

@Injectable({
  providedIn: 'root',
})
export class CashFlowFacade {
  public cashFlow$ = this.cashFlowState.cashFlow.collection$;

  constructor(
    private apiService: CashFlowApiService,
    private cashFlowState: CashFlowState
  ) {}

  public getCashFlow(): void {
    this.apiService
      .getAll()
      .pipe()
      .subscribe((response: CashFlowResponse) => {
        this.cashFlowState.cashFlow.collection = response.data.cashFlow;
        return response.data.cashFlow;
      });
  }
}
