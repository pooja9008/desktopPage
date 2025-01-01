export interface FooterLink {
  label: string;
  href: string;
  isNew?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}