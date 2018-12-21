import { Theme } from "../theme/defaultTheme";
import {
  prop,
  identity,
  pathOr,
  compose,
  map,
  ifElse,
  either,
  always,
  isNil,
  isEmpty,
} from "ramda";

type Key = string;
type Value = any;
type Props = any;
type PropValue = any;
type PropReader = (p: Props) => PropValue;
type Accessor = (theme: any) => (val: PropValue) => Value;
type Devices = string[];
type TemplateFn = (k: Key, val: PropValue, devices: Devices) => string;

const guard = (fn: any) => ifElse(isNil, always(""), fn);

const guardTheme = (df: Theme, props: Props) => {
  const res = ifElse(either(isNil, isEmpty), always(df), identity)(
    prop("theme", props)
  );
  console.log("res:", res);
  return res;
};
const guardDevices = (df: Theme, props: Props) =>
  pathOr(df.devices, ["theme", "devices"], props);

const applyFn = (fn: any) => ifElse(Array.isArray, map(fn), fn);
const buildTemplate = (tfn: TemplateFn, key: Key, devices: Devices) => (
  val: any
) => tfn(key, val, devices);

const processVal = (
  df: Theme,
  tfn: TemplateFn,
  fn: Accessor,
  key: Key,
  props: Props
) =>
  compose(
    buildTemplate(tfn, key, guardDevices(df, props)),
    applyFn(fn(guardTheme(df, props)))
  );

export const getProperty = (df: Theme) => (tfn: TemplateFn) => (
  fn: Accessor
) => (reader: PropReader) => (key: Key) => (props: Props) =>
  compose(
    guard(processVal(df, tfn, fn, key, props)),
    reader
  )(props);

export { Accessor, Key, Props, TemplateFn };
