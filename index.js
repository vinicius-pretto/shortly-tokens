const figmaData = require("./figma-data.json");
const colorFormatter = require("./src/formatters/colorFormatter");

const colors = colorFormatter.getTokens(figmaData);

console.log(JSON.stringify(colors, null, 2));
