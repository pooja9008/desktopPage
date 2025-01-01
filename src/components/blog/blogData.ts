import { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  {
    category: 'Design',
    title: 'UX review presentations',
    description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    author: {
      name: 'Olivia Rhye',
      date: '20 Jan 2024'
    },
    image: '/blog/design-preview.jpg'
  },
  {
    category: 'Product',
    title: 'Migrating to Linear 101',
    description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here\'s how to get started.',
    author: {
      name: 'Phoenix Baker',
      date: '19 Jan 2024'
    },
    image: '/blog/product-preview.jpg'
  },
  {
    category: 'Software Engineering',
    title: 'Building your API stack',
    description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
    author: {
      name: 'Lana Steiner',
      date: '18 Jan 2024'
    },
    image: '/blog/engineering-preview.jpg'
  }
];