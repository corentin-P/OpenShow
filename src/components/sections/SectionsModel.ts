export interface SectionModel {
  [key: string]: {
    type: string;
    content: any;
    title?: string;
    titleInBox?: boolean;
    sumup?: string[];
  }
}

export interface SectionsModel {
  sections: SectionModel;
}