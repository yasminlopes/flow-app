import { Component, OnInit, Input } from '@angular/core';
import { CashFlow } from '../../models/cash-flow';
import { COLUMNS_FIELDS } from '../../models/cash-flow-columns';

@Component({
  selector: 'app-cash-flow-list',
  templateUrl: './cash-flow-list.component.html',
  styleUrls: ['./cash-flow-list.component.scss']
})
export class CashFlowListComponent implements OnInit {

  @Input() cashFlowList: CashFlow[] | null;

  public columnsFields = COLUMNS_FIELDS

  constructor() { }

  ngOnInit(): void {
  }

}
