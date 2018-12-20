import { Theme } from "../theme/defaultTheme";
import { identity } from "ramda";
import { getWithDirections } from "./getWithDirections";
import { responsiveTemplate } from "./templates";
import { colors } from "../theme/colors";

const theme = { devices: ["A", "B", "C"] };
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

describe("getWithDirections", () => {
  test("outputs a set of properties with directions", () => {
    const props = { theme, pl: 1, px: 2 };
    const tfn = responsiveTemplate;
    const fn = (theme: any) => identity;
    const df = defaultTheme;
    const property = "padding";
    const dps = [
      { dir: "left", l: ["l", "x", ""] },
      { dir: "right", l: ["r", "x", ""] },
      { dir: "top", l: ["t", "y", ""] },
      { dir: "bottom", l: ["b", "y", ""] },
    ];

    const expected = "padding-left: 1;\npadding-right: 2;";

    expect(getWithDirections(dps)(df)(tfn)(fn)(property)(props)).toBe(expected);
  });

  test("works with arrays", () => {
    const props = { theme, pl: [1, 2], px: 2 };
    const tfn = responsiveTemplate;
    const fn = (theme: any) => identity;
    const df = defaultTheme;
    const property = "padding";
    const dps = [
      { dir: "left", l: ["l", "x", ""] },
      { dir: "right", l: ["r", "x", ""] },
      { dir: "top", l: ["t", "y", ""] },
      { dir: "bottom", l: ["b", "y", ""] },
    ];

    const expected =
      "A { padding-left: 1; }\nB { padding-left: 2; }\npadding-right: 2;";

    expect(getWithDirections(dps)(df)(tfn)(fn)(property)(props)).toBe(expected);
  });
});
