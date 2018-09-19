
import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatButtonModule,
  MatCheckboxModule
 } from '@angular/material';
@NgModule({
  imports: [
     MatButtonModule,
     MatCheckboxModule,
     MatInputModule,
     MatTableModule,
     MatPaginatorModule,
     MatSortModule,
     MatProgressSpinnerModule
    ],
  exports: [
     MatButtonModule,
     MatCheckboxModule,
     MatInputModule,
     MatTableModule,
     MatPaginatorModule,
     MatSortModule,
     MatProgressSpinnerModule
  ],
})
export class MaterialModule {}
