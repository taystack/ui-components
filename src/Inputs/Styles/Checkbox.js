import Font from "../../Styles/Font";
import Color from "../../Colors/Colors";

const {
  blue,
  black,
  grey,
} = Color;


export default {
  CheckboxContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    fontFamily: Font.family,
  },

  Checkbox: {
    height: "1em",
    width: "1em",
    display: "inline-block",
    transition: "box-shadow 200ms",
    boxShadow: `inset 0 0 0 2px ${grey}`,
    borderRadius: 1,
  },

  CheckboxFocus: {
    boxShadow: `inset 0 0 0 2px ${blue}`,
  },

  CheckboxChecked: hasFocus => ({
    boxShadow: `inset 0 0 10px 10px ${blue}, 0 1px 1px 0 ${hasFocus ? "rgba(0,0,0,0.3)" : "transparent"}`,
  }),

  CheckboxElem: {
    position: "absolute",
    top: 0,
    left: 0,
    visibility: "hidden",
    zIndex: -1,
  },
};
