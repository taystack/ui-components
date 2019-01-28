import { ModIndex } from "@taystack/js-helpers";
import {
  DeepColors,
  BasicColors,
  LightColors
} from "./Colors";


const ColorType = (index) => {
  if (index === 1) return DeepColors;
  if (index === 2) return BasicColors;
  if (index === 3) return LightColors;
};

export default {
  beforeUpdate: function(chart) {
    chart.config.data.datasets.forEach((dataset) => {
      const backgroundColor = [];
      for (var i = 0; i < dataset.data.length; i++) {
        backgroundColor.push(ModIndex(BasicColors, i));
      }
      dataset.backgroundColor = backgroundColor;
    });
  }
};
