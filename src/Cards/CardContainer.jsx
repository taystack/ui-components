import React from "react";
import Styles from "./Styles/CardContainerStyles";


const CardContainer = ({ direction, children }) => {
  const styles = Styles(direction);
  return (
    <div id="card-container" style={styles.CardContainer}>{children}</div>
  );
};

export default CardContainer;
