import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-entrada-modal',
  templateUrl: './entrada-modal.component.html',
  styleUrls: ['./entrada-modal.component.scss']
})
export class EntradaModalComponent implements OnInit {

  constructor( private modalService: ModalService) { }

  ngOnInit(): void {
  }

  fecharModal(){
    this.modalService.closeModal()
  }

}
