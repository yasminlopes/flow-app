import { ComponentFactoryResolver, ComponentRef, Injectable, Injector, TemplateRef, Type } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DomService } from './dom.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private readonly modalClosedSubject = new Subject<void>();
  private modalComponentRef: ComponentRef<any> | null = null; // inicializa com null

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly injector: Injector,
    private readonly domService: DomService
  ) {}

  public openModal(templateRef: TemplateRef<any>, component: Type<any>): Observable<void> {
    this.createModalComponent(component);
    if (this.modalComponentRef) {
      this.modalComponentRef.instance.title = '';
    }
    return this.modalClosedSubject.asObservable();
  }

  public closeModal(): void {
    this.destroyModalComponent();
    this.completeModalClosedSubject();
  }

  private createModalComponent(component: Type<any>): void {
    this.modalComponentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector);
    this.domService.appendComponentToBody(this.modalComponentRef);
  }

  private destroyModalComponent(): void {
    if (this.modalComponentRef) {
      this.domService.removeComponentFromBody(this.modalComponentRef);
      this.modalComponentRef.destroy();
      this.modalComponentRef = null;
    }
  }

  private completeModalClosedSubject(): void {
    this.modalClosedSubject.next();
    this.modalClosedSubject.complete();
  }
}
