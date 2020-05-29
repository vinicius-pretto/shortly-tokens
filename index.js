const figmaData = require("./figma-data.json");
const colorFormatter = require("./src/formatters/colorFormatter");
const spacingFormatter = require("./src/formatters/spacingFormatter");

const colorTokens = colorFormatter.getTokens(figmaData);
const spacingTokens = spacingFormatter.getTokens(figmaData);
const tokens = {
  ...colorTokens,
  ...spacingTokens,
};
console.log(JSON.stringify(tokens, null, 2));
