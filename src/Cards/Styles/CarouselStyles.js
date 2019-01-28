import { EitherOr } from "@taystack/js-helpers";


export default (style = {}) => {
  const MARGIN = EitherOr(style.margin, 30);
  return {
    margin: MARGIN,
    Carousel: {
      userSelect: "none",
      transformStyle: "preserve-3d",
      display: "flex",
      width: "100vw",
      justifyContent: "center",
      alignItems: "center",
      perspective: "2000px",
      transition: "opacity 500ms",
    },
    CarouselSlice: {
      transition: "transform 500ms",
      position: "absolute",
    },
  };
};
