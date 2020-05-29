const _ = require("lodash");
const convertToRem = require("../utils/convertToRem");

const parseSpacing = (spacing) => {
  return {
    [spacing.name]: convertToRem(spacing.absoluteBoundingBox.height),
  };
};

const getTokens = (data) => {
  let spacingTokens = {};
  const frames = data.document.children[0].children;
  const spacingFrames = frames.find((frame) => frame.name === "spacing");

  spacingFrames.children
    .filter((frame) => frame.type === "RECTANGLE")
    .map(parseSpacing)
    .forEach((spacing) => {
      const key = Object.keys(spacing)[0];
      _.set(spacingTokens, key, spacing[key]);
    });
  return spacingTokens;
};

module.exports = {
  getTokens,
};
