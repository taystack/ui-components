import { EitherOr } from "@taystack/js-helpers";
import Color from "../../Colors/Colors";
import LinearGradient from "../../Colors/LinearGradient";
import Font from "../../Styles/Font";

const ACCENT = Color.grey;
const COLOR = Color.black;
const WIDTH = 230;
const BORDER_RADIUS = 5;
const HEIGHT = 230;

export default (styles) => ({
  HopCardOuter: {
    transition: "box-shadow 200ms, margin 200ms",
    margin: "1em",
    flexBasis: `${EitherOr(styles.width, WIDTH)}px`,
    borderRadius: `${BORDER_RADIUS}px`,
    overflow: "hidden",
    fontFamily: Font.family,
  },
  HopCard: {
    cursor: "default",
    color: EitherOr(styles.color, COLOR),
    width: `${EitherOr(styles.width, WIDTH)}px`,
    minHeight: `${EitherOr(styles.height, HEIGHT)}px`,
    border: "1.3em solid",
    borderImage: `${LinearGradient(EitherOr(styles.accent, ACCENT))} 30`,
    borderBottom: 0,
    borderLeft: 0,
    borderRight: 0,
  },
  Container: {
    padding: "1em",
  },
});
