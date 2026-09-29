export interface TextModel {
  content: {
    text: string[];
    links: Array<{
      url: string,
      text: string,
    }>
  }
}