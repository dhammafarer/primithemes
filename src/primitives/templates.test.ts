import { template, responsiveTemplate } from "./templates";

const devices = ["A", "B", "C"];

describe("template", () => {
  test("returns empty string for empty string value", () => {
    const key = "padding";
    const val = "";
    const expected = "";

    expect(template(key, val, devices)).toBe(expected);
  });

  test("works with an identity function", () => {
    const key = "padding";
    const val = 1;
    const expected = "padding: 1;";

    expect(template(key, val, devices)).toBe(expected);
  });
});

describe("responsiveTemplate", () => {
  test("returns empty string for empty string value", () => {
    const key = "padding";
    const val = "";
    const expected = "";

    expect(responsiveTemplate(key, val, devices)).toBe(expected);
  });

  test("works with a literal value", () => {
    const key = "padding";
    const val = 1;
    const expected = "padding: 1;";

    expect(responsiveTemplate(key, val, devices)).toBe(expected);
  });

  test("returns empty string for an empty array", () => {
    const key = "padding";
    const val: string[] = [];
    const expected = "";

    expect(responsiveTemplate(key, val, devices)).toBe(expected);
  });

  test("works with arrays", () => {
    const key = "padding";
    const val = [1, 2];
    const expected = "A { padding: 1; }\nB { padding: 2; }";

    expect(responsiveTemplate(key, val, devices)).toBe(expected);
  });
});
