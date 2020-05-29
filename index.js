const figmaData = require("./figma-data.json");
const colorFormatter = require("./src/formatters/colorFormatter");
const spacingFormatter = require("./src/formatters/spacingFormatter");
const fontFormatter = require("./src/formatters/fontFormatter");

const colorTokens = colorFormatter.getTokens(figmaData);
const spacingTokens = spacingFormatter.getTokens(figmaData);
const fontTokens = fontFormatter.getTokens(figmaData);
const tokens = {
  ...colorTokens,
  ...spacingTokens,
  ...fontTokens,
};
console.log(JSON.stringify(tokens, null, 2));
