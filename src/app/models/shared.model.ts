//TODO: remove when merging 
export interface Image {
  id?: number | null;
  src: string;
  title: string;
  caption: string;
  btn?: Button;
}

export interface Button {
  id?: number;
  label: string;
  href: string;
  open_new_tab?: boolean;
  color_in_background?: boolean;
}

export interface BackgroundImage {
  id?: number | null;
  is_image: boolean;
  image?: Image;
  color: string;
}
