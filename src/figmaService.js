const axios = require("axios");
const config = require("./config");

const httpClient = axios.create({
  baseURL: config.figmaUrl,
  headers: {
    "X-Figma-Token": config.figmaToken,
  },
});

const getFile = (fileId, nodeId) => {
  return httpClient
    .get(`${config.figmaUrl}/files/${fileId}?ids=${nodeId}`)
    .then((response) => response.data);
};

module.exports = {
  getFile,
};
