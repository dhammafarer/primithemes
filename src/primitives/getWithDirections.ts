import { getProperty, TemplateFn, Accessor, Props, Key } from "./getProperty";
import { Theme } from "../theme/defaultTheme";
import {
  complement,
  isEmpty,
  compose,
  reduce,
  either,
  map,
  prop,
  concat,
  ifElse,
  always,
  isNil,
} from "ramda";

type Direction = "right" | "left" | "top" | "bottom";
type DirectionCode = "r" | "l" | "t" | "b" | "x" | "y" | "";

// prefix each DirectionCode with property identifier, e.g. pr, ml, etc.
const prefixProp = (pref: string) =>
  compose(
    prop,
    concat(pref)
  );

// make a prefix to identify property
const getPrefix = (property: Key) => property.slice(0, 1);

// make a prefixed priority list of direction codes
const makeList = (list: DirectionCode[]) => (pref: string) =>
  map(prefixProp(pref), list);

// helper function to get a property by applying a list of getter functions
// @ts-ignore
const getEither = reduce(either, isNil);

// extract the property with direction value from props
const getDirValue = (l: DirectionCode[]) => (p: string) =>
  getEither(makeList(l)(getPrefix(p)));

// build a css property with direction
const getDirectionalProperty = (df: Theme) => (tfn: TemplateFn) => (
  fn: Accessor
) => (dp: { dir: Direction; l: DirectionCode[] }) => (key: Key) =>
  getProperty(df)(tfn)(fn)(getDirValue(dp.l)(key))(`${key}-${dp.dir}`);

// build a set of css properties for all directions
const getWithDirections = (dps: any[]) => (df: Theme) => (tfn: TemplateFn) => (
  fn: Accessor
) => (key: Key) => (props: Props) =>
  dps
    .map(d => getDirectionalProperty(df)(tfn)(fn)(d)(key)(props))
    .filter(complement(isEmpty))
    .join("\n");
export { getProperty, getWithDirections };
