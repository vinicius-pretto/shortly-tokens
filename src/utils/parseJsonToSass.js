const _ = require("lodash");

const parseJsonToSass = (jsonTokens) => {
  return _.map(jsonTokens, (value, key) => `$${key}: ${value};`).join("\n");
};

module.exports = parseJsonToSass;
