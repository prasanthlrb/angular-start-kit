import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  {
    path: '',
    children: [
  {
    path: 'list',
    component : ContactListComponent,
    data: {
      title: 'Full Layout Page'
    }
  },
  {
    path: 'form',
    component : ContactFormComponent,
    data: {
      title: 'Full Layout Page'
    }
  },
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}
