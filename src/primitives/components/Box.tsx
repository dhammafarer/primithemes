import * as React from "react";
import styled from "styled-components";
import { css } from "../../theme";
import {
  getPadding,
  getMargins,
  getDisplay,
  getBackground,
  getColor,
  getWidth,
} from "../getters";

type ResponsiveString = string | string[];
type ResponsiveScale = number | number[];
type ResponsiveEither = string | number | string[] | number[];

interface SpaceProps {
  p?: ResponsiveEither;
  px?: ResponsiveEither;
  py?: ResponsiveEither;
  pr?: ResponsiveEither;
  pl?: ResponsiveEither;
  pt?: ResponsiveEither;
  pb?: ResponsiveEither;
  m?: ResponsiveEither;
  mx?: ResponsiveEither;
  my?: ResponsiveEither;
  mr?: ResponsiveEither;
  ml?: ResponsiveEither;
  mt?: ResponsiveEither;
  mb?: ResponsiveEither;
}

const space = css<SpaceProps>`
  ${props => css`
    ${getPadding(props)}
    ${getMargins(props)}
  `}
`;

const box = css<BoxProps>`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  ${space}
  ${props => css`
    ${getDisplay(props)};
    ${getBackground(props)};
    ${getColor(props)};
    ${getWidth(props)};
  `}
`;

interface BoxProps extends SpaceProps {
  is?: string;
  bg?: ResponsiveString;
  color?: ResponsiveString;
  display?: ResponsiveString;
  w?: ResponsiveEither;
}

type Props = BoxProps & React.HTMLProps<HTMLDivElement>;

const FilteredBox: React.SFC<Props> = ({
  is,
  p,
  px,
  py,
  pr,
  pl,
  pt,
  pb,
  m,
  mx,
  my,
  mr,
  ml,
  mt,
  mb,
  display,
  bg,
  w,
  color,
  ...rest
}) => {
  const C = is || "div";
  return <C {...rest} />;
};

const Box = styled(FilteredBox)`
  ${box}
`;

Box.defaultProps = {
  is: "div",
};

export {
  box,
  Box,
  FilteredBox,
  BoxProps,
  ResponsiveString,
  ResponsiveScale,
  ResponsiveEither,
};
