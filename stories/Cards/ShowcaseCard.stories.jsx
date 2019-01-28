import React from "react";
import { storiesOf } from "@storybook/react";
import ShowcaseCard from "../../src/Cards/ShowcaseCard";
import ShowcaseCardContainer from "../../src/Cards/ShowcaseCardContainer";
import Input from "../../src/Inputs/Input";
import Font from "../../src/Styles/Font";
import {
  moon,
  adidas,
  triumph,
  niel,
  pow,
  spiderman,
  grass,
  google,
  link,
  yarn,
  spiderCat,
} from "../CardData";

const Badges = ({ name, title }) => {
  const style = {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 20,
    width: "100%",
  };
  const codeCov = {
    href: `https://codecov.io/gh/taystack/${name}`,
    src: `https://codecov.io/gh/taystack/${name}/branch/master/graph/badge.svg`,
  };
  const travisCi = {
    href: `https://travis-ci.org/taystack/${name}`,
    src: `https://travis-ci.org/taystack/${name}.svg?branch=master`,
  };
  return (
    <div style={style}>
      <a
        href={codeCov.href}
        alt="codecov">
        <img
          src={codeCov.src}
          alt="codecov"/>
        </a>
      <a
        href={travisCi.href}
        alt="travis-ci">
        <img
          src={travisCi.src}
          alt="travis-ci"/>
      </a>
    </div>
  );
}

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

class ShowcaseEditor extends React.Component {
  constructor(props) {
    super(props);

    // const r = document.getElementById("root");

    this.state = {
      imgSrc: "",
      frontImgSrc: yarn.img.src,
      cardBackground: "purple",
      gradientBackground: "white",
    };

    this.onChange = this.onChange.bind(this);

    this.style = {
      marginTop: "1em",
    }
  }

  onChange(name) {
    return (event) => {
      this.setState({ [name]: event.target.value });
    }
  }

  render() {
    return (
      <div style={{ display: "flex", fontFamily: Font.family }}>
        <div>
          <ShowcaseCard
            gradientBackground={this.state.gradientBackground}
            cardBackground={this.state.cardBackground}
            img={{ src: this.state.imgSrc }}
            frontImg={{ src: this.state.frontImgSrc }}
          />
        </div>
        <div style={{
          marginLeft: 100,
        }}>
          <div style={{ padding: "1em 0" }}>Copy image links and paste them here</div>
          <Input
            style={this.style}
            label="Props.img.src"
            onChange={this.onChange("imgSrc")}
            defaultValue={this.state.imgSrc}
          />
          <Input
            style={this.style}
            label="Props.frontImg.src"
            onChange={this.onChange("frontImgSrc")}
            defaultValue={this.state.frontImgSrc}
          />
          <Input
            style={this.style}
            label="Props.cardBackground"
            onChange={this.onChange("cardBackground")}
            defaultValue={this.state.cardBackground}
          />
          <Input
            style={this.style}
            label="Props.gradientBackground"
            onChange={this.onChange("gradientBackground")}
            defaultValue={this.state.gradientBackground}
          />
        </div>
      </div>
    );
  }
}

storiesOf("ShowcaseCard", module)
.add("{img, frontImg}", () => {
  return (
    <BuildShowcase column>
      <BuildShowcase row sources={[ pow, spiderman, link ]} />
      <BuildShowcase row sources={[ adidas, triumph ]} />
      <BuildShowcase row sources={[ moon, niel ]} />
    </BuildShowcase>
  );
})
.add("{img, children}", () => {
  const style = {
    marginTop: 20,
  };
  return (
    <ShowcaseCardContainer row>
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

      <ShowcaseCard
        img={spiderCat.img}
        frontImg={spiderCat.frontImg}
      >
        <h3 style={{color: "#fff", margin:0}}>GitHub</h3>
        <Badges name="ui-components" title="@taystack/react-ui" />
        <Badges name="js-helpers" title="@taystack/js-helpers" />
        <Badges name="js-counter" title="@taystack/js-counter" />
      </ShowcaseCard>
    </ShowcaseCardContainer>
  );
})
.add("<ShowcaseCard />", () => (
  <ShowcaseEditor />
))
;
