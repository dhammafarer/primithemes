import * as React from "react";
import { css, styled } from "../../theme";
import {
  FilteredBox,
  box,
  BoxProps,
  ResponsiveScale,
  ResponsiveString,
} from "./Box";
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
  lineHeight?: ResponsiveScale;
  letterSpacing?: ResponsiveScale;
}

type Props = TextProps & React.HTMLProps<HTMLDivElement>;

const FilteredText: React.SFC<Props> = ({
  fontFamily,
  fontSize,
  fontWeight,
  textTransform,
  textAlign,
  lineHeight,
  letterSpacing,
  ...rest
}) => <FilteredBox {...rest} />;

const Text = styled(FilteredText)`
  ${text}
`;

Text.defaultProps = {
  is: "p",
};

export { Text, TextProps };
