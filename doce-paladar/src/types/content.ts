export interface HeroContent {
  tagline: string;
  headline: string;
  subheadline: string;
  cta: string;
}

export interface AboutContent {
  title: string;
  paragraphs: string[];
  badge: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  tag: string;
  emoji: string;
}

export interface Differential {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  stars: number;
}

export interface CTAContent {
  headline: string;
  subtext: string;
  whatsapp: string;
  message: string;
  buttonText: string;
}

export interface SiteContent {
  hero: HeroContent;
  about: AboutContent;
  products: Product[];
  differentials: Differential[];
  testimonials: Testimonial[];
  cta: CTAContent;
  footer: {
    instagram: string;
    whatsapp: string;
  };
}
