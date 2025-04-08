import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ContentListItemComponent } from '../content-list-item/content-list-item.component';
import { IContent } from '../models/content.model';
import { ContentService } from '../services/content.service';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-content-list',
  standalone: true,
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    ContentListItemComponent
  ]
})
export class ContentListComponent implements OnInit {
  contents$: Observable<IContent[]> = new Observable<IContent[]>();

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contents$ = this.contentService.getAllContent();
  }
}
