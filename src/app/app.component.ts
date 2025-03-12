import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router'; 
import { ContentListComponent } from './content-list/content-list.component';
import { ContentListItemComponent } from './content-list-item/content-list-item.component';
import { ContentService } from './services/content.service';
import { IContent } from './models/content.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterModule, RouterOutlet, ContentListComponent, ContentListItemComponent] 
})
export class AppComponent implements OnInit {
  featuredContent: IContent | undefined;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getContentById(1).subscribe((data) => {
      this.featuredContent = data;
    });
  }
}
