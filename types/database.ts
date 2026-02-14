export interface Artisan {
  id: number;
  name: string;
  bio: string;
  location: string;
  avatar_url: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  artisan_id: number;
  artisans?: Artisan; // Informacja o twórcy pobierana z relacji
}