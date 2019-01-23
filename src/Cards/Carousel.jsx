import React from "react";
import Styles from "./Styles/CarouselStyles";
import CarouselCard from "./CarouselCard";
import ClosestMove from "../Helpers/ClosestMove";
import CircleSlice from "../Helpers/CircleSlice";


export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotate: 0,
      loaded: false,
    };
    this.style = Styles();
    this.body = React.createRef();
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  componentDidMount() {
    const width = this.body.current.offsetWidth;
    this.mover = new ClosestMove(this.props.children.length);
    this.setState({ loaded: true, width });
    document.body.focus();
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeydown);
    document.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
    document.removeEventListener("resize", this.handleResize);
  }

  get slice() {
    return 360 / this.props.children.length;
  }

  get index() {
    return Math.abs(CircleSlice(this.state.rotate, this.slice));
  }

  get range() {
    return this.width / 2 - this.style.margin;
  }

  rotate(dir = -1) {
    let { rotate } = this.state;
    rotate += this.slice * dir;
    this.setState({ rotate });
  }

  rotateLeft(mod = 1) {
    this.rotate(-1 * mod);
  }

  rotateRight(mod = 1) {
    this.rotate(1 * mod);
  }

  handleKeydown(event) {
    if (event.key === "ArrowLeft") {
      this.rotateRight();
    } else if (event.key === "ArrowRight") {
      this.rotateLeft();
    }
  }

  // deltaTheta: change in rotation (degrees)
  handleCardClick(index) {
    const move = this.mover.find(this.index, index);
    this.rotate(move);
  }

  renderChildren() {
    return React.Children.map(this.props.children, (child, i) => (
      <CarouselCard
        index={i}
        slice={this.slice}
        rotate={this.state.rotate}
        width={this.state.width}
        child={child}
        onClick={this.handleCardClick}
      >{child}</CarouselCard>
    ));
  }

  render() {
    const { loaded } = this.state;
    return (
      <div
        ref={this.body}
        style={{
        ...this.style.Carousel,
        opacity: (loaded ? "1" : "0"),
      }}
      >
        {this.renderChildren()}
        {this.state.rotate}, {this.index}
      </div>
    );
  }
}
