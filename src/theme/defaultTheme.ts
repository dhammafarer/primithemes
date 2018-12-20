import { shadows } from "./shadows";
import { colors } from "./colors";
import { unit, mapToRem } from "./utils";

type Scale = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

const sizes = mapToRem([0, 4, 8, 16, 32, 64, 128, 256, 512]);
const fontSizes = mapToRem([12, 14, 16, 20, 24, 32, 36, 48, 64, 72]);
const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const dimensions = mapToRem([16, 32, 64, 128, 256, 512, 768, 1024, 1536]);
const zIndexes = [0, 100, 200, 300, 400, 500, 600, 700, 800];
const borders = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(n => `${n}px solid`);
const radii = unit("px", [0, 2, 4, 8, 16, 32, 64, 128]);
const lineHeights = [1, 1.25, 1.5];
const letterSpacings = ["normal", "-0.05", "0.1em", "0.25"];

export const devices = [
  `@media (min-width: 0px)`,
  `@media (min-width: 600px)`,
  `@media (min-width: 768px)`,
  `@media (min-width: 1024px)`,
  `@media (min-width: 1440px)`,
];

const fonts = {
  sans: "sans",
  serif: "serif",
};

const maxWidth = "1440px";

const defaultTheme = {
  sizes,
  colors,
  borders,
  radii,
  devices,
  dimensions,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  maxWidth,
  shadows,
  zIndexes,
};

type Theme = typeof defaultTheme;

export { defaultTheme, Scale, Theme };
