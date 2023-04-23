import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { CashFlowModalComponent } from '../cash-flow-modal/cash-flow-modal.component';
import { CashFlowFacade } from '../../cash-flow.facade';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.scss']
})
export class CashFlowComponent implements OnInit {

  @ViewChild("categoriaModal", { static: false }) categoriaModal: TemplateRef<CashFlowModalComponent>;

  constructor(
    private modalService: ModalService,
    public facade: CashFlowFacade,
  ) { }

  ngOnInit(): void {
    this.facade.getCashFlow()
  }

  abrirModal(){
    this.modalService.openModal(this.categoriaModal, CashFlowModalComponent)
  }

}
