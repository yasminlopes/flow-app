import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalComponent } from 'src/app/global/modal/modal.component';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-entrada-modal',
  templateUrl: './entrada-modal.component.html',
  styleUrls: ['./entrada-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EntradaModalComponent extends ModalComponent implements OnInit {

  constructor( private modalService: ModalService) { super() }

  override ngOnInit(): void {
  }

  fecharModal(){
    this.modalService.closeModal()
  }

}
