import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IContent } from '../models/content.model';
import { ContentSummaryPipe } from '../pipes/content-summary.pipe';
import { HoverHighlightDirective } from '../hover-highlight.directive';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  templateUrl: './content-list-item.component.html',
  styleUrls: ['./content-list-item.component.css'],
  imports: [
    CommonModule,
    ContentSummaryPipe,
    HoverHighlightDirective,
    MatCardModule,
    MatButtonModule
  ]
})
export class ContentListItemComponent {
  @Input() content!: IContent;
  @Input() index!: number;
}
