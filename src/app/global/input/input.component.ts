import { Component, OnInit, Input, forwardRef} from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR, ControlValueAccessor, NgModel } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
    NgModel
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @Input() formGroup: FormGroup;
  @Input() id: string;
  @Input() label: string;
  @Input() icon: string;
  @Input() type: string;
  @Input() formControlName: string;
  @Input() iconLeft: string;
  @Input() iconRight: string;
  @Input() placeholder = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  
  public value: any = '';

  onChange: any = () => {};
  onTouch: any = () => {};

  constructor() { }

  ngOnInit(): void {}

  writeValue(value: any): void {
    this.value = value;
    this.onChange(value);
    this.onTouch();
  }
  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  
}
