export interface GalleryItemModel {
  img: string;
  alt: string;
  title: string;
  sum_up: string;
  description: string[];
  tags: string[];
  main_link?: string;
  links?: Array<{
    icon: string;
    alt: string;
    link: string;
  }>;
}

export interface GallerySectionComponentModel {
  content: Record<string, GalleryItemModel>;
}