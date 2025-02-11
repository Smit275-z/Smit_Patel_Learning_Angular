import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IContent } from '../models/content.model'; // Import the IContent interface

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  templateUrl: './content-list-item.component.html',
  styleUrls: ['./content-list-item.component.css'],
  imports: [CommonModule]
})
export class ContentListItemComponent {
  @Input() content!: IContent; // ✅ Input property to receive data from parent
}
