import { IContent } from '../models/content.model';

export const MOCK_CONTENT: IContent[] = [
  {
    id: 2,
    title: 'Smartphone',
    description: 'Latest 5G model',
    price: 900,
    category: 'Electronics',
    imageUrl: 'assets/laptop.png',
    releaseDate: '2023-11-05',
    manufacturer: 'Samsung',
    shippingFee: 25.5
  },
  {
    id: 3,
    title: 'Coffee Maker',
    description: 'Brews fresh coffee',
    price: 80,
    category: 'Home Appliance',
    imageUrl: 'assets/coffee.png',
    releaseDate: '2023-08-20',
    manufacturer: 'Nespresso',
    shippingFee: 10.0
  },
  {
    id: 4,
    title: 'Smartwatch',
    description: 'Advanced fitness tracking',
    price: 200,
    category: 'Wearables',
    imageUrl: 'assets/watch.png',
    releaseDate: '2024-01-15',
    manufacturer: 'Garmin',
    shippingFee: 15.0
  },
  {
    id: 5,
    title: 'Book: Angular Guide',
    description: 'Learn Angular from basics',
    price: 35,
    category: 'Books',
    imageUrl: 'assets/book.png',
    releaseDate: '2022-12-01',
    manufacturer: 'Packt',
    shippingFee: 5.99
  },
  {
    id: 6,
    title: 'Desk Chair',
    description: 'Ergonomic office chair',
    price: 250,
    category: 'Furniture',
    imageUrl: 'assets/chair.png',
    releaseDate: '2023-03-10',
    manufacturer: 'Ikea',
    shippingFee: 30.0
  }
];

