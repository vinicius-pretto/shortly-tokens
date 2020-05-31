const path = require("path");
require("dotenv").config();

const config = {
  figmaUrl: "https://api.figma.com/v1",
  figmaToken: process.env.FIGMA_TOKEN,
  figmaFileId: process.env.FIGMA_FILE_ID,
  figmaFileNodeId: process.env.FIGMA_FILE_NODE_ID,
  tokensPath: path.resolve("dist"),
  tokensName: "index",
  encoding: "utf8",
};

module.exports = config;
