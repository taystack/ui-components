import React from "react";
import { storiesOf } from "@storybook/react";
import ShowcaseCard from "../../src/Cards/ShowcaseCard";
import ShowcaseCardContainer from "../../src/Cards/ShowcaseCardContainer";
import {
  moon,
  adidas,
  triumph,
  niel,
  pow,
  spiderman,
  grass,
  google,
} from "../CardData";


const BuildShowcase = ({ sources, row, column, children }) => {
  let body = children;
  if (!body) {
    body = sources.map((source) => {
      return (<ShowcaseCard {...source} key={source.img.src} />);
    });
  }
  return (
    <ShowcaseCardContainer row={row} column={column}>
      {body}
    </ShowcaseCardContainer>
  );
};

BuildShowcase.defaultProps = {
  row: false,
  column: false,
};

storiesOf("ShowcaseCard", module)
.add("{img, frontImg}", () => {
  return (
    <BuildShowcase column>
      <BuildShowcase row sources={[ pow, spiderman ]} />
      <BuildShowcase row sources={[ adidas, triumph ]} />
      <BuildShowcase row sources={[ moon, niel ]} />
    </BuildShowcase>
  );
})
.add("{img, children}", () => {
  return (
    <ShowcaseCard img={grass.img} frontImg={google.frontImg}>
      <input
        placeholder="Search Google or type a URL"
        style={{
          background: "#eee",
          border: 0,
          borderRadius: 20,
          padding: 10,
          width: "calc(100% - 80px)",
          outline: "none",
          marginTop: 20,
        }}
      />
    </ShowcaseCard>
  );
})
.add("<ShowcaseCard />", () => (
  <ShowcaseCard />
))
;
