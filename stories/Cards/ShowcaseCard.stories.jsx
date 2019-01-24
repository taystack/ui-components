import React from "react";
import { storiesOf } from "@storybook/react";
import ShowcaseCard from "../../src/Cards/ShowcaseCard";
import ShowcaseCardContainer from "../../src/Cards/ShowcaseCardContainer";
import {
  polygons,
  waves,
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
.add("no props", () => (
  <ShowcaseCard text="If you don't provide an 'img' prop, you get a cat." />
))
.add("{title}", () => (<ShowcaseCard title="Super Easy" />))
.add("{text}", () => (<ShowcaseCard text="Barely an inconvienence" />))
.add("{title, text}", () => (
  <ShowcaseCard
    title="Super Easy,"
    text="Barely an inconvienence"
  />
))
.add("{img, title, text}", () => {
  const sources1 = [ polygons , waves ];
  return (
    <BuildShowcase row sources={sources1} />
  );
})
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
// .add("{img, children}", () => {
//   return (
//     <ShowcaseCard img={cat1.img}>
//   );
// })
// .add("Rows", () => {
//   const sources = [ cat1, cat2 ];
//
//   return (
//     <BuildShowcase row sources={sources} />
//   );
// })
// .add("Columns", () => {
//   const sources = [ cat3, cat4 ];
//
//   return (
//     <BuildShowcase sources={sources} column />
//   );
// })
// .add("Grid", () => {
//   const sources1 = [ cat1, cat2 ];
//   const sources2 = [ cat3, cat4 ];
//
//   return (
//     <BuildShowcase column>
//       <BuildShowcase sources={sources1} row />
//       <BuildShowcase sources={sources2} row />
//     </BuildShowcase>
//   );
// })
;
