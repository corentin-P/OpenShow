export interface NavBarContentModel {
  title: {
    url: string;
    text: string;
  }
  links: {
    [key: string]: {
      url: string;
      text: string;
    }
  }  
}

export interface NavBarComponentModel {
  content: NavBarContentModel;
}