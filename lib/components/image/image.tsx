import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ImagePreview } from "./image-preview";
import { ImageComponent } from "./image.component";
import { IImage } from "./image.types";
import { useComponentStyle } from "../../customization/styles/theme.context";

export const Image = ({
  isPreviewable = true,
  className = "",
  ref,
  ...props
}: IImage) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const theme = useComponentStyle("Image");

  return (
    <>
      <ImageComponent
        className={
          isPreviewable ? twMerge(theme.isPreviewable(), className) : className
        }
        onClick={isPreviewable ? () => setIsOpen(true) : () => undefined}
        ref={ref as React.RefObject<HTMLImageElement>}
        {...props}
      />
      <ImagePreview
        isOpen={isOpen}
        onCancel={() => setIsOpen(false)}
        {...props}
      />
    </>
  );
};
