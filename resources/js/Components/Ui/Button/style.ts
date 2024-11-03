import styled, { css } from "styled-components";
import colors from "@/Constants/colors";
import borders from "@/Constants/borders";
import fonts from "@/Constants/fonts";
import paddings from "@/Constants/paddings";

const buttonPadding = paddings.component.button; 
const buttonColors = colors.component.button;
const buttonBorders = borders.component.button;
const buttonFonts = fonts.component.button;

export const StyledButton = styled.button<{ $styled?: "outline" | "alert" }>`
  width: 100%;
  padding: ${buttonPadding.defaultPadding}px;
  color: ${colors.system.neutral.lightColor};
  border-radius: ${buttonBorders.radiusBorder};
  font-size: ${buttonFonts.sizeFont};
  font-style: ${buttonFonts.styleFont};
  font-weight: ${buttonFonts.weightFont};

  ${(props) => {
    switch (props.$styled) {
      case "outline":
        return css`
          color: ${buttonColors.default.tertiaryColor};
          border: ${buttonBorders.sizeBorder} ${buttonBorders.styleBorder} ${buttonColors.default.tertiaryColor};
          background: transparent;
        `;

      case "alert":
        return css`
          padding: ${buttonPadding.defaultPadding + 1}px;
          background: linear-gradient(to left, ${buttonColors.alert.primaryColor}, ${buttonColors.alert.secondaryColor});
        `;
    
      default:
        return css`
          padding: ${buttonPadding.defaultPadding + 1}px;
          background: linear-gradient(to left, ${buttonColors.default.primaryColor}, ${buttonColors.default.secondaryColor});
        `;
    }
  }}
`;
