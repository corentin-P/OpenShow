import type { ProfileImageModel } from '@/components/profile_image/ProfileImageModel';
import type { TextComponentModel } from '@/components/text/TextModel';
import type { ButtonModel } from '@/components/button/ButtonModel';
import type { MyRouterLinkModel } from '../router_link/MyRouterLinkModel';

export interface ColumnSectionModel {
  [key: string]: {
    type: 'Text' | 'ProfileImage' | 'Button' | 'RouterLink';
    content: TextComponentModel | ProfileImageModel | ButtonModel | MyRouterLinkModel;
  };
}

export interface ColumnSectionComponentModel {
  content: ColumnSectionModel
}