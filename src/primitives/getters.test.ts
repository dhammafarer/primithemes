import { getWidth, getColor } from "./getters";

import { defaultTheme } from "../theme/defaultTheme";
import { responsiveTemplate } from "./templates";
import { prop } from "ramda";

const devices = ["A", "B", "C"];
const colors = { white: { main: "#fff" } };
const theme = { colors, devices };

describe("getWidth", () => {
  test("parses fractions as percentages", () => {
    const props = { theme, w: 1 / 2 };
    const expected = "width: 50%;";

    expect(getWidth(props)).toBe(expected);
  });
  test("parses 1 as 100%", () => {
    const props = { theme, w: 1 };
    const expected = "width: 100%;";

    expect(getWidth(props)).toBe(expected);
  });

  test("parses numbers greater than one as px values", () => {
    const props = { theme, w: 100 };
    const expected = "width: 100px;";

    expect(getWidth(props)).toBe(expected);
  });
});

describe("getColor", () => {
  test("works with simple strings", () => {
    const props = { theme, w: 1, color: "red" };
    const expected = "color: red;";

    expect(getColor(props)).toBe(expected);
  });

  test("works with complex strings", () => {
    const props = { theme, w: 1, color: "white.main" };
    const expected = "color: #fff;";

    expect(getColor(props)).toBe(expected);
  });
});
