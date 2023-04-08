import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { EntradaModalComponent } from '../entrada-modal/entrada-modal.component';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.scss']
})
export class EntradaComponent implements OnInit {

  @ViewChild("categoriaModal", { static: false }) categoriaModal: TemplateRef<EntradaModalComponent>;

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  abrirModal(){
    this.modalService.openModal(this.categoriaModal, EntradaModalComponent)
  }

}
