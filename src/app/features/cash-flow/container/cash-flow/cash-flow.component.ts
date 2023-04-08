import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { CashFlowModalComponent } from '../cash-flow-modal/cash-flow-modal.component';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.scss']
})
export class CashFlowComponent implements OnInit {

  @ViewChild("categoriaModal", { static: false }) categoriaModal: TemplateRef<CashFlowModalComponent>;

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  abrirModal(){
    this.modalService.openModal(this.categoriaModal, CashFlowModalComponent)
  }

}
