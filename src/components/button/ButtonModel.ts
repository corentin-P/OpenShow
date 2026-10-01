export interface ButtonModel {
  content: {
    text: string;
    href?: string; // Optional because of the router-link component
    type?: string; // Optional css class to apply
  }
}