import { motion } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { IImageCarousel } from "./image-carousel.types";

const ImageCarousel: React.FC<IImageCarousel> = ({
  images,
  className,
  imgHeight = 430,
  imgWidth = "fit-content",
  imageClassName,
  style,
}) => {
  const [isImagesLoaded, setIsImagesLoaded] = useState<boolean>(false);
  const [width, setWidth] = useState(0);
  console.log("🍊 ~ width:", width);
  const theme = useComponentStyle("ImageCarousel");
  const carousel = useRef<HTMLDivElement>(null);

  const classes = useMemo(() => {
    return twMerge(theme.base(), className);
  }, [className, theme]);

  useEffect(() => {
    if (!images) return;
    const imageLoadPromises = images.map((url) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
      });
    });

    Promise.all(imageLoadPromises)
      .then(() => {
        setIsImagesLoaded(true);
      })
      .catch((error) => {
        console.error(error);
        setIsImagesLoaded(true);
      });
  }, [JSON.stringify(images)]);

  useEffect(() => {
    setWidth(
      (carousel.current?.scrollWidth ?? 0) -
        (carousel.current?.offsetWidth ?? 0)
    );
  }, [isImagesLoaded]);

  return (
    <motion.div ref={carousel} className={classes} style={style}>
      <motion.div
        className={theme.inner()}
        drag="x"
        dragConstraints={{
          left: -width,
          right: 0,
        }}
        whileTap={{
          cursor: "grabbing",
        }}
      >
        {(images || []).map((image, index) => (
          <motion.div
            key={index}
            className={twMerge(imageClassName, theme.imgContainer())}
            style={{
              height: imgHeight,
              width: imgWidth,
              minWidth: imgWidth,
              maxWidth: imgWidth,
            }}
          >
            <img
              src={image}
              alt=""
              className={twMerge(imageClassName, theme.img())}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ImageCarousel;
