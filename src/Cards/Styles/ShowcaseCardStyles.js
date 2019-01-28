import Color from "../../Colors/Colors";
import { EitherOr } from "@taystack/js-helpers";


const COLOR = Color.black;
const BORDER_RADIUS = 0;
const SPACING = 20;

export const WIDTH = 300;
export const HEIGHT = 400;

export default (augment) => {
  const styles = {
    ...augment,
  };
  const height = EitherOr(styles.height, HEIGHT);
  const width = EitherOr(styles.width, WIDTH);
  const color = EitherOr(styles.color, COLOR);
  const borderRadius = EitherOr(styles.borderRadius, BORDER_RADIUS);
  const gradientBackground = styles.gradientBackground;
  const boundWidth = width + 40;
  const boundHeight = height + 80;
  return {
    ShowcaseCard: {
      color,
      borderRadius,
      height: `${height}px`,
      width: `${width}px`,
      perspective: "1000px",
      margin: `${SPACING}px auto`,
      transition: "transform 300ms",
      fontFamily: "Arial, Helvetica, sans-serif",
    },
    CardBody: {
      height: "100%",
      width: "100%",
      position: "relative",
      perspective: "1000px",
    },
    CardFront: {
      textShadow: "0 1px 2px rgba(255,255,255,0.5)",
      perspective: "100px",
      position: "absolute",
      top: 0,
      fontSize: "20px",
      height: `${height}px`,
      width: `${width}px`,
      lineHeight: "20px",
      margin: "auto",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    BoundingRect: {
      flexShrink: 0,
      overflow: "hidden",
      width: `${boundWidth}px`,
      height: `${boundHeight}px`,
      transition: "opacity 300ms",
    },
    Mirror: {
      transformStyle: "preserve-3d",
      transition: "transform 50ms",
      perspective: "1000px",
      height: `${height}px`,
      opacity: "0.4",
      filter: "blur(1px)",
    },
    MirrorFade: {
      position: "absolute",
      left: "-10px",
      top: `${height + SPACING}px`,
      width: `${boundWidth}px`,
      height: "70px",
    },
  };
};
