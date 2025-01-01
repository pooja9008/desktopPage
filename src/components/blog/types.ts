export interface BlogPost {
  category: string;
  title: string;
  description: string;
  author: {
    name: string;
    date: string;
    avatar?: string;
  };
  image: string;
}