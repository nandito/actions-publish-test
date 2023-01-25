const version = require("./package.json").version;
const [versionNumber, versionTag] = version.split("-");
console.log(versionTag);
