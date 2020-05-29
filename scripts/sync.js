const config = require("../src/config");
const figlet = require("figlet");
const chalk = require("chalk");
const tokenizer = require("../src/tokenizer");

figlet("Shortly UI", (err, data) => {
  if (err) {
    console.log("Failed to generate tokens ", err);
    return;
  }
  console.log(chalk.cyan.bold(data));
  console.log(chalk.cyan("\nGetting tokens from Figma API 😎"));

  tokenizer.sync().then(() => {
    console.log("\nAdded tokens:");
    console.log(`  - ${config.tokensName}.json`);
    console.log(chalk.cyan("\nTokens updated ✅"));
  });
});
