import {
  ArrowClockwise,
  ArrowCounterClockwise,
  ArrowsIn,
  MagnifyingGlassMinus,
  MagnifyingGlassPlus,
  X,
} from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../main";
import { IImagePreview } from "./image.types";
import { useImagePreview } from "./use-image-preview";

export const ImagePreview = ({
  backdropClassName = "",
  isOpen = false,
  onCancel,

  className = "",
  src,
  fallbackSrc = "",
  boxSize,
  borderRadius = 0,
  alt = "",
  objectFit = "cover",
}: IImagePreview) => {
  const theme = useComponentStyle("Image");

  const {
    controls,
    dragControls,
    scale,
    handleRotateLeft,
    handleRotateRight,
    handleZoomIn,
    handleZoomOut,
    reset,
    handleScroll,
  } = useImagePreview();

  const backdropClasses = useMemo(() => {
    return twMerge(theme.backdrop(), backdropClassName);
  }, [theme, backdropClassName]);

  const imgContainerClasses = useMemo(() => {
    return twMerge(theme.imgContainer());
  }, [theme]);

  const imgClasses = useMemo(() => {
    return twMerge(theme.base(), className);
  }, [className, theme]);

  const toolsClasses = useMemo(() => {
    return twMerge(theme.tools());
  }, [theme]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      reset();
    }
  }, [isOpen]);

  const renderTools = () => {
    const tools = [
      {
        key: "zoomIn",
        icon: <MagnifyingGlassPlus />,
        onClick: handleZoomIn,
      },
      {
        key: "zoomOut",
        icon: <MagnifyingGlassMinus />,
        onClick: handleZoomOut,
      },
      {
        key: "rotateLeft",
        icon: <ArrowCounterClockwise />,
        onClick: handleRotateLeft,
      },
      {
        key: "rotateRight",
        icon: <ArrowClockwise />,
        onClick: handleRotateRight,
      },
      {
        key: "reset",
        icon: <ArrowsIn />,
        onClick: reset,
      },
      {
        key: "close",
        icon: <X />,
        onClick: onCancel,
      },
    ];
    return (
      <div className={toolsClasses}>
        {tools.map((x) => (
          <div
            key={x.key}
            className={theme.toolIcon()}
            onClick={(e) => {
              e.stopPropagation();
              x.onClick?.();
            }}
          >
            {x.icon}
          </div>
        ))}
      </div>
    );
  };

  return createPortal(
    <AnimatePresence initial={false} mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={backdropClasses}
          onWheelCapture={handleScroll}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className={imgContainerClasses}
            initial={{
              opacity: 0,
              scale: 0.75,
            }}
            animate={{
              opacity: 1,
              transition: {
                ease: "easeOut",
                duration: 0.15,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.75,
              transition: {
                ease: "easeIn",
                duration: 0.15,
              },
            }}
          >
            <motion.img
              src={src}
              style={{
                ...(boxSize
                  ? {
                      width: boxSize,
                      height: boxSize,
                    }
                  : null),
                borderRadius,
                objectFit,
              }}
              alt={alt}
              className={imgClasses}
              onError={(
                event: React.SyntheticEvent<HTMLImageElement, Event>
              ) => {
                event.currentTarget.onerror = null; // prevents looping
                event.currentTarget.src = fallbackSrc;
              }}
              initial={{ scale: 1 }}
              animate={controls}
              dragControls={dragControls}
              drag
              dragMomentum={false}
              dragSnapToOrigin={scale <= 1}
              dragTransition={{ bounceStiffness: 0, bounceDamping: 0 }}
            />
          </motion.div>
          {renderTools()}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
