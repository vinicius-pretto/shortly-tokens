const _ = require("lodash");
const tokens = require("../../tokens/shortly-tokens.json");

const parseJsonToSass = () => {
  return _.map(tokens, (value, key) => `$${key}: ${value};`).join("\n");
};

module.exports = parseJsonToSass;
