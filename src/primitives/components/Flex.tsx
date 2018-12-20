import * as React from "react";
import { styled, css } from "../../theme";
import { box, Box, BoxProps, ResponsiveString } from "./Box";
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

const Flex = styled(
  ({ flexDirection, justifyContent, alignItems, flexWrap, ...rest }) => (
    <Box {...rest} />
  )
)<FlexProps & React.HTMLProps<HTMLDivElement>>`
  ${flex}
`;

export { Flex, flex, FlexProps };
