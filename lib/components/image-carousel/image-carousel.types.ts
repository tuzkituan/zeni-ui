export interface IImageCarousel {
  images?: string[];
  className?: string;
  style?: React.CSSProperties;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  imgHeight?: string | number;
  imgWidth?: string | number;
  imageClassName?: string;
}
