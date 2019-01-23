import React from 'react';
import { storiesOf } from '@storybook/react';
import HopCard from "../../src/Cards/HopCard";
import CardContainer from "../../src/Cards/CardContainer";
import Colors from "../../src/Colors/Colors";


const BuildAllCards = (props) => {
  const cards = Object.keys(Colors).map((name) => (
    <HopCard key={name} {...props} style={{ accent: Colors[name] }}>
      {props.children}
    </HopCard>
  ));
  return (
    <CardContainer>
      {cards}
    </CardContainer>
  )
};

storiesOf('HopCard', module)
.add('Basic', () => (<BuildAllCards>HopCard Component</BuildAllCards>))
;
