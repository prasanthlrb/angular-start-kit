import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule,
    NgbModule
  ],
  declarations: [ItemFormComponent, ItemListComponent]
})
export class ItemsModule { }
