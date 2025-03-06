import { IContent } from '../models/content.model';

export const MOCK_CONTENT: IContent[] = [
  { id: 2, title: 'Smartphone', description: 'Latest 5G model', price: 900, category: 'Electronics', imageUrl: 'assets/phone.png' },
  { id: 3, title: 'Coffee Maker', description: 'Brews fresh coffee', price: 80, category: 'Home Appliance', imageUrl: 'assets/coffee.png' },
  { id: 4, title: 'Smartwatch', description: 'Advanced fitness tracking', price: 200, category: 'Wearables', imageUrl: 'assets/watch.png' },
  { id: 5, title: 'Book: Angular Guide', description: 'Learn Angular from basics', price: 35, category: 'Books', imageUrl: 'assets/book.png' },
  { id: 6, title: 'Desk Chair', description: 'Ergonomic office chair', price: 250, category: 'Furniture', imageUrl: 'assets/chair.png' }
];
