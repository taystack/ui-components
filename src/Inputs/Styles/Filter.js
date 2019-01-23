import DefaultStyles from "./Default";


export default (augment = {}) => {
  const styles = {
    ...DefaultStyles,
    ...augment,
  };

  return {
    FilterBody: {
      fontFamily: styles.fontFamily,
      display: "flex",
      flexDirection: "column",
      padding: "1em",
      position: "relative",
      width: "100%",
      boxSizing: "border-box",
    },
    FilterInput: {
      fontFamily: styles.fontFamily,
      border: "none",
      borderRadius: 1,
      fontSize: "1em",
      padding: "1.5em 2em",
      outline: "none",
    },
    FilterDropdown: {
      position: "absolute",
      overflow: "hidden",
    }
  };
};
