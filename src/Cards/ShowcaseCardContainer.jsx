import React from "react";
import PropTypes from "prop-types";
import Unique from "../Helpers/Unique";


class ShowcaseCardContainerError extends Error {
  constructor(message) {
    super(`Props Error: ${message}`);
  }
}

class ShowcaseCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.checkProps();
    this.checkChildren();
  }

  get isColumn() {
    return this.props.column;
  }

  get isRow() {
    return this.props.row;
  }

  checkProps() {
    if (this.props.row && this.props.column) {
      throw new ShowcaseCardContainerError("can't be both ['row', 'column'], try nesting ShowcaseCardContainer(s)");
    } else if (!this.props.row && !this.props.column) {
      throw new ShowcaseCardContainerError("missing container type; ['row', 'column']");
    }
  }

  checkChildren() {
    const childNames = this.props.children.map((child) => (child.type.name));
    const unique = Unique(childNames);
    if (!unique) {
      throw new ShowcaseCardContainerError(`children must all be the same type, [ShowcaseCard, ShowcaseCardContainer]`);
    }
  }

  render() {
    const flexDirection = this.isRow ? "row" : this.isColumn ? "column" : "";
    return (
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection,
      }}>
        {this.props.children}
      </div>
    );
  }
}

ShowcaseCardContainer.propTypes = {
  column: PropTypes.bool,
  row: PropTypes.bool,
};

ShowcaseCardContainer.defaultProps = {
  column: false,
  row: false,
};

export default ShowcaseCardContainer
