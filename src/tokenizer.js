const fs = require("fs").promises;
const config = require("./config");
const figmaService = require("./figmaService");
const colorFormatter = require("./formatters/colorFormatter");
const spacingFormatter = require("./formatters/spacingFormatter");
const fontFormatter = require("./formatters/fontFormatter");
const borderFormatter = require("./formatters/borderFormatter");
const zIndexFormatter = require("./formatters/zIndexFormatter");
const tokensParser = require("./utils/tokensParser");
const FileExtension = require("./consts/fileExtension");

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

const writeJsonFileTokens = (jsonTokens) => {
  const path = `${config.tokensPath}/${config.tokensName}${FileExtension.JSON}`;
  const content = tokensParser.toJsonString(jsonTokens);
  return fs.writeFile(path, content, config.encoding);
};

const writeSassFileTokens = (jsonTokens) => {
  const path = `${config.tokensPath}/${config.tokensName}${FileExtension.SCSS}`;
  const sassTokens = tokensParser.toSASS(jsonTokens);
  return fs.writeFile(path, sassTokens, config.encoding);
};

const writeCssFileTokens = (jsonTokens) => {
  const path = `${config.tokensPath}/${config.tokensName}${FileExtension.CSS}`;
  const cssTokens = tokensParser.toCSS(jsonTokens);
  return fs.writeFile(path, cssTokens, config.encoding);
};

const sync = async () => {
  try {
    const figmaFile = await figmaService.getFile(
      config.figmaFileId,
      config.figmaFileNodeId
    );
    const jsonTokens = extractTokens(figmaFile);
    await writeJsonFileTokens(jsonTokens);
    await writeSassFileTokens(jsonTokens);
    await writeCssFileTokens(jsonTokens);
  } catch (error) {
    console.log("Failed to extract JSON tokens", error.message);
  }
};

module.exports = {
  sync,
};
