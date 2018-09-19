import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoldersRoutingModule } from './folders-routing.module';
import { FolderComponent } from './folder/folder.component';

@NgModule({
  imports: [
    CommonModule,
    FoldersRoutingModule
  ],
  declarations: [FolderComponent]
})
export class FoldersModule { }
