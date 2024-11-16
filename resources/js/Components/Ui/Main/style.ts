import colors from "@/Constants/colors";
import borders from "@/Constants/borders";
import paddings from "@/Constants/paddings";
import styled, { css } from "styled-components";

const mainColors = colors.component.main;
const mainBorders = borders.component.main;
const mainPaddings = paddings.component.main;

export const StyledMain = styled.main<{ $styled?: "border" }>`
  margin: 32px auto;
  max-width: 1200px;
  padding: ${mainPaddings.paddingY}px 0;

  ${(props) => {
    switch (props.$styled) {
      case "border":
        return css`
          background: ${mainColors.primaryColor};
          border: ${mainBorders.sizeBorder} ${mainBorders.styleBorder} ${mainColors.secondaryColor};
          border-radius: ${mainBorders.radiusBorder};
        `;
    
      default:
        return css`
          background: transparent;
        `;
    }
  }}
`;