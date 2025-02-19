import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListItemComponent } from '../content-list-item/content-list-item.component';
import { IContent } from '../models/content.model';
import { ContentService } from '../services/content.service'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content-list',
  standalone: true,
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
  imports: [CommonModule, ContentListItemComponent]
})
export class ContentListComponent implements OnInit {
  contents$: Observable<IContent[]> = new Observable<IContent[]>(); 

  constructor(private contentService: ContentService) {} 

  ngOnInit() {
    this.contents$ = this.contentService.getAllContent(); 
  }
}

