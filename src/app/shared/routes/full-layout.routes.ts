import { Routes, RouterModule } from '@angular/router';

// Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  {
    path: 'changelog',
    loadChildren: './changelog/changelog.module#ChangeLogModule'
  },
  {
    path: 'full-layout',
    loadChildren: './pages/full-layout-page/full-pages.module#FullPagesModule'
  },
  {
    path: 'contacts',
    loadChildren: './pages/contacts/contact.module#ContactModule'
  },
  {
    path: 'items',
    loadChildren: './pages/items/items.module#ItemsModule'
  },
  {
    path: 'chat',
    loadChildren: './pages/chat/chat.module#ChatModule'
  },
  {
    path: 'folders',
    loadChildren: './pages/folders/folders.module#FoldersModule'
  },
  // {
  //   path: 'contact-form',
  //   loadChildren: './pages/contacts/contact.module#ContactModule'
  // }
];
