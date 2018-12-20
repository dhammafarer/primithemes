import { isEmpty } from "ramda";
import { TemplateFn } from "./getProperty";

export const template: TemplateFn = (key, val, devices) =>
  isEmpty(val) ? "" : `${key}: ${val};`;

export const responsiveTemplate: TemplateFn = (key, val, devices) => {
  if (Array.isArray(val)) {
    return val.map((v, i) => `${devices[i]} { ${key}: ${v}; }`).join("\n");
  } else {
    return template(key, val, devices);
  }
};
