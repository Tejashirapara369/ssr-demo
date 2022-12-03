import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncateTextPipe } from './pipe/truncate-text.pipe';



@NgModule({
  declarations: [
    TruncateTextPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [TruncateTextPipe]
})
export class SharedModule { }
