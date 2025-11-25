
export interface Link {
  id: number;
  url: string;
  imageUrl: string;
  borderColor: string;
  pulse?: boolean;
}

export interface Testimonial {
  id: number;
  text: string;
  author?: string;
}
