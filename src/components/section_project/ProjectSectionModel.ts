export interface ProjectSectionModel {
  content: {
    [key: string]: {
      title: string;
      description: string;
      imgs: Array<{
          file: string,
          alt: string,
          link: string
      }>;
      links: Array<{
          link: string;
          text: string;
      }>
    }
  }
}