// eslint.config.js
import globals from "globals";
import pluginJs from "@eslint/js";

const customGlobals = {
  ...globals.browser,   // window, document, etc.
  ...globals.jest,      // describe, test, expect, etc.
  module: "readonly",   // allow ES module keyword
};

export default [
  {
    languageOptions: {
      globals: customGlobals,
    },
  },
  pluginJs.configs.recommended,
];