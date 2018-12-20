import * as React from "react";
import { css, styled } from "../../theme";
import { Box, box, BoxProps, ResponsiveScale, ResponsiveString } from "./Box";
import {
  getFontSize,
  getFontWeight,
  getFontFamily,
  getLineHeight,
  getLetterSpacing,
  getTextTransform,
  getTextAlign,
} from "../getters";

const text = css<TextProps>`
  font-family: ${props => props.theme.fonts && props.theme.fonts.sans};
  ${box}
  ${props => css`
    ${getFontSize(props)}
    ${getFontWeight(props)}
    ${getFontFamily(props)}
    ${getLineHeight(props)}
    ${getLetterSpacing(props)}
    ${getTextTransform(props)}
    ${getTextAlign(props)}
  `}
`;

interface TextProps extends BoxProps {
  fontFamily?: string;
  fontSize?: ResponsiveScale;
  fontWeight?: ResponsiveScale;
  textTransform?: ResponsiveString;
  textAlign?: ResponsiveString;
  lineHeight?: ResponsiveString;
  letterSpacing?: ResponsiveString;
}

const Text = styled(
  ({
    fontFamily,
    fontSize,
    fontWeight,
    textTransform,
    textAlign,
    lineHeight,
    letterSpacing,
    ...rest
  }) => <Box {...rest} />
)<TextProps & React.HTMLProps<HTMLDivElement>>`
  ${text}
`;

export { Text, TextProps };
