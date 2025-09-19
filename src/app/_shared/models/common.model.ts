export interface ImageModel {
  id: number;
  src: string;
  title?: string;
  caption: string;
  btn?: ButtonModel;
}

export interface ButtonModel {
  id: number;
  label: string;
  href: string;
  open_new_tab?: boolean;
  color_in_background?: boolean;
}

export interface ItemModel {
  id: number;
  order?: number;
  title: string;
  subtitle?: string;
  brief?: string;
  content?: string;
  background?: {
    id: number;
    is_image: boolean;
    color: string;
    image: ImageModel;
  }
  image?: ImageModel;
  type_box?: {
    id: number;
    name: string;
  }
}
