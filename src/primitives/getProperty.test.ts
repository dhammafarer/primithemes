import { always, identity, prop } from "ramda";
import { getProperty, TemplateFn } from "./getProperty";
import { responsiveTemplate } from "./templates";
import { Theme } from "../theme/defaultTheme";
import { colors } from "../theme/colors";

const devices = ["A", "B", "C"];
const theme = { devices };
const defaultTheme: Theme = {
  sizes: ["1"],
  colors,
  borders: ["1"],
  radii: ["1"],
  devices: ["A", "B"],
  dimensions: ["1"],
  fonts: { sans: "x", serif: "x" },
  fontSizes: ["1"],
  fontWeights: [1],
  lineHeights: [1],
  letterSpacings: ["1"],
  maxWidth: "1",
  shadows: ["1"],
  zIndexes: [1],
};

describe("getProperty", () => {
  test("outputs empty string when the property isn't found", () => {
    const props = { theme };
    const tfn = responsiveTemplate;
    const df = defaultTheme;
    const fn = () => identity;
    const getter = prop("color");
    const property = "color";

    const expected = "";

    expect(getProperty(df)(tfn)(fn)(getter)(property)(props)).toBe(expected);
  });

  test("works for properties with literal values", () => {
    const tfn = responsiveTemplate;
    const props = { theme, color: "red" };
    const fn = (theme: any) => identity;
    const df = defaultTheme;
    const getter = prop("color");
    const property = "color";

    const expected = "color: red;";

    expect(getProperty(df)(tfn)(fn)(getter)(property)(props)).toBe(expected);
  });

  test("works with a custom function", () => {
    const tfn = responsiveTemplate;
    const df = defaultTheme;
    const props = { theme, color: "red" };
    const fn = (theme: any) => always("pink");
    const getter = prop("color");
    const property = "color";

    const expected = "color: pink;";

    expect(getProperty(df)(tfn)(fn)(getter)(property)(props)).toBe(expected);
  });

  test("works with arrays", () => {
    const theme = { devices: ["A", "B", "C"] };
    const props = { theme, width: [1, 2, 3] };
    const template = responsiveTemplate;
    const fn = (theme: any) => identity;
    const df = defaultTheme;
    const getter = prop("width");
    const property = "width";

    const expected = `A { width: 1; }\nB { width: 2; }\nC { width: 3; }`;

    expect(getProperty(df)(template)(fn)(getter)(property)(props)).toBe(
      expected
    );
  });

  test("works without a theme", () => {
    const props = { width: 0 };
    const tfn = responsiveTemplate;
    const df = defaultTheme;
    const fn = (theme: any) => (v: any) => theme.sizes[v];
    const getter = prop("width");
    const property = "width";

    const expected = "width: 1;";

    expect(getProperty(df)(tfn)(fn)(getter)(property)(props)).toBe(expected);
  });
});
