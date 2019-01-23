import React from "react";
import PropTypes from "prop-types";
import LoadingImage from "../Components/LoadingImage";
import Classnames from "../Helpers/Classnames";
import Styles from "./Styles/HopCardStyles";
import PseudoStyles from "../PseudoStyles/HopCardPseudoStyles.module.css";


/*
imgSrc: image source
styles: {
  accent: changes the color of the accent color on top of the card
  color: changes text color
  width: changes the width of the card
  height: changes the height of the card
}
*/


const HopCard = ({ children, style, imgSrc }, ...props) => {
  const buildImg = (src) => (
    <LoadingImage src={src} height={50} width={50} />
  );
  const styles = Styles(style);
  const image = imgSrc ? buildImg(imgSrc) : null;
  const className = Classnames(props.className, PseudoStyles.HopCardOuter);
  return (
    <div
      style={styles.HopCardOuter}
      className={className}
    >
      <div style={styles.HopCard}>
        <div style={styles.Container}>
          {image}
          {children}
        </div>
      </div>
    </div>
  );
};

HopCard.propTypes = {
  style: PropTypes.object,
};

HopCard.defaultProps = {
  style: {},
};

export default HopCard;
