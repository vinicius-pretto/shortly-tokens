const _ = require("lodash");

const getTokens = (data) => {
  let fontTokens = {};
  const frames = data.document.children[0].children;
  const fontFrames = frames.find((frame) => frame.name === "font-family");
  const fonts = fontFrames.children.filter((frame) => frame.type === "TEXT");

  fonts
    .map((font) => ({ [font.name]: font.style.fontFamily }))
    .forEach((font) => {
      const key = Object.keys(font)[0];
      _.set(fontTokens, key, font[key]);
    });

  return fontTokens;
};

module.exports = {
  getTokens,
};
