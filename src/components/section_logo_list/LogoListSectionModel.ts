export interface LogoListSectionModel {
  logos: Array<{
    img: string;
    alt: string;
  }>;
}

export interface LogoListSectionComponentModel {
  content: LogoListSectionModel;
}