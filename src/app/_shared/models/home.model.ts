import {ButtonModel, ImageModel, ItemModel} from './common.model';

export interface MenuModel {
  main_image: ImageModel;
  items: ButtonModel[];
}

export interface HeaderModel {
  main_image: ImageModel;
  background_image: {
    id?: number;
    is_image?: boolean;
    color?: string;
    image?: ImageModel;
  };
  header_text?: {
    id: number;
    title: string;
    subtitle?: string;
  };

  call_to_action?: ButtonModel[];
}

export interface HomeStructureModel {
  menu: MenuModel;
  header: HeaderModel;
  body: ItemModel[];
  footer: ItemModel[];
}
