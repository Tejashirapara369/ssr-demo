import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DmInputComponent } from './dm-input/dm-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DmSimpleDropdownComponent } from './dm-simple-dropdown/dm-simple-dropdown.component';

@NgModule({
  declarations: [DmInputComponent, DmSimpleDropdownComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule
  ],
  exports: [DmInputComponent, DmSimpleDropdownComponent],
})
export class DmControlsModule {}
