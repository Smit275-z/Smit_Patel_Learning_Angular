export interface IContent {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;

  // New fields for pipe demonstration
  releaseDate: string;
  manufacturer: string;
  shippingFee: number;
}
