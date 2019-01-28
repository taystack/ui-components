import React from "react";
import PropTypes from "prop-types";
import { Classnames } from "@taystack/js-helpers";


export default class FilterResult extends React.Component {
  static get GRACEFUL_INTERVAL() { return 2; }

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  get display() {
    return this.props.display(this.props.result, this.props.filter);
  }

  onClick(event) {
    this.props.onClick(this.props.result);
  }

  render() {
    const className = Classnames("FilterResultBody", {
      remove: this.props.remove,
    });
    return (
      <div
        className={className}
        onClick={this.onClick}
      >
        <div
          className="FilterResult"
        >
          {this.display}
        </div>
      </div>
    );
  }
}

FilterResult.propTypes = {
  finder: PropTypes.array,
  display: PropTypes.func,
  result: PropTypes.any,
  filter: PropTypes.string,
  onClick: PropTypes.func,
  remove: PropTypes.bool,
};

FilterResult.defaultProps = {
  finder: [],
  result: "",
  display: x => x,
  filter: "",
  onClick: () => {},
  remove: false,
};
