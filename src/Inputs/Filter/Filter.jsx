import React from "react";
import PropTypes from "prop-types";
import { Classnames, Pick } from "@taystack/js-helpers";
import Styles from "../Styles/Filter";
import FilterTag from "./FilterTag";
import FilterResult from "./FilterResult";
import FilterResultText from "./FilterResultText";
import "../Styles/FilterPseudo.css";


export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      filter: "",
    };
    this.createRefs();
    this.createBindings();
    this.styles = Styles(props.style);
    this.blurTimeout = undefined;
    this.focusTimeout = undefined;
  }

  createBindings() {
    [
      "handleKeyDown",
      "handleKeyUp",
      "handleResultClick",
      "removeTag",
      "handleFocus",
      "handleBlur",
      "stopBlur",
    ].forEach(fn => (this[fn] = this[fn].bind(this)));
  }

  createRefs() {
    this.input = React.createRef();
    this.dropdown = React.createRef();
  }

  componentDidMount() {
    if (this.props.autofocus) {
      this.focusTimeout = setTimeout(() => {
        this.input.current.focus();
      }, 200);
    }
  }

  componentWillUnmount() {
    this.stopBindings();
  }

  stopBindings() {
    clearTimeout(this.blurTimeout);
    clearTimeout(this.focusTimeout);
  }

  get tagsAvailable() {
    // return true;
    return this.props.tags.length && this.state.focus;
  }

  get resultsAvailable() {
    // return true;
    return this.props.results.length && this.state.focus;
  }

  get isDropdownOpen() {
    return this.tagsAvailable || this.resultsAvailable;
  }

  handleFocus() {
    this.setState({ focus: true });
  }

  handleBlur() {
    this.blurTimeout = setTimeout(() => {
      this.setState({ focus: false });
    }, 200);
  }

  handleSubmit() {
    this.props.onSubmit(this.state.filter);
    if (this.props.tags) this.input.current.value = "";
  }

  handleKeyDown(event) {
    if (event.key === "Enter") this.handleSubmit();
    this.props.onKeyDown();
  }

  handleKeyUp(event) {
    switch (event.key) {
      case "Enter":
        break;
      default:
        const filter = event.target.value;
        this.setState({ filter });
        break;
    }
  }

  setFilter(filter) {
    this.setState({ filter });
    this.input.current.value = filter;
    this.input.current.focus();
    this.input.current.selectionEnd = filter.length;
  }

  handleResultClick(result) {
    this.props.onResultClick(result);
    let filter = result;
    if (this.props.resultClickValue) {
      filter = result[this.props.resultClickValue];
    }
    this.setFilter(filter);
  }

  removeTag(index) {
    const filter = this.props.tags[index];
    const tags = [...this.props.tags];
    tags.splice(index, 1);
    this.props.onRemoveTag(tags);
    this.setFilter(filter);
  }

  stopBlur(event) {
    event.stopPropagation();
    this.input.current.focus();
    clearTimeout(this.blurTimeout);
  }

  get tags() {
    if (!this.props.tags) return null;
    return this.props.tags.map((tag, index) => (
      <FilterTag
        onRemove={this.removeTag}
        index={index}
        tag={tag}
        key={tag}
        display={this.props.tagDisplay}
        filter={this.state.filter}
      />
    ));
  }

  fuzzyMatch(result) {
    const str = Object.values(Pick(result, this.props.filterProperties)).join(" ");
    return str.match(new RegExp(this.state.filter, "i"));
  }

  get results() {
    if (!this.props.results) return null;
    return this.props.results.map((result, index) => {
      const remove = !this.fuzzyMatch(result);
      return (
        <FilterResult
          key={result.id}
          index={index}
          remove={remove}
          display={(r, f) => (
            <FilterResultText
              result={r}
              filter={f}
              index={index}
              properties={this.props.filterProperties}
            />
          )}
          result={result}
          filter={this.state.filter}
          onClick={this.handleResultClick}
        />
      )
    });
  }

  render() {
    const bodyClassName = Classnames("FilterBody", this.props.className);
    const inputClassName = Classnames("FilterInput", this.props.inputClassName, {
      focus: this.state.focus,
    });
    const dropdownClassName = Classnames("FilterDropdown", {
      openResults: this.resultsAvailable,
    });
    return (
      <div
        className={bodyClassName}
        style={{
          ...this.styles.FilterBody,
        }}
      >
        <input
          ref={this.input}
          type="text"
          className={inputClassName}
          placeholder={this.props.placeholder}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleKeyUp}
          style={{
            ...this.styles.FilterInput,
          }}
        />
        <div className="FilterTags">
          {this.tags}
        </div>
        <div
          className={dropdownClassName}
          onClick={this.stopBlur}
          style={{
            ...this.styles.FilterDropdown,
          }}
        >
          <div className="FilterResults">
            {this.results}
          </div>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  autofocus: PropTypes.bool,
  onRemoveTag: PropTypes.func,
  onResultClick: PropTypes.func,
  onSubmit: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  filterProperties: PropTypes.array,
  style: PropTypes.object,
  results: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array,
  ]),
  resultClickValue: PropTypes.string,
  resultDisplay: PropTypes.func,
  tags: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array,
  ]),
  tagsDisplay: PropTypes.func,
};

Filter.defaultProps = {
  autofocus: true,
  onRemoveTag: () => {},
  onResultClick: () => {},
  onSubmit: () => {},
  onKeyDown: () => {},
  placeholder: "",
  filterProperties: [],
  results: false,
  resultClickValue: "name",
  resultDisplay: x => x,
  style: {},
  tags: false,
  tagDisplay: x => x,
};
