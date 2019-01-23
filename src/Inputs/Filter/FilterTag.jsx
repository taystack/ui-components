import React from "react";
import PropTypes from "prop-types";
import Classnames from "../../Helpers/Classnames";
import Counter from "../../Helpers/Counter";


class FilterTag extends React.Component {
  static get GRACEFUL_INTERVAL() { return 2; }

  constructor(props) {
    super(props);

    this.state = {
      show: false,
      removing: false,
      width: 0,
    };

    this.chip = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.removeTimeout = undefined;
  }

  componentDidMount() {
    this.setState({ show: true });
    const width = this.chip.current.getBoundingClientRect().width;
    this.setState({ width });
  }

  componentWillUnmount() {
    this.stopBindings();
  }

  stopBindings() {
    clearInterval(this.removeInterval);
    clearTimeout(this.removeTimeout);
  }

  remove() {
    this.stopBindings();
    this.props.onRemove(this.props.index);
  }

  handleClick() {
    this.setState({ show: false }, () => {
      this.width = new Counter(this.state.width, 0, 1.75);
      this.removeTimeout = setTimeout(() => {
        this.removeInterval = setInterval(() => {
          if (this.width.isDone()) return;
          if (this.width.turn() === 0) {
            this.remove();
            return;
          };
          this.setState({ width: this.width.value });
        }, FilterTag.GRACEFUL_INTERVAL);
      }, 100);
    });
  }

  get display() {
    return this.props.display(this.props.tag, this.props.filter);
  }

  render() {
    const className = Classnames("FilterTagBody", {
      show: this.state.show,
    });
    const chipClassName = Classnames("FilterTag", {
      show: this.state.show,
    });
    return (
      <div
        className={className}
        style={{
          width: this.state.width,
        }}
      >
        <div
          ref={this.chip}
          className={chipClassName}
          onClick={this.handleClick}
          >
            {this.display}
          </div>
      </div>
    );
  }
}

FilterTag.propTypes = {
  onRemove: PropTypes.func,
  index: PropTypes.number,
  display: PropTypes.func,
  filter: PropTypes.string,
  tag: PropTypes.any,
};

FilterTag.defaultProps = {
  onRemove: () => {},
  index: -1,
  display: x => x,
  tag: "",
  filter: "",
}

export default FilterTag;
