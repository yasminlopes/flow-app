import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/shared/services/modal.service';
import { CATEGORY_ICONS_OPTIONS } from '../../models/cash-flow-const';
import { ModalComponent } from 'src/app/core/components/modal/modal.component';

@Component({
  selector: 'app-cash-flow-modal',
  templateUrl: './cash-flow-modal.component.html',
  styleUrls: ['./cash-flow-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CashFlowModalComponent extends ModalComponent implements OnInit {

  public cashFlowCategoryForm: FormGroup;
  public categoryOptions = CATEGORY_ICONS_OPTIONS;

  constructor( 
    private modalService: ModalService,
    private formBuilder: FormBuilder
  ) { 
    super(); 
  }

  override ngOnInit(): void {
    this.initForm();
    this.cashFlowCategoryForm.valueChanges.subscribe(x => console.log(x));
  }

  public closeModal(){
    this.modalService.closeModal();
  }

  private initForm(){
    this.cashFlowCategoryForm = this.formBuilder.group({
      id: [''],
      icon: ['', [Validators.required]],
      name_category: ['', [Validators.required]],
    });
  }

  public save(){
    // implementar função
  }
}
