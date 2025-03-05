import { Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';

export const routes: Routes = [
  { path: '', component: ContentListComponent }, 
  { path: 'products', component: ContentListComponent } 
];
