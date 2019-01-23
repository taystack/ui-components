import React from "react";
import PropTypes from "prop-types";
import Styles from "./Styles/CarouselStyles";


export default class CarouselCard extends React.Component {
  static get propTypes() { return {
    child: PropTypes.any,
    slice: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    rotate: PropTypes.number.isRequired,
    onClick: PropTypes.func,
    width: PropTypes.number,
  }}

  static get defaultProps() { return {
    child: null,
    onClick: () => {},
    width: 0,
  }}

  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      width: 0,
    };

    this.style = Styles();
    this.el = React.createRef();
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const height = this.el.current.offsetHeight;
    const width = this.el.current.offsetWidth;
    this.setState({ height, width });
  }

  get position() {
    return this.props.slice * (this.props.index + 1) - this.props.slice;
  }

  get rotateY() {
    return this.position + this.props.rotate;
  }

  get isFront() {
    return this.rotateY % 360 === 0;
  }

  get transformStyle() {
    return this.isFront ? "preserve-3d" : false;
  }

  get zIndex() {
    return this.isFront ? 1 : -1;
  }

  get scale() {
    return this.isFront ? 1 : 0.5;
  }

  get x() {
    return this.state.width / 2 - 10;
  }

  get y() {
    return (this.state.height - (this.isFront ? 100 : 0)) / (this.isFront ? 2 : 1);
  }

  get origin() {
    return this.props.width / 2 - this.x - 70;
  }

  get translate() {
    return `-${this.x}px, ${this.y}px`;
  }

  handleMouseEnter(event) {
    if (!this.isFront) event.stopPropagation();
  }

  handleMouseMove(event) {
    if (!this.isFront) event.stopPropagation();
  }

  handleMouseLeave(event) {
    if (!this.isFront) event.stopPropagation();
  }

  handleClick() {
    this.props.onClick(this.props.index);
  }

  render() {
    return (
      <div
        dataposition={this.position}
        style={{
          transformOrigin: `0 0 -${this.origin}px`,
          transform: `rotateY(${this.rotateY}deg) scale(${this.scale}) translate(${this.translate})`,
          ...this.style.CarouselSlice,
          transformStyle: this.transformStyle,
          zIndex: this.zIndex,
        }}
        ref={this.el}
        onMouseEnter={this.handleMouseEnter}
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleClick}
      >
        <div
          style={{
            ...this.style.CarouselCard,
          }}
        >
          {this.props.child}
          {this.props.rotate},
          {this.position},
          {this.props.index}
        </div>
      </div>
    );
  }
};
