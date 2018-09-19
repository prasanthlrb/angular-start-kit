import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactFormComponent } from './contact-form/contact-form.component';
@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    NgxDatatableModule,
    NgbModule
  ],
  declarations: [
    ContactListComponent,
    ContactFormComponent
  ]
})
export class ContactModule { }
