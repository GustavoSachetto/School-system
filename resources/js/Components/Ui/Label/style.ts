import styled, { css } from "styled-components";
import colors from "@/Constants/colors";
import fonts from "@/Constants/fonts";

const labelFonts = fonts.component.label;
const labelColors = colors.component.label;

export const StyledLabel = styled.label<{ $required?: boolean }>`
  font-size: ${labelFonts.sizeFont};
  font-weight: ${labelFonts.weightFont};
  color: ${colors.system.neutral.darkColor};
  
  ${(props) => {
    return props.$required && css`
      &::after {
        content: "*";
        color: ${labelColors.requiredColor};
      }
    `;
  }}
`;