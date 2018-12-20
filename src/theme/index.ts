import baseStyled, {
  css as baseCss,
  ThemedCssFunction,
  ThemedStyledInterface,
} from "styled-components";

import { defaultTheme, Theme, Scale } from "./defaultTheme";
import { makeTheme } from "./makeTheme";

const styled = baseStyled as ThemedStyledInterface<Theme>;
const css = baseCss as ThemedCssFunction<Theme>;

export { styled, css, defaultTheme, Theme, makeTheme, Scale };
