import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CashFlowResponse } from '../models/cash-flow';

@Injectable({
  providedIn: 'root',
})

export class CashFlowApiService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<CashFlowResponse> {
    return this.http.get<CashFlowResponse>(`${environment.apiUrl}/cashflow/`);
  }
  
}
