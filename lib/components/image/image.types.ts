export interface IImage
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  boxSize?: string | number;
  src?: string;
  borderRadius?: string | number;
  alt?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  fallbackSrc?: string;
  isPreviewable?: boolean;
}

export interface IImagePreview extends IImage {
  backdropClassName?: string;
  isOpen?: boolean;
  onCancel?: () => void;
  maskClosable?: boolean;
}
