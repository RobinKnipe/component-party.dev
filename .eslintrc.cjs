const _require = require("esm")(module);
module.exports = _require("./.eslintrc.esm.mjs").default;
module.exports.extends = ["plugin:storybook/recommended"];
