const _ = require("lodash");
const convertToRem = require("../utils/convertToRem");

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

const getFontSizeTokens = (frames) => {
  const fontFrames = frames.find((frame) => frame.name === "font-size");
  const fonts = fontFrames.children.filter((frame) => frame.type === "TEXT");
  return fonts.map((font) => ({
    [font.name]: convertToRem(font.style.fontSize),
  }));
};

const getTokens = (data) => {
  let fontTokens = {};
  const frames = data.document.children[0].children;
  const fontFamilyTokens = getFontFamilyTokens(frames);
  const fontWeightTokens = getFontWeightTokens(frames);
  const fontSizeTokens = getFontSizeTokens(frames);
  const fonts = [...fontFamilyTokens, ...fontWeightTokens, ...fontSizeTokens];

  fonts.forEach((font) => {
    const key = Object.keys(font)[0];
    _.set(fontTokens, key, font[key]);
  });
  return fontTokens;
};

module.exports = {
  getTokens,
};
