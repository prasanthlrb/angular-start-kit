import { ChatComponent } from './chat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
     component: ChatComponent,
    data: {
      title: 'Chat Page'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
export const routedComponents = [ChatComponent];
