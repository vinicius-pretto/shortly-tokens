const fs = require("fs").promises;
const config = require("./config");
const figmaService = require("./figmaService");
const colorFormatter = require("./formatters/colorFormatter");
const spacingFormatter = require("./formatters/spacingFormatter");
const fontFormatter = require("./formatters/fontFormatter");
const borderFormatter = require("./formatters/borderFormatter");
const zIndexFormatter = require("./formatters/zIndexFormatter");

const extractTokens = (figmaFile) => {
  const colorTokens = colorFormatter.getTokens(figmaFile);
  const spacingTokens = spacingFormatter.getTokens(figmaFile);
  const fontTokens = fontFormatter.getTokens(figmaFile);
  const borderTokens = borderFormatter.getTokens(figmaFile);
  const zIndexTokens = zIndexFormatter.getTokens(figmaFile);
  const tokens = {
    ...colorTokens,
    ...spacingTokens,
    ...fontTokens,
    ...borderTokens,
    ...zIndexTokens,
  };
  return tokens;
};

const writeJsonTokens = (jsonTokens) => {
  const path = `${config.tokensPath}/${config.tokensName}.json`;
  const content = JSON.stringify(jsonTokens, null, 2);
  return fs.writeFile(path, content, config.encoding);
};

const sync = async () => {
  try {
    const figmaFile = await figmaService.getFile(config.figmaFileId);
    const jsonTokens = extractTokens(figmaFile);
    await writeJsonTokens(jsonTokens);
  } catch (error) {
    console.log("Failed to extract JSON tokens", error.message);
  }
};

module.exports = {
  sync,
};
