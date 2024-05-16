import { ImageComponent } from "./image.component";
import { IImage } from "./image.types";

export const Image = ({
  // isPreviewable = true,
  className = "",
  ref,
  ...props
}: IImage) => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  // const theme = useComponentStyle("Image");

  return (
    <>
      <ImageComponent
        className={className}
        // onClick={isPreviewable ? () => setIsOpen(true) : () => undefined}
        ref={ref as React.RefObject<HTMLImageElement>}
        {...props}
      />
      {/* <ImagePreview
        isOpen={isOpen}
        onCancel={() => setIsOpen(false)}
        {...props}
      /> */}
    </>
  );
};
