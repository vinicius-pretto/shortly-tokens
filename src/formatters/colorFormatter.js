const _ = require("lodash");

const parseFloatToInt = (float) => {
  return Math.ceil(float * 255);
};

const parseIntToHex = (int) => {
  const hex = Number(int).toString(16);
  if (hex.length < 2) {
    return `0${hex}`;
  }
  return hex;
};

const parseColorToHex = (name, color) => {
  const redHex = parseIntToHex(parseFloatToInt(color.r));
  const greenHex = parseIntToHex(parseFloatToInt(color.g));
  const blueHex = parseIntToHex(parseFloatToInt(color.b));
  const hexColor = `#${redHex}${greenHex}${blueHex}`;
  return {
    [name]: hexColor,
  };
};

const getTokens = (data) => {
  let colors = {};
  const frames = data.document.children[0].children;
  const colorFrames = _.find(frames, "name", "colors");

  colorFrames.children
    .filter((color) => color.type === "RECTANGLE")
    .map((color) => parseColorToHex(color.name, color.fills[0].color))
    .forEach((color) => {
      const key = Object.keys(color)[0];
      _.set(colors, key, color[key]);
    });

  return colors;
};

module.exports = {
  getTokens,
};
