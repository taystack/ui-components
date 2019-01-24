const purple = {
  purple0: "#61348B",
  purple1: "#A17EC1",
  purple2: "#7B51A1",
  purple3: "#4D1F76",
  purple4: "#360D5C",
};

const red = {
  red0: "#CE4A43",
  red1: "#FFA5A0",
  red2: "#F0756E",
  red3: "#AF2B24",
  red4: "#89100A",
};

const green = {
  green0: "#34A041",
  green1: "#85D48F",
  green2: "#55BA62",
  green3: "#1C8829",
  green4: "#086A14",
};

const yellow = {
  yellow0: "#CEC743",
  yellow1: "#FFFAA0",
  yellow2: "#F0E96E",
  yellow3: "#AFA824",
  yellow4: "#89830A",
};


const Colors = {
  black: "#424242",
  blue: "#2196f3",
  blueGrey: "#78909c",
  brown: "#795548",
  darkBlue: "#303f9f",
  green: "#4caf50",
  grey: "#e0e0e0",
  darkGrey: "#adadad",
  orange: "#ff5722",
  purple: "#7e57c2",
  red: "#f44336",
  yellow: "#ffca28",
};

function shade(color, percent) {
  const f = parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
  return "#" + (0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

export const DeepColors = [
  Colors.blue,
  Colors.darkBlue,
  Colors.purple,
  Colors.red,
  Colors.orange,
  Colors.yellow,
  Colors.green,
];

export const BasicColors = [
  shade(Colors.blue, 0.2),
  shade(Colors.darkBlue, 0.2),
  shade(Colors.purple, 0.2),
  shade(Colors.red, 0.2),
  shade(Colors.orange, 0.2),
  shade(Colors.yellow, 0.2),
  shade(Colors.green, 0.2),
];

export const LightColors = [
  shade(Colors.blue, 0.5),
  shade(Colors.darkBlue, 0.5),
  shade(Colors.purple, 0.5),
  shade(Colors.red, 0.5),
  shade(Colors.orange, 0.5),
  shade(Colors.yellow, 0.5),
  shade(Colors.green, 0.5),
];

export default Colors;
