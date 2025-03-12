import { Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ModifyListItemComponent } from './modify-list-item/modify-list-item.component'; 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 

export const routes: Routes = [
  { path: '', component: ContentListComponent }, 
  { path: 'modify-item', component: ModifyListItemComponent }, 
  { path: '**', component: PageNotFoundComponent }
];
