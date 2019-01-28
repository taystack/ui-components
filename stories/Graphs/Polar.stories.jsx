import React from "react";
import { storiesOf } from '@storybook/react';
import { Random } from "@taystack/js-helpers";
import Polar from "../../src/Graphs/Polar";
import ShowcaseCard from "../../src/Cards/ShowcaseCard";
import javascript from "../../images/JavaScriptBackground.png";


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
      clicked: "",
      data: [1,3,2,5,2,5],
      labels: ["foo", "bar", "baz", "bin", "pho", "foobar"],
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

  handleClick(value, label, index) {
    this.setState({
      clicked: `Clicked - ${label}: ${value}`
    })
  }

  get body() {
    let body = (
      <Polar
        data={this.state.data}
        labels={this.state.labels}
        onClick={this.handleClick}
      />
    );
    if (this.props.showcase) {
      body = (
        <ShowcaseCard img={{src:javascript,alt:"loading..."}}>
          <div style={{marginTop: "3em"}}>JavaScript Skills</div>
          {body}
        </ShowcaseCard>
      );
    }
    return body;
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAdd}>Add data</button>
        <button onClick={this.handleReset}>Reset data</button>
        {this.state.clicked}
        {this.body}
      </div>
    );
  }
}

storiesOf('PolarGraph', module)
.add('Basic', () => (
  <PolarTester />
))
.add('In ShowcaseCard', () => (
  <PolarTester showcase />
))
;
