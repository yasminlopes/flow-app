import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface Options {
  description: string,
  value: string | any
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ],
})
export class SelectComponent implements ControlValueAccessor {

  @Input() options: Options[] = [];
  @Input() iconOptions: Options[] = [];
  @Input() label: string;
  @Input() required: boolean = false;
  @Input() placeholder: string;

  private optionValue: any;

  onChange: any = () => { };
  onTouch: any = () => { };

  public get selectedOption(): any {
    return this.optionValue ? this.optionValue : null;
  }

  public set selectedOption(value) {
    this.onChange(value);
    this.optionValue = value;
  }

  writeValue(value: unknown) {
    this.selectedOption = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  selectOption(option: any): void {
    this.selectedOption = option.value;
    this.onChange(this.selectedOption);
    this.onTouch();
  }
}
