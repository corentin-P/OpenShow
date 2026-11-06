export interface LogosDescriptionSectionModel {
  [key: string]: {
    img: string;
    alt: string;
    name: string;
    description: Array<string | {
      text: string;
      link: string;
    }>;
  }
}

export interface LogosDescriptionSectionComponentModel {
  content: LogosDescriptionSectionModel;
}