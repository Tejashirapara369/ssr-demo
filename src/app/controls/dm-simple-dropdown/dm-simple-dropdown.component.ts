import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
} from 'rxjs/operators';

type Option = { value: string; label: string };

@Component({
  selector: 'dm-simple-dropdown',
  templateUrl: './dm-simple-dropdown.component.html',
  styleUrls: ['./dm-simple-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DmSimpleDropdownComponent,
      multi: true,
    },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class DmSimpleDropdownComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() value: any = null;
  @Input() label: string = 'Select an option';
  @Input() disabled: boolean = false;
  @Input() options: Option[] = [];

  // searchable dropdown variable
  formControl: FormControl = new FormControl();
  @Input() enableSearch: boolean = false;

  onTouch!: () => void;
  onChange!: (value: any) => void;
  filteredOptions: Observable<Option[]> = this.formControl.valueChanges.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    startWith(''),
    map((value) => {
      if (!value) this.value = null;
      return value ? this._filter(value as string) : this.options.slice();
    })
  );

  constructor() {}

  ngOnInit(): void {}

  onSelect(event: any) {
    const currentValue = event?.option?.value;
    if (currentValue) {
      const selectedOption = this.options.find(
        (item) => item.value === event?.option?.value
      );
      if (selectedOption) {
        this.value = selectedOption.label;
      }
    }
  }

  displayFn(option: Option): string {
    return option?.label;
  }

  private _filter(name: string): Option[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) =>
      option.label.toLowerCase().includes(filterValue)
    );
  }

  writeValue(obj: any): void {
    if (this.enableSearch) {
      setTimeout(() => this.onSelect({ option: { value: obj } }));
    } else {
      this.value = obj;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    if (this.enableSearch) {
      this.formControl.disable();
    } else {
      this.disabled = isDisabled;
    }
  }
}
