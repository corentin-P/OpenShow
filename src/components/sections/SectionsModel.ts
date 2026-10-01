export interface SectionsModel {
  [key: string]: {
    type: string;
    content: any;
    title?: string;
    titleInBox?: boolean;
    sumup?: string[];
  }
}

export interface SectionsComponentModel {
  sections: SectionsModel;
}