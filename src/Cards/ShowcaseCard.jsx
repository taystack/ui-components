import React from "react";
import PropTypes from "prop-types";
import EitherOr from "../Helpers/EitherOr";
import Counter from "../Helpers/Counter";
// import LoadingImage from "../Components/LoadingImage";
import Styles, { HEIGHT, WIDTH } from "./Styles/ShowcaseCardStyles";


class ShowcaseCard extends React.Component {

  static get MOUSE_LEAVE_TIMEOUT() { return 50; }
  static get GRACEFUL_INTERVAL() { return 2; }
  static get TURN_SPEED() { return 5; }

  constructor(props) {
    super(props);
    this.style = Styles(props.style);
    this.height = EitherOr(HEIGHT, props.height);
    this.width = EitherOr(WIDTH, props.width);
    this.state = {
      toX: 0,
      toY: 0,
      x: 0,
      y: 0,
      hovering: false,
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.mouseLeaveTimeout = undefined;
  }

  get hasText() {
    const { text, title } = this.props;
    return !!text.length || !!title.length || this.props.debug;
  }

  componentWillUnmount() {
    this.clearAsyncCalls();
  }

  clearAsyncCalls() {
    clearTimeout(this.mouseLeaveTimeout);
    clearInterval(this.mouseLeaveInterval);
    clearInterval(this.mouseMoveInterval);
    this.xTracker = undefined;
    this.yTracker = undefined;
  }

  gracefulOrigin() {
    if (!this.xTracker || !this.yTracker) return;
    if (this.xTracker.isDone && this.yTracker.isDone) {
      clearInterval(this.mouseMoveInterval);
    }
  }

  gracefulEntry(event) {
    let { x, y } = this.getEventData(event);
    const X = this.state.x;
    const Y = this.state.y;
    this.xTracker = new Counter(X, x, ShowcaseCard.TURN_SPEED);
    this.yTracker = new Counter(Y, y, ShowcaseCard.TURN_SPEED);

    // Track movements of the mouse
    this.mouseMoveInterval = setInterval(() => {
      let { toX, toY } = this.state;
      const x = this.xTracker.setTarget(toX, ShowcaseCard.TURN_SPEED).turn();
      const y = this.yTracker.setTarget(toY, ShowcaseCard.TURN_SPEED).turn();
      this.setState({ x, y });
    });
  }

  gracefulMovement(event) {
    if (this.xTracker && this.yTracker) {
      this.xTracker.setTarget(this.state.toX, ShowcaseCard.TURN_SPEED);
      this.yTracker.setTarget(this.state.toY, ShowcaseCard.TURN_SPEED);
    }
  }

  getEventData(event) {
    var rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - (this.width / 2) - rect.x;
    const y = event.clientY - (this.height / 2) - rect.y;
    return { x, y };
  }

  handleMouseMove(event) {
    const { x, y } = this.getEventData(event);
    this.setState({ toX: x, toY: y }, () => {
      this.gracefulMovement(event);
    });
  }

  handleMouseLeave() {
    this.setState({ toX: 0, toY: 0, hovering: false });
    this.mouseLeaveTimeout = setTimeout(() => {
      this.gracefulOrigin();
    }, ShowcaseCard.MOUSE_LEAVE_TIMEOUT);
  }

  handleMouseEnter(event) {
    this.clearAsyncCalls();
    this.gracefulEntry(event);
    this.setState({ hovering: true });
  }

  calculateTranslation() {
    const magicNumberX = 15 / (this.width / 2);
    const magicNumberY = 15 / (this.height / 2);
    const { x, y } = this.state;
    const xTranslate = x * magicNumberX;
    const yTranslate = y * magicNumberY;
    return `translateX(${xTranslate}px) translateY(${yTranslate}px)`;
  }

  debugText() {
    if (this.props.debug) {
      return (<span>{Math.round(this.state.x)}, {Math.round(this.state.y)}</span>);
    }
    return null;
  }

  get hoverScale() {
    return this.state.hovering ? 1 : 0.8;
  }

  renderForeground() {
    let el = null;
    let text = null;
    let frontImage = null;
    let hasForeground = false;
    let children = null;
    if (this.hasText) {
      hasForeground = true;
      text = (
        <div>
          {this.debugText()}
          {!!this.props.title.length &&
            <h2 style={{ margin: 0 }}>{this.props.title}</h2>}
          {!!this.props.text.length &&
            <div style={{ marginTop: "1em" }}>{this.props.text}</div>}
        </div>
      );
    }
    if (this.props.frontImg) {
      hasForeground = true;
      const { frontImg } = this.props;
      const style = {};
      if (frontImg.height) {
        style.height = "100%";
        style.width = "auto";
      } else {
        style.height = "auto";
        style.width = "100%";
      }
      frontImage = (
        <img
          src={this.props.frontImg.src}
          alt={this.props.frontImg.alt}
          style={{
            transition: "transform 400ms",
            transform: `scale(${this.hoverScale})`,
            maxHeight: this.height,
            maxWidth: this.width,
          }}
        />
      )
    }
    if (this.props.children) {
      children = React.Children.map(this.props.children, (child, i) => (
        React.cloneElement(child, {
          style: {
            transition: "transform 400ms",
            transform: `scale(${this.hoverScale + 0.2})`,
            ...child.props.style,
          },
        })
      ));
      hasForeground = true;
    }
    if (hasForeground) {
      el = (
        <div
          style={{
            ...this.style.CardFront,
            transform: this.calculateTranslation(),
          }}
        >
          {frontImage}
          {text}
          {children}
        </div>
      );
    }
    return el;
  }

  calculateRotation(invert = false) {
    const { x, y } = this.state;
    const magicNumberX = 10 / (this.width / 2);
    const magicNumberY = 10 / (this.height / 2);
    const mod = (invert ? -1 : 1);
    const xDeg = x * magicNumberX * mod;
    const yDeg = y * magicNumberY * mod + (invert ? 180 : 0);
    return `rotateX(${-yDeg}deg) rotateY(${xDeg}deg)`;
  }

  calculateScale() {
    const scale = this.state.hovering ? 1 : 0.9;
    return `scale(${scale})`;
  }

  buildBackgroundImage() {
    return (
      <img
        src={this.props.img.src}
        alt={this.props.img.alt}
        style={{
          maxWidth: this.width,
          maxHeight: this.height,
          position: "absolute",
          bottom: "0",
          clip: `rect(0px,${this.width}px,${this.height}px,0px)`,
        }}
      />
    );
  }

  render() {
    const image = this.buildBackgroundImage();
    const foreground = this.renderForeground();
    return (
      <div
        style={{
          ...this.style.BoundingRect,
        }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onMouseMove={this.handleMouseMove}
      >
        <div
          style={{
            ...this.style.ShowcaseCard,
            transform: this.calculateScale(),
          }}
        >
          <div
            style={{
              ...this.style.CardBody,
              transform: this.calculateRotation(),
            }}
          >
            {image}
            {foreground}
          </div>
          <div style={this.style.Mirror}>
            <div
              style={{
                transform: this.calculateRotation(true),
                marginTop: "20px",
                height: "100%",
              }}>
              {image}
              {foreground}
            </div>
          </div>
          <div className="MirrorFade" style={this.style.MirrorFade} />
        </div>
      </div>
    );
  }
}

ShowcaseCard.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.object,
  frontImg: PropTypes.any,
};

ShowcaseCard.defaultProps = {
  style: {},
  text: "",
  title: "",
  img: {
    src: "http://placekitten.com/g/300/400",
    alt: "ShowcaseCard - missing props.img.alt",
  },
  frontImg: false,
};

export default ShowcaseCard;
