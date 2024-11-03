import borders from "@/Constants/borders";
import colors from "@/Constants/colors";
import fonts from "@/Constants/fonts";
import styled, { css } from "styled-components";

const inputFonts = fonts.component.input;
const inputBorders = borders.component.input;
const inputColors = colors.component.input;

export const StyledContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input<{ $error?: boolean }>`
  width: 100%;
  margin-top: 4px;
  color: ${colors.system.neutral.darkColor};
  font-size: ${inputFonts.sizeFont};
  font-style: ${inputFonts.styleFont};
  font-weight: ${inputFonts.weightFont};
  border: ${inputBorders.sizeBorder} ${inputBorders.styleBorder} ${inputColors.default.secondaryColor};
  box-shadow: 2px 2px 6px ${inputColors.default.shadowColor};
  border-radius: ${inputBorders.radiusBorder};

  ${(props) => props.$error && css`
    border-color: ${inputColors.alert.primaryColor};
  `}

  &:focus {
    caret-color: ${inputColors.default.primaryColor};
    border-color: ${inputColors.default.primaryColor};
    box-shadow: 0 0 4px ${inputColors.default.shadowFocusColor};
  }
`;