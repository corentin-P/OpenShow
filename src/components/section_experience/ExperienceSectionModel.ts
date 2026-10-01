export interface ExperienceSectionModel {
  [key: string]: {
    date?: string;
    title?: string;
    img: string;
    'img-description': string;
    description: string[];
  }
}

export interface ExperienceSectionComponentModel {
  content: ExperienceSectionModel;
}