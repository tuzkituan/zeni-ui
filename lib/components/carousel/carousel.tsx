import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
import { useState } from "react";
import { Flex } from "../flex/flex";
import { Image } from "../image/image";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { twMerge } from "tailwind-merge";
import { ICarousel } from "./carousel.types";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Carousel = ({
  images = [],
  height = 300,
  className,
  style,
}: ICarousel) => {
  const theme = useComponentStyle("Carousel");
  const [[page, direction], setPage] = useState([0, 0]);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const imageIndex: number = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Flex
      justify="center"
      align="center"
      direction="row"
      className={twMerge(theme.base(), className)}
      style={{ height: height, ...style }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            // x: { type: 'tween', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          className={theme.itemContainer()}
          onDragEnd={(_, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <Image
            src={images[imageIndex]}
            className={theme.item()}
            objectFit="cover"
          />
        </motion.div>
      </AnimatePresence>
      <div
        className={twMerge(theme.prevIcon(), theme.icon())}
        onClick={() => paginate(1)}
      >
        <CaretRight weight="bold" fontSize={14} color="white" />
      </div>
      <div
        className={twMerge(theme.nextIcon(), theme.icon())}
        onClick={() => paginate(-1)}
      >
        <CaretLeft weight="bold" fontSize={14} color="white" />
      </div>
    </Flex>
  );
};
