import React from "react";
import { storiesOf } from '@storybook/react';
import Random from "../../src/Helpers/Random";
import Polar from "../../src/Graphs/Polar";


class PolarTester extends React.Component {
  constructor(props) {
    super(props);

    const { data, labels } = this.reset;
    this.state = {
      data,
      labels,
    };
    this.index = 0;

    this.handleAdd = this.handleAdd.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  get reset() {
    return {
      data: [1,3,2,5,2,5],
      labels: ["foo", "bar", "baz", "bin", "pho", "foo1"],
    }
  }

  handleReset() {
    const { data, labels } = this.reset;
    this.setState({ data, labels });
  }

  handleAdd() {
    const value = Random(1, 6);
    const label = `foo${this.index}`;
    this.index += 1;
    this.setState({
      data: [...this.state.data, value],
      labels: [...this.state.labels, label],
    })
  }

  handleClick(value, label) {
    console.log("Polar click", label, value);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAdd}>Add data</button>
        <button onClick={this.handleReset}>Reset data</button>
        <Polar
          data={this.state.data}
          labels={this.state.labels}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

storiesOf('PolarGraph', module)
.add('Basic', () => (
  <PolarTester />
))
;
