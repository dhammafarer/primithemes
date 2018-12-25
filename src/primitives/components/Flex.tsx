import * as React from "react";
import { styled, css } from "../../theme";
import { box, FilteredBox, BoxProps, ResponsiveString } from "./Box";
import {
  getFlexDirection,
  getFlexWrap,
  getJustifyContent,
  getAlignItems,
} from "../getters";

interface FlexProps extends BoxProps {
  flexDirection?: ResponsiveString;
  justifyContent?: ResponsiveString;
  alignItems?: ResponsiveString;
  flexWrap?: ResponsiveString;
}

const flex = css<FlexProps>`
  display: flex;
  flex-shrink: 0;
  ${box}
  ${props => css`
    ${getFlexDirection(props)}
    ${getFlexWrap(props)}
    ${getJustifyContent(props)}
    ${getAlignItems(props)}
  `}
`;

type Props = FlexProps & React.HTMLProps<HTMLDivElement>;

const FilteredFlex: React.SFC<Props> = ({
  flexDirection,
  justifyContent,
  alignItems,
  flexWrap,
  ...rest
}) => <FilteredBox {...rest} />;

const Flex = styled(FilteredFlex)`
  ${flex}
`;

export { Flex, FilteredFlex, flex, FlexProps };
