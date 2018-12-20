import { Theme } from "../theme/defaultTheme";
import { propOr, pathOr, compose, map, ifElse, always, isNil } from "ramda";

type Key = string;
type Value = any;
type Props = any;
type PropValue = any;
type PropReader = (p: Props) => PropValue;
type Accessor = (theme: any) => (val: PropValue) => Value;
type Devices = string[];
type TemplateFn = (k: Key, val: PropValue, devices: Devices) => string;

const guard = (fn: any) => ifElse(isNil, always(""), fn);
const guardTheme = (df: Theme) => propOr(df, "theme");
const guardDevices = (df: Theme) => pathOr(df, ["theme", "devices"]);
const processVal = (fn: any) => ifElse(Array.isArray, map(fn), fn);
const buildTemplate = (tfn: TemplateFn, key: Key, devices: Devices) => (
  val: any
) => tfn(key, val, devices);

export const getProperty = (df: Theme) => (tfn: TemplateFn) => (
  fn: Accessor
) => (reader: PropReader) => (key: Key) => (props: Props) =>
  compose(
    guard(
      compose(
        buildTemplate(tfn, key, guardDevices(df)(props)),
        processVal(fn(guardTheme(df)(props)))
      )
    ),
    reader
  )(props);

export { Accessor, Key, Props, TemplateFn };
