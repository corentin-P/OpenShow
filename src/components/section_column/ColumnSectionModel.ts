import type { ProfileImageModel } from '@/components/profile_image/ProfileImageModel';
import type { TextModel } from '@/components/text/TextModel';

export interface ColumnSectionItemModel {
  type: 'Text' | 'ProfileImage';
  content: TextModel | ProfileImageModel;
}

export interface ColumnSectionModel {
  content: ColumnSectionItemModel[];
}