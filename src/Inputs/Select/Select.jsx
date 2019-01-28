import React from "react";
import PropTypes from "prop-types";
import Styles from "../Styles/Select";


export default class Select extends React.Component {
  static propTypes = {}

  constructor(props) {
    super(props);

    this.state = {
      focus: false,
      filter: "",
    };

    this.input = React.createRef();
    this.overlay = React.createRef();
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

Select.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    option: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
  })),
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

Select.defaultProps = {
  items: [],
  value: "",
};
