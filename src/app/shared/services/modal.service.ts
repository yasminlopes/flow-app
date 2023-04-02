import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ModalService {
  private modalContentSubject$ = new BehaviorSubject<any>(null);
  private modalRef: any;
  public modalContent$ = this.modalContentSubject$.asObservable();

  constructor() {}

  openModal(templateRef?: any) {
    if (templateRef) {
      this.createModal(templateRef);
      this.appendModalToBody();
    }
  }

  closeModal() {
    if (this.modalRef) {
      this.removeModalFromDOM();
      this.destroyModal();
    }
  }

  private createModal(templateRef: any) {
    this.modalRef = templateRef.createEmbeddedView(null);
  }

  private appendModalToBody() {
    const modalElement = this.modalRef.rootNodes[0] as HTMLElement;
    document.body.appendChild(modalElement);
  }

  private removeModalFromDOM() {
    const modalElement = this.modalRef.rootNodes[0] as HTMLElement;
    modalElement.remove();
  }

  private destroyModal() {
    this.modalRef.destroy();
    this.modalRef = null;
  }
}
