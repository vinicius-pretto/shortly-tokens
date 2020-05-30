const _ = require("lodash");

const NEW_LINE = "\n";
const SASS_PREFIX = "$";
const CSS_PREFIX = "  --";

const toSASS = (jsonTokens) => {
  return _.map(
    jsonTokens,
    (value, key) => `${SASS_PREFIX}${key}: ${value};`
  ).join(NEW_LINE);
};

const toCSS = (jsonTokens) => {
  const tokens = _.map(
    jsonTokens,
    (value, key) => `${CSS_PREFIX}${key}: ${value};`
  ).join(NEW_LINE);
  return `:root {${NEW_LINE}${tokens}${NEW_LINE}}`;
};

const toJsonString = (jsonTokens) => {
  return JSON.stringify(jsonTokens, null, 2);
};

module.exports = {
  toSASS,
  toCSS,
  toJsonString,
};
