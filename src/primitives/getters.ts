import { getProperty } from "./getProperty";
import { getWithDirections } from "./getWithDirections";
import { fns } from "./accessors";
import { prop, is, gte, ifElse, identity } from "ramda";
import { responsiveTemplate } from "./templates";
import { defaultTheme } from "../theme/defaultTheme";

const directionsMap = [
  { dir: "left", l: ["l", "x", ""] },
  { dir: "right", l: ["r", "x", ""] },
  { dir: "top", l: ["t", "y", ""] },
  { dir: "bottom", l: ["b", "y", ""] },
];

const getResponsive = getProperty(defaultTheme)(responsiveTemplate);
const getLiteral = getResponsive(() => identity);

const numOrLiteral = (f: any) => (theme: any) =>
  ifElse(is(Number), f(theme), identity);

const parseSpace = numOrLiteral(fns.space);
const getResponsiveSpace = getResponsive(parseSpace);

const getDirectionalProperty = getWithDirections(directionsMap)(defaultTheme)(
  responsiveTemplate
);

// directional
export const getPadding = getDirectionalProperty(parseSpace)("padding");
export const getMargins = getDirectionalProperty(parseSpace)("margin");
export const getBorder = getDirectionalProperty(fns.border)("border");

// width
const handleLength = () => ifElse(gte(1), x => `${x * 100}%`, x => `${x}px`);
const parseLength = numOrLiteral(handleLength);
export const getWidth = getResponsive(parseLength)(prop("width"))("width");

// colors
const fromColor = getResponsive(fns.color);
export const getColor = fromColor(prop("color"))("color");
export const getBackground = fromColor(prop("bg"))("background");
export const getBorderColor = fromColor(prop("borderColor"))("border-color");

//misc
export const getDisplay = getLiteral(prop("display"))("display");
export const getBoxShadow = getResponsive(fns.shadow)(prop("shadow"))(
  "box-shadow"
);
export const getOpacity = getLiteral(prop("opacity"))("opacity");
export const getBorderRadius = getResponsive(fns.radius)(prop("radius"))(
  "border-radius"
);

// text
export const getFontSize = getResponsive(fns.fontSize)(prop("fontSize"))(
  "font-size"
);
export const getFontWeight = getResponsive(fns.fontWeight)(prop("fontWeight"))(
  "font-weight"
);
export const getFontFamily = getResponsive(fns.fontFamily)(prop("fontFamily"))(
  "font-family"
);
export const getLineHeight = getResponsive(fns.lineHeight)(prop("lineHeight"))(
  "line-height"
);
export const getLetterSpacing = getResponsive(fns.letterSpacing)(
  prop("letterSpacing")
)("letter-spacing");
export const getTextTransform = getLiteral(prop("textTransform"))(
  "text-transform"
);
export const getTextAlign = getLiteral(prop("textAlign"))("text-align");

//flex
export const getFlexWrap = getLiteral(prop("flexWrap"))("flex-wrap");
export const getFlexDirection = getLiteral(prop("flexDirection"))(
  "flex-direction"
);
export const getJustifyContent = getLiteral(prop("justifyContent"))(
  "justify-content"
);
export const getAlignItems = getLiteral(prop("alignItems"))("align-items");

// grid
export const getTemplateColumns = getLiteral(prop("tmpCols"))(
  "grid-template-columns"
);
export const getTemplateRows = getLiteral(prop("tmpRows"))(
  "grid-template-rows"
);
export const getTemplateAreas = getLiteral(prop("tmpAreas"))(
  "grid-template-areas"
);
export const getTemplate = getLiteral(prop("tmp"))("grid-template");
export const getColGap = getResponsiveSpace(prop("colGap"))("grid-column-gap");
export const getRowGap = getResponsiveSpace(prop("rowGap"))("grid-row-gap");
export const getGap = getResponsiveSpace(prop("gap"))("grid-gap");
export const getGridJustifyContent = getLiteral(prop("justifyContent"))(
  "justify-content"
);
export const getGridAlignContent = getLiteral(prop("alignContent"))(
  "align-content"
);
export const getGridPlaceContent = getLiteral(prop("placeContent"))(
  "place-content"
);
export const getGridJustifyItems = getLiteral(prop("justifyItems"))(
  "justify-items"
);
export const getGridAlignItems = getLiteral(prop("alignItems"))("alignItems");
export const getGridPlaceItems = getLiteral(prop("placeItems"))("placeItems");
export const getAutoCols = getLiteral(prop("autoCols"))("grid-auto-columns");
export const getAutoRows = getLiteral(prop("autoRows"))("grid-auto-rows");
export const getAutoFlow = getLiteral(prop("autoFlow"))("grid-auto-flow");
export const getGrid = getLiteral(prop("grid"))("grid");
