import { useAnimation, useDragControls } from "framer-motion";
import { useEffect, useState } from "react";

const FACTOR = 0.3;

export const useImagePreview = () => {
  const [scale, setScale] = useState<number>(1);
  const [rotation, setRotation] = useState(0);
  const controls = useAnimation();
  const dragControls = useDragControls();

  const reset = () => {
    setScale(1);
    setRotation(0);
    void controls.start({
      scale: 1,
      rotate: 0,
      x: 0,
      y: 0,
    });
  };

  const handleZoomIn = () => {
    setScale((scale) => scale + FACTOR);
  };

  const handleZoomOut = () => {
    setScale((scale) => (scale - FACTOR > 0 ? scale - FACTOR : scale));
  };

  const handleRotateLeft = () => {
    setRotation((rotation) => rotation - 90);
  };

  const handleRotateRight = () => {
    setRotation((rotation) => rotation + 90);
  };

  const handleScroll = (e: React.WheelEvent<HTMLImageElement>) => {
    const factor = FACTOR;
    const delta = -e.deltaY / 120;
    const newScale = scale + delta * factor;

    if (newScale > 0.5) {
      setScale(newScale);
    }
  };

  useEffect(() => {
    void controls.start({
      scale,
      rotate: rotation,
    });
  }, [scale, rotation]);

  return {
    reset,
    scale,
    controls,
    dragControls,
    rotation,
    handleZoomIn,
    handleZoomOut,
    handleRotateLeft,
    handleRotateRight,
    handleScroll,
  };
};
