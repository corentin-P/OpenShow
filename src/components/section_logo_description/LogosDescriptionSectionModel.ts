export interface LogosDescriptionSectionModel {
  content: Record<string, {
    img: string;
    alt: string;
    name: string;
    description: Array<string | {
      text: string;
      link: string;
    }>;
  }>;
}