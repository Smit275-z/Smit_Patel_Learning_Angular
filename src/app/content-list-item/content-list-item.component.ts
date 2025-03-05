import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IContent } from '../models/content.model';

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  templateUrl: './content-list-item.component.html',
  styleUrls: ['./content-list-item.component.css'],
  imports: [CommonModule]
})
export class ContentListItemComponent {
  @Input() content!: IContent; // Receives product details
  @Input() index!: number; // Receives index for styling
}
