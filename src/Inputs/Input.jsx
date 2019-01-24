import React from "react";
import PropTypes from "prop-types";
import Styles from "./Styles/Input";
import Omit from "../Helpers/Omit";


class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };

    this.input = React.createRef();

    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.input.current.value !== nextProps.defaultValue) {
      this.input.current.value = nextProps.defaultValue;
    }
  }

  componentDidMount() {
    if (this.props.defaultValue.length) {
      this.forceUpdate();
    }
  }

  onBlur(event) {
    this.setState({ focus: false });
    if (this.props.onBlur) this.props.onBlur(event);
  }

  onFocus(event) {
    this.setState({ focus: true });
    if (this.props.onFocus) this.props.onFocus(event);
  }

  get labelMove() {
    return this.state.focus ||
      (this.input.current && this.input.current.value.length > 0);
  }

  get hasError() {
    return this.props.error;
  }

  get error() {
    const { errorText } = this.props;
    const hasError = this.hasError;
    const containerStyle = Styles.InputErrorContainer(hasError);
    return (
      <div style={containerStyle}>
        <div style={Styles.InputErrorText}>{errorText}</div>
      </div>
    );
  }

  get label() {
    if (!this.props.label.length) return null;
    let style = Styles.InputLabel;
    if (this.labelMove) {
      style = {
        ...style,
        ...Styles.InputLabelMove,
      }
    }
    return (
      <span style={style}>{this.props.label}</span>
    );
  }

  get containerStyle() {
    let { style } = this.props;
    const containerStyle = {
      ...Styles.InputContainer,
      ...style,
    };
    return containerStyle;
  }

  get inputStyles() {
    let inputStyles = {
      ...Styles.Input,
    };
    if (this.state.focus) {
      inputStyles = {
        ...inputStyles,
        ...Styles.InputFocus,
      }
    }
    if (this.hasError) {
      inputStyles = {
        ...inputStyles,
        ...Styles.InputError,
      };
    }
    return inputStyles;
  }

  get inputProps() {
    return Omit(this.props, [
      "autoFocus",
      "inputStyle",
      "label",
      "style",
      "error",
      "errorText",
    ]);
  }

  render() {
    return (
      <div style={this.containerStyle}>
        {this.label}
        <input
          ref={this.input}
          {...this.inputProps}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          style={this.inputStyles}
        />
        {this.error}
      </div>
    );
  }
}

Input.propTypes = {
  autoFocus: PropTypes.bool,
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.object,
  inputStyle: PropTypes.object,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  errorText: PropTypes.string,
}

Input.defaultProps = {
  errorText: "",
  autoFocus: false,
  defaultValue: "",
  label: "",
  style: {},
  inputStyle: {},
  error: false,
};

export default Input;
