const { version } = require("../package.json");
//const findora = require("./tokens/findorajson");
const goerli = require("./tokens/findora.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "OneverseSwap Default",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://s3.us-west-2.amazonaws.com/farmersonly.fi/FoxSwapLogos/grav.png",
    keywords: ["oneverseswap", "default"],
    tokens: [...goerli]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
