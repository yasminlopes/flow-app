import { ResponseApi } from 'src/app/core/models/response.interface';

export class CashFlow {
  constructor(
    public id: number,
    // public id_flow_cash: string,
    public id_category: string,
    public value: string,
    public reference_day: string,
    public start_date: string,
    public end_date: string,
    public type: string,
    public name_category: string,
    public description: string,
    public icon: string,
    public account_type: string,
    public transaction_type: string
  ) {}
}

export interface CashFlowResponse extends ResponseApi {
  data: {
    cashFlow: CashFlow[];
  }
}
