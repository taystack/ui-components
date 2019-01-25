import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "../../src/Inputs/Input";
import Checkbox from "../../src/Inputs/Checkbox";
import Font from "../../src/Styles/Font";


class InputRenderer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      label: "Label",
      defaultValue: "Default value",
      errorText: "This thing has an error",
    }

    this.onChange = this.onChange.bind(this);
    this.setError = this.setError.bind(this);

    this.style = {
      marginTop: "1em",
    }
  }

  onChange(name) {
    return (event) => {
      this.setState({ [name]: event.target.value });
    }
  }

  setError(event) {
    const error = !this.state.error;
    this.setState({ error });
  }

  render() {
    return (
      <div style={{
        display: "flex",
        fontFamily: Font.family,
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: 100,
          marginTop: 100,
        }}>
          <Input
            style={this.style}
            label={this.state.label}
            defaultValue={this.state.defaultValue}
            autoFocus={this.state.autoFocus}
            error={this.state.error}
            errorText={this.state.errorText}
            onChange={this.onChange("defaultValue")}
          />
        </div>
        <div style={{ marginLeft: 100 }}>
          <div style={{ padding: "1em 0" }}>Change the props</div>
          <Input
            style={this.style}
            label="Props.label"
            onChange={this.onChange("label")}
            defaultValue={this.state.label}
          />
          <Input
            style={this.style}
            label="Props.defaultValue"
            onChange={this.onChange("defaultValue")}
            defaultValue={this.state.defaultValue}
          />
          <Input
            style={this.style}
            label="Props.errorText"
            onChange={this.onChange("errorText")}
            defaultValue={this.state.errorText}
          />
          <Checkbox
            style={this.style}
            id="checkbox-1"
            onChange={this.setError}
            label="Set error"
            defaultChecked={this.state.error}
          />
        </div>
      </div>
    );
  }
}


storiesOf("Inputs", module)
.add("Try-out", () => {
  return (<InputRenderer />);
})
;
