import { Image, BackgroundImage } from './shared.model';

export interface TypeBox {
  id?: number;
  name: string;
}

export interface FooterSubsection {
  id?: number;
  order?: number;
  title: string;
  subtitle?: string;
  brief?: string;
  content?: string;
  background?: BackgroundImage;
  image?: Image;
  type_box: TypeBox;
}

export interface FooterSection {
  id?: number;
  order?: number;
  title: string;
  subtitle?: string;
  brief?: string;
  content?: string;
  background?: BackgroundImage;
  image?: Image;
  type_box: TypeBox;
  subsection?: FooterSubsection[];
}

export type Footer = FooterSection[];
