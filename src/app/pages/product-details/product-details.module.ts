import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { DmControlsModule } from 'src/app/controls/dm-controls.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [{ path: '', component: ProductDetailsComponent }];

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DmControlsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class ProductDetailsModule {}
