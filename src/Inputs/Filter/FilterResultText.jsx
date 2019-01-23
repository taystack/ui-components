import React from "react";
import MatchFinder from "../../Helpers/MatchFinder";
import Merge from "../../Helpers/Merge";
import Color from "../../Colors/Colors";


const RenderProp = ({ prop, filter, end }) => {
  let matchGroup = [];
  const finder = new MatchFinder(prop, filter);
  const Span = ({ children, style }) => (<span style={Merge({}, style)}>{children}</span>);
  if (finder.hasMatch) {
    const Bold = ({ children }) => (<b style={{ color: Color.blue }}>{children}</b>);
    matchGroup = finder.matches.map((m, i) => {
      if (m.match) {
        return <Bold key={m.string + i}>{m.string}</Bold>;
      }
      return <Span key={m.string + i}>{m.string}</Span>
    });
  } else {
    matchGroup.push(<Span key={prop + prop}>{prop}</Span>);
  }

  const style={marginRight: "0.5rem"};
  if (end) style.marginRight = 0;
  return (<Span key={prop} style={style}>{matchGroup}</Span>);
};

const FilterResultText = ({ result = {}, filter = "", properties = [] }) => {
  let spans = null;
  if (properties.length) {
    spans = properties.map((prop, i) => (
      <RenderProp key={prop} prop={result[prop]} filter={filter} end={i + 1 === properties.length} />
    ));
  }
  return (
    <span>{spans}</span>
  );
};

export default FilterResultText;
