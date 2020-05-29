const figmaData = require("./figma-data.json");
const colorFormatter = require("./src/formatters/colorFormatter");
const spacingFormatter = require("./src/formatters/spacingFormatter");
const fontFormatter = require("./src/formatters/fontFormatter");
const borderFormatter = require("./src/formatters/borderFormatter");
const zIndexFormatter = require("./src/formatters/zIndexFormatter");

const colorTokens = colorFormatter.getTokens(figmaData);
const spacingTokens = spacingFormatter.getTokens(figmaData);
const fontTokens = fontFormatter.getTokens(figmaData);
const borderTokens = borderFormatter.getTokens(figmaData);
const zIndexTokens = zIndexFormatter.getTokens(figmaData);
const tokens = {
  ...colorTokens,
  ...spacingTokens,
  ...fontTokens,
  ...borderTokens,
  ...zIndexTokens,
};
console.log(JSON.stringify(tokens, null, 2));
