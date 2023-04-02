import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ModalService {
  // BehaviorSubject para manter o estado atual do conteúdo do modal
  private modalContentSubject$ = new BehaviorSubject<any>(null);
  // referência ao modal atual
  private modalRef: any;
  // Observable que contém o conteúdo do modal e é atualizado sempre que o método openModal() é chamado com um novo templateRef
  public modalContent$ = this.modalContentSubject$.asObservable();

  constructor() {}

  // método para abrir o modal
  openModal(templateRef?: any) {
    if (templateRef) {
      // cria uma nova instância do modal a partir do templateRef
      this.createModal(templateRef);
      // adiciona o modal ao corpo do documento HTML
      this.appendModalToBody();
    }
  }

  // método para fechar o modal
  closeModal() {
    if (this.modalRef) {
      // remove o modal do corpo do documento HTML
      this.removeModalFromDOM();
      // destrói a instância do modal
      this.destroyModal();
    }
  }

  // método privado para criar a instância do modal a partir do templateRef fornecido
  private createModal(templateRef: any) {
    this.modalRef = templateRef.createEmbeddedView(null);
  }

  // método privado para adicionar o modal ao corpo do documento HTML
  private appendModalToBody() {
    const modalElement = this.modalRef.rootNodes[0] as HTMLElement;
    document.body.appendChild(modalElement);
  }

  // método privado para remover o modal do corpo do documento HTML
  private removeModalFromDOM() {
    const modalElement = this.modalRef.rootNodes[0] as HTMLElement;
    modalElement.remove();
  }

  // método privado para destruir a instância do modal
  private destroyModal() {
    this.modalRef.destroy();
    this.modalRef = null;
  }
}
