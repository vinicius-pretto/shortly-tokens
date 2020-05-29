const _ = require("lodash");

const getTokens = (data) => {
  let zIndexTokens = {};
  const frames = data.document.children[0].children;
  const zIndexFrames = frames.find((frame) => frame.name === "z-index");

  zIndexFrames.children
    .filter((frame) => frame.type === "TEXT")
    .map((zIndex) => ({
      [zIndex.name]: zIndex.absoluteBoundingBox.height,
    }))
    .forEach((zIndex) => {
      const key = Object.keys(zIndex)[0];
      _.set(zIndexTokens, key, zIndex[key]);
    });

  return zIndexTokens;
};

module.exports = {
  getTokens,
};
