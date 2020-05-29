const axios = require("axios");
const config = require("./config");

const httpClient = axios.create({
  baseURL: config.figmaUrl,
  headers: {
    "X-Figma-Token": config.figmaToken,
  },
});

const getFile = (fileId) => {
  return httpClient
    .get(`${config.figmaUrl}/files/${fileId}`)
    .then((response) => response.data);
};

module.exports = {
  getFile,
};
