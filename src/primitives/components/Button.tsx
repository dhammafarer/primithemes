import * as React from "react";
import { css, styled, Scale } from "../../theme";
import { box, BoxProps, ResponsiveScale, ResponsiveString } from "./Box";
import {
  getBoxShadow,
  getBorder,
  getBorderRadius,
  getBorderColor,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getLineHeight,
  getLetterSpacing,
  getTextTransform,
  getTextAlign,
} from "../getters";

interface ButtonProps extends BoxProps {
  shadow?: ResponsiveScale;
  radius?: ResponsiveScale;
  b?: ResponsiveScale;
  bx?: ResponsiveScale;
  by?: ResponsiveScale;
  bt?: ResponsiveScale;
  bb?: ResponsiveScale;
  br?: ResponsiveScale;
  bl?: ResponsiveScale;
  borderColor?: ResponsiveString;
  fontFamily?: string;
  fontSize?: ResponsiveScale;
  fontWeight?: ResponsiveScale;
  textTransform?: ResponsiveString;
  textAlign?: ResponsiveString;
  lineHeight?: ResponsiveString;
  letterSpacing?: ResponsiveString;
}

const button = css<ButtonProps>`
  font-family: ${props => props.theme.fonts && props.theme.fonts.sans};
  text-decoration: none;
  cursor: pointer;
  ${box}
  ${props => css`
    ${getBoxShadow(props)}
    ${getBorder(props)}
    ${getBorderColor(props)}
    ${getBorderRadius(props)}
    ${getFontSize(props)}
    ${getFontWeight(props)}
    ${getFontFamily(props)}
    ${getLineHeight(props)}
    ${getLetterSpacing(props)}
    ${getTextTransform(props)}
    ${getTextAlign(props)}
  `}
`;

type Props = ButtonProps & React.Props<HTMLButtonElement>;

const FilteredButton: React.SFC<Props> = ({
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
  width,
  color,
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
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
  letterSpacing,
  textTransform,
  textAlign,
  ...rest
}) => <button {...rest} />;

const Button = styled(FilteredButton)`
  ${button}
`;

export { Button, Props as ButtonProps };
