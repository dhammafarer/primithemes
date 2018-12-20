import { Theme } from "../theme";
import { pathOr } from "ramda";

type Prop = keyof Theme;

const guard = pathOr("");

const fromThemeScaled = (prop: Prop) => (theme: Theme) => (val: any) =>
  guard([prop, val])(theme);

const space = fromThemeScaled("sizes");
const fontSize = fromThemeScaled("fontSizes");
const fontWeight = fromThemeScaled("fontWeights");
const dimension = fromThemeScaled("dimensions");
const shadow = fromThemeScaled("shadows");
const zIndex = fromThemeScaled("zIndexes");
const border = fromThemeScaled("borders");
const radius = fromThemeScaled("radii");
const fontFamily = fromThemeScaled("fonts");
const lineHeight = fromThemeScaled("lineHeights");
const letterSpacing = fromThemeScaled("letterSpacings");

const color = (theme: Theme) => (s: string) =>
  pathOr(s, s.split("."), theme.colors);

export const fns = {
  color,
  border,
  radius,
  dimension,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  letterSpacing,
  space,
  shadow,
  zIndex,
};
