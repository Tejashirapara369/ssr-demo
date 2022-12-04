import { Input, ViewEncapsulation, Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'dm-input',
  templateUrl: './dm-input.component.html',
  styleUrls: ['./dm-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DmInputComponent,
      multi: true,
    },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class DmInputComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() value: any = null;
  @Input() label: string = 'Name';
  @Input() disabled: boolean = false;

  onTouch!: () => void;
  onChange!: (value: any) => void;

  constructor() {}

  ngOnInit(): void {}

  writeValue(obj: any): void {
    this.value = obj;
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
