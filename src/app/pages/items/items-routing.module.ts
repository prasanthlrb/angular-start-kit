import { ItemFormComponent } from './item-form/item-form.component';
import { ItemListComponent } from './item-list/item-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
  {
    path: 'list',
    component : ItemListComponent,
    data: {
      title: 'Full Layout Page'
    }
  },
  {
    path: 'add',
    component : ItemFormComponent,
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
export class ItemsRoutingModule { }
