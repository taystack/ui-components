import React from "react";
import PropTypes from "prop-types";
import Styles from "./Styles/Checkbox";
import { Omit } from "@taystack/js-helpers";


class Checkbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focus: false,
    };

    this.input = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.input.current.checked !== nextProps.defaultChecked) {
      this.input.current.checked = nextProps.defaultChecked;
    }
  }

  componentDidMount() {
    if (this.props.defaultChecked) {
      this.input.current.checked = true;
      this.forceUpdate();
    }
  }

  handleChange() {
    this.props.onChange(this.input.current.checked);
  }

  onFocus() {
    this.setState({ focus: true });
    this.input.current.focus();
  }

  onBlur() {
    this.setState({ focus: false });
  }

  handleEnter(event) {
    if (["Enter", " "].indexOf(event.key) > -1) {
      this.input.current.checked = !this.input.current.checked;
      this.setState({ checked: this.input.current.checked });
      this.handleChange();
    }
  }

  get focused() {
    return this.state.focus;
  }

  get checked() {
    return this.props.defaultChecked;
  }

  get checkbox() {
    const inputProps = Omit(this.props, ["style", "onClick", "onChange", "value"]);
    return (
      <input
        ref={this.input}
        style={Styles.CheckboxElem}
        type="checkbox"
        id={this.props.id}
        {...inputProps}
        onClick={this.handleChange}
      />
    );
  }

  get textLabel() {
    const { label } = this.props;
    if (!label.length) return null;
    return (<span style={{ marginLeft: 10 }}>{label}</span>);
  }

  get label() {
    let checkboxStyles = {
      ...Styles.Checkbox,
    };
    if (this.focused) {
      checkboxStyles = {
        ...checkboxStyles,
        ...Styles.CheckboxFocus,
      };
    }
    if (this.checked) {
      checkboxStyles = {
        ...checkboxStyles,
        ...Styles.CheckboxChecked(this.focused),
      };
    }
    return (
      <label
        htmlFor={this.props.id}
        style={{ display: "flex", outline: "none" }}
        onKeyDown={this.handleEnter}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        tabIndex="0"
      >
        <div style={checkboxStyles}></div>
        {this.textLabel}
      </label>
    );
  }

  render() {
    return (
      <div style={{
        ...Styles.CheckboxContainer,
        ...this.props.style,
      }}>
        {this.checkbox}
        {this.label}
      </div>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string.isRequired,
  style: PropTypes.object,
};

Checkbox.defaultProps = {
  style: {},
  label: "",
  onChange: () => {},
};

export default Checkbox;
