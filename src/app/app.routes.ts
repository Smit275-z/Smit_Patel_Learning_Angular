import { Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component'; // Eager loaded

export const routes: Routes = [
  {
    path: '',
    component: ContentListComponent // Eager load home page
  },
  {
    path: 'modify-item',
    loadComponent: () => import('./modify-list-item/modify-list-item.component')
      .then(m => m.ModifyListItemComponent) // Lazy loaded
  },
  {
    path: '**',
    loadComponent: () => import('./page-not-found/page-not-found.component')
      .then(m => m.PageNotFoundComponent) // Lazy loaded
  }
];
