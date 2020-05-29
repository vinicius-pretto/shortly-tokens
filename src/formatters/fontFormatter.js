const _ = require("lodash");

const getFontFamilyTokens = (frames) => {
  const fontFrames = frames.find((frame) => frame.name === "font-family");
  const fonts = fontFrames.children.filter((frame) => frame.type === "TEXT");
  return fonts.map((font) => ({ [font.name]: font.style.fontFamily }));
};

const getFontWeightTokens = (frames) => {
  const fontFrames = frames.find((frame) => frame.name === "font-weight");
  const fonts = fontFrames.children.filter((frame) => frame.type === "TEXT");
  return fonts.map((font) => ({ [font.name]: font.style.fontWeight }));
};

const getTokens = (data) => {
  let fontTokens = {};
  const frames = data.document.children[0].children;
  const fontFamilyTokens = getFontFamilyTokens(frames);
  const fontWeightTokens = getFontWeightTokens(frames);
  const fonts = [...fontFamilyTokens, ...fontWeightTokens];

  fonts.forEach((font) => {
    const key = Object.keys(font)[0];
    _.set(fontTokens, key, font[key]);
  });
  return fontTokens;
};

module.exports = {
  getTokens,
};
