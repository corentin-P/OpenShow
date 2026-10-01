export interface TextModel {
  text: string[];
  links: Array<{
    url: string,
    text: string,
  }>
}

export interface TextComponentModel {
  content: TextModel;
}