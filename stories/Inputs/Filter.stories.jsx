import React from "react";
import { storiesOf } from "@storybook/react";
import Filter from "../../src/Inputs/Filter/Filter";
import FilterResultText from "../../src/Inputs/Filter/FilterResultText";
import dbResults from "../FilterData";


class FilterWith extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    if (props.tags) this.state.tags = ["motorbikes", "shoes", "boats"];
    if (props.results) this.state.results = dbResults;
    this.setTags = this.setTags.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onResultClick = this.onResultClick.bind(this);
  }

  setTags(tags) {
    this.setState({ tags });
  }

  addTag(tag) {
    if (this.state.tags.indexOf(tag) > -1) return;
    this.setTags([tag].concat(this.state.tags));
  }

  onResultClick(result) {
    console.log("result", result);
  }

  onSubmit(filter) {
    if (this.props.tags) this.addTag(filter);
  }

  get placeholder() {
    if (this.props.tags && this.props.results) return "Add some tags from the results";
    if (this.props.tags) return "Type something then hit \"Enter\"";
    if (this.props.results) return "Type to filter";
    return "";
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        <Filter
          placeholder={this.placeholder}
          tags={this.props.tags ? this.state.tags : false}
          tagDisplay={x => x}
          onRemoveTag={this.setTags}
          results={this.props.results ? this.state.results : false}
          filterProperties={["name", "email"]}
          resultDisplay={(r, f) => <FilterResultText result={r} filter={f} properties={["name", "email"]} />}
          onResultClick={this.handleResultClick}
          resultClickValue="name"
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

storiesOf("Filter", module)
.add("no props", () => {
  return (<Filter />);
})
.add("tags", () => {
  return (<FilterWith tags />);
})
.add("results", () => {
  return (<FilterWith results />);
})
;
