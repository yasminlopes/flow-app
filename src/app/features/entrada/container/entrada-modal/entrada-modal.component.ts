import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'src/app/global/modal/modal.component';
import { ModalService } from 'src/app/shared/services/modal.service';
import { CATEGORY_ICONS_OPTIONS } from '../../models/entrada-const';

@Component({
  selector: 'app-entrada-modal',
  templateUrl: './entrada-modal.component.html',
  styleUrls: ['./entrada-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EntradaModalComponent extends ModalComponent implements OnInit {

  public entradaCategoryForm: FormGroup;
  public categoryOptions = CATEGORY_ICONS_OPTIONS;

  constructor( 
    private modalService: ModalService,
    private formBuilder: FormBuilder
  ) { 
    super(); 
  }

  override ngOnInit(): void {
    this.initForm();
    this.entradaCategoryForm.valueChanges.subscribe(x => console.log(x));
  }

  public closeModal(){
    this.modalService.closeModal();
  }

  private initForm(){
    this.entradaCategoryForm = this.formBuilder.group({
      id: [''],
      icon: ['', [Validators.required]],
      name_category: ['', [Validators.required]],
    });
  }

  public save(){
    // implementar função
  }
}
