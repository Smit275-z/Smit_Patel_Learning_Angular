import { Component } from '@angular/core';
import { IContent } from '../models/content.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent {
  contents: IContent[] = [
    { id: 1, title: 'Laptop', description: 'High-end gaming laptop', price: 1200, category: 'Electronics', imageUrl: 'assets/laptop.png' },
    { id: 2, title: 'Smartphone', description: 'Latest 5G model', price: 900, category: 'Electronics', imageUrl: 'assets/phone.png' },
    { id: 3, title: 'Coffee Maker', description: 'Brews fresh coffee', price: 80, category: 'Home Appliance', imageUrl: 'assets/coffee.png' },
    { id: 4, title: 'Smartphone', description: 'Latest model with 5G', price: 900, category: 'Electronics', imageUrl: 'assets/coffee.png'},
    { id: 5, title: 'Book: Angular Guide', description: 'Learn Angular from basics', price: 35, category: 'Books', imageUrl: 'assets/coffee.png' },
    { id: 6, title: 'Desk Chair', description: 'Ergonomic office chair', price: 250, category: 'Furniture', imageUrl: 'assets/coffee.png' }
  ];
}
