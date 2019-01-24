import Color from "../../Colors/Colors";
import Font from "../../Styles/Font";


const { grey, darkGrey, blue, black, red } = Color;

export default {
  InputContainer: {
    position: "relative",
    fontFamily: Font.family,
    fontSize: Font.size,
  },

  Input: {
    padding: "0.55em 1em",
    paddingTop: "1em",
    outline: "none",
    border: "none",
    borderBottom: `2px solid ${grey}`,
    borderBottomColor: grey,
    background: "transparent",
    transition: "border-bottom 200ms",
    fontSize: Font.size,
  },

  InputFocus: {
    borderBottomColor: blue,
  },

  InputLabel: {
    zIndex: "-1",
    position: "absolute",
    transform: "translateX(1em) translateY(1.1em)",
    transformOrigin: "top left",
    transition: "transform 200ms, color 200ms",
    color: darkGrey,
  },


  InputLabelMove: {
    transform: "translateX(0em) translateY(0em) scale(0.6)",
    color: darkGrey,
  },

  InputError: {
    borderBottomColor: red,
  },

  InputErrorContainer: (hasError) => ({
    height: (hasError ? "1.55em" : 0),
    opacity: (hasError ? 1 : 0),
    overflow: "hidden",
    position: "relative",
    transition: `
      height 200ms ${hasError ? "" : "ease-in 50ms"},
      opacity 200ms ${hasError ? "ease-in 50ms" : ""}
    `,
  }),

  InputErrorText: {
    position: "absolute",
    bottom: 0,
    color: red,
  },
};
