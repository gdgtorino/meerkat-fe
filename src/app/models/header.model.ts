import { Image, BackgroundImage, Button } from "./shared.model";

export interface HeaderText {
  id?: number;
  title: string;
  subtitle: string;
}

export interface Header {
  main_image?: Image;
  background_image: BackgroundImage;
  header_text?: HeaderText;
  call_to_action: Button[];
}