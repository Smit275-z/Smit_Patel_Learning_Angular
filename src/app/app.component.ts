import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Smit_Patel_Learning_Angular';

  // New variables
  userName: string = 'Smit Patel'; 
  isLoggedIn: boolean = false;   
}
