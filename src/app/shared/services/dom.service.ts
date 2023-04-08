import { ApplicationRef, ComponentRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DomService {
  constructor(private readonly appRef: ApplicationRef) {}

  public appendComponentToBody(componentRef: ComponentRef<any>): void {
    this.appRef.attachView(componentRef.hostView);
    document.body.appendChild(componentRef.location.nativeElement);
  }

  public removeComponentFromBody(componentRef: ComponentRef<any>): void {
    this.appRef.detachView(componentRef.hostView);
  }
}
