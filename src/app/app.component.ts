import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Ensure this is a standalone component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule] // ✅ Import CommonModule to enable *ngFor and *ngIf
})
export class AppComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 1200, category: 'Electronics', description: 'Powerful gaming laptop' },
    { id: 2, name: 'Headphones', price: 150, category: 'Electronics', description: 'Noise-canceling headphones' },
    { id: 3, name: 'Coffee Maker', price: 80, category: 'Home Appliance' },
    { id: 4, name: 'Smartphone', price: 900, category: 'Electronics', description: 'Latest model with 5G' },
    { id: 5, name: 'Book: Angular Guide', price: 35, category: 'Books', description: 'Learn Angular from basics' },
    { id: 6, name: 'Desk Chair', price: 250, category: 'Furniture', description: 'Ergonomic office chair' }
  ];
}
