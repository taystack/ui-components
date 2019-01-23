import React from "react";
import { storiesOf } from "@storybook/react";
import Carousel from "../../src/Cards/Carousel";
import ShowcaseCard from "../../src/Cards/ShowcaseCard";
import Times from "../../src/Helpers/Times";
import {
  cat1,
  polygons,
  waves,
  weezy,
  moon,
  adidas,
  triumph,
  niel,
} from "../CardData";


const TestItem = ({ bg }) => {
  return (
    <div style={{
      height: "500px",
      width: "300px",
      background: bg,
    }}></div>
  );
};

TestItem.defaultProps = {
  bg: "#444",
};

const CarouselTester = (props) => {
  const children = Times(props.count, (index) => (
    <ShowcaseCard key={index} />
  ));

  return (
    <div>
      <Carousel>
        {children}
      </Carousel>
    </div>
  );
}

storiesOf("Carousel", module)
.add("with ShowcaseCard", () => {
  return (<CarouselTester count={10} />);
})
.add("test with custom ShowcaseCards", () => {
  const cards = [
    cat1,
    polygons,
    waves,
    weezy,
    moon,
    adidas,
    triumph,
    niel,
  ].map(source => <ShowcaseCard {...source} key={source.img.src} />);
  return (
    <Carousel>{cards}</Carousel>
  );
})
;
