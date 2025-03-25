import { defineConfig } from "@pandacss/dev";
import * as radixColors from "@radix-ui/colors";

// Process Radix colors to match Panda CSS token structure
const processRadixColors = () => {
  const colors: Record<string, Record<string, { value: string }>> = {};

  Object.entries(radixColors).forEach(([colorName, colorScale]) => {
    colors[colorName] = {};
    Object.entries(colorScale).forEach(([shade, value]) => {
      colors[colorName][shade] = { value };
    });
  });

  return colors;
};

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  minify: true,
  // hash: true, // Suggestion try to enable it when building to prod
  importMap: "$", // https://panda-css.com/docs/overview/faq#hmr-does-not-work-when-i-use-tsconfig-paths

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: processRadixColors(),
      },
    },
  },

  // Enable jsx framework
  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
