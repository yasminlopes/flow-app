import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ResponseApi } from 'src/app/core/models/response.interface';

@Injectable({
  providedIn: 'root',
})

export class NotificationService {
  constructor(private toastService: NgToastService) {}

  public notifyApiResponse(response: ResponseApi) {
    if (response.error) {
      const message = this.createNotificationObject('Erro', response.error);
      this.toastService.error(message);
    } else {
      const message = this.createNotificationObject('Sucesso', response.message);
      this.toastService.success(message);
    }
  }

  private createNotificationObject(summary: string, message: string): any {
    return {
      detail: summary,
      summary: message,
      duration: 3000,
    };
  }
}