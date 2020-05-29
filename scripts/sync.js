const tokenizer = require("../src/tokenizer");

console.log("Getting tokens from Figma API...");

tokenizer.sync().then(() => {
  console.log("Tokens are updated!");
});
