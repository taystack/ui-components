import React from "react";
import Styles from "./Styles/Input.css";


const Input = (props) => {
  this.focus = false;

  this.onBlur = () => {
    this.focus = false;
  }

  this.onFocus = () => {
    this.focus = true;
  }

  return (
    <div
      {...props}
      style={{
        ...props.style,
        ...Styles,
      }}
  />);
}

export default Input;
