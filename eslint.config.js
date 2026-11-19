import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import pluginJs from "@eslint/js";
import daStyle from "eslint-config-dicodingacademy";

export default defineConfig([
  daStyle,
  
  {
    files: ["**/*.{js,mjs,cjs}"], languageOptions: { SourceType: `module` },
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
   
  },
]);
