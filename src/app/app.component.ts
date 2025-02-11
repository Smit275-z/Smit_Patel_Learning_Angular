import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from './content-list/content-list.component'; // ✅ Import ContentListComponent

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Standalone component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, ContentListComponent] // ✅ Add ContentListComponent to imports
})
export class AppComponent {
  title = 'Smit_Patel_Learning_Angular';
}
