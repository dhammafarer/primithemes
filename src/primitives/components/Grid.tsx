import * as React from "react";
import { styled, css } from "../../theme";
import {
  box,
  Box,
  BoxProps,
  ResponsiveString,
  ResponsiveScale,
  ResponsiveEither,
} from "./Box";
import {
  getTemplateColumns,
  getTemplateRows,
  getTemplateAreas,
  getTemplate,
  getColGap,
  getRowGap,
  getGap,
  getGridJustifyContent,
  getGridAlignContent,
  getGridPlaceContent,
  getGridJustifyItems,
  getGridAlignItems,
  getGridPlaceItems,
  getAutoCols,
  getAutoRows,
  getAutoFlow,
  getGrid,
} from "../getters";

interface GridProps extends BoxProps {
  display?: "grid" | "inline-grid";
  tmpCols?: ResponsiveString;
  tmpRows?: ResponsiveString;
  tmpAreas?: ResponsiveString;
  tmp?: ResponsiveString;
  colGap?: ResponsiveEither;
  rowGap?: ResponsiveEither;
  gap?: ResponsiveEither;
  justifyContent?: ResponsiveString;
  alignContent?: ResponsiveString;
  placeContent?: ResponsiveString;
  alignItems?: ResponsiveString;
  justifyItems?: ResponsiveString;
  placeItems?: ResponsiveString;
  autoCols?: ResponsiveString;
  autoRows?: ResponsiveString;
  autoFlow?: ResponsiveString;
  grid?: ResponsiveString;
}

const grid = css<GridProps>`
  display: grid;
  ${box}
  ${props => css`
    ${getTemplateColumns(props)}
    ${getTemplateRows(props)}
    ${getTemplateAreas(props)}
    ${getTemplate(props)}
    ${getColGap(props)}
    ${getRowGap(props)}
    ${getGap(props)}
    ${getGridJustifyContent(props)}
    ${getGridAlignContent(props)}
    ${getGridPlaceContent(props)}
    ${getGridJustifyItems(props)}
    ${getGridAlignItems(props)}
    ${getGridPlaceItems(props)}
    ${getAutoCols(props)}
    ${getAutoRows(props)}
    ${getAutoFlow(props)}
    ${getGrid(props)}
  `}
`;

const Grid = styled(
  ({
    tmpCols,
    tmpRows,
    tmpAreas,
    tmp,
    colGap,
    rowGap,
    gap,
    justifyContent,
    alignContent,
    placeContent,
    alignItems,
    justifyItems,
    placeItems,
    autoCols,
    autoRows,
    autoFlow,
    grid,
    ...rest
  }) => <Box {...rest} />
)<GridProps & React.HTMLProps<HTMLDivElement>>`
  ${grid}
`;

export { Grid, grid, GridProps };
