export interface Feature {
  iconType: keyof typeof import('./Icons').Icons;
  title: string;
  description: string;
}