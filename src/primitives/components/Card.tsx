import * as React from "react";
import { styled, css, Scale } from "../../theme";
import { ResponsiveScale, ResponsiveString } from "./Box";
import { Flex, FilteredFlex, flex, FlexProps } from "./Flex";
import {
  getOpacity,
  getBoxShadow,
  getBorder,
  getBorderRadius,
  getBorderColor,
} from "../getters";

interface CardProps extends FlexProps {
  opacity?: number | number[];
  shadow?: ResponsiveScale;
  radius?: ResponsiveScale;
  b?: ResponsiveScale;
  br?: ResponsiveScale;
  bl?: ResponsiveScale;
  bt?: ResponsiveScale;
  bb?: ResponsiveScale;
  bx?: ResponsiveScale;
  by?: ResponsiveScale;
  borderColor?: ResponsiveString;
}

const card = css<CardProps>`
  overflow: hidden;
  flex-direction: column;
  ${flex}
  ${props => css`
    ${getOpacity(props)}
    ${getBoxShadow(props)}
    ${getBorder(props)}
    ${getBorderColor(props)}
    ${getBorderRadius(props)}
  `}
`;

type Props = CardProps & React.HTMLProps<HTMLDivElement>;

const FilteredCard: React.SFC<Props> = ({
  opacity,
  shadow,
  b,
  bx,
  by,
  bt,
  bb,
  br,
  bl,
  borderColor,
  radius,
  ...rest
}) => <FilteredFlex {...rest} />;

const Card = styled(FilteredCard)`
  ${card}
`;

export { Card, CardProps };
