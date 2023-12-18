/* eslint-env node */
module.exports = {
    root: true,

    extends: ["eslint:recommended"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    env: {
        "node": true,
    },
    "rules": {
        "no-console": "off"
    }
};