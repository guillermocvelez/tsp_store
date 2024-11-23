export interface Products {
  size:        string[];
  color:       string[];
  images:      string[];
  rating:      number;
  reviews:     number;
  _id:         string;
  name:        string;
  description: string;
  price:       number;
  stock:       number;
  category:    string;
  imageUrl?:   string;
  __v:         number;
  createdAt:   Date | string;
  updatedAt:   Date | string;
}
