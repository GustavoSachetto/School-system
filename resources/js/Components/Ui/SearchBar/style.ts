import borders from "@/Constants/borders";
import colors from "@/Constants/colors";
import fonts from "@/Constants/fonts";
import styled from "styled-components";

const inputFonts = fonts.component.input;
const inputColors = colors.component.input;
const inputBorders = borders.component.input;

export const StyledSearchBarContainer = styled.div`
  margin: 32px auto 0 auto;
  max-width: 1200px;
`;

export const StyledSearchBarRoot = styled.div`
  position: relative;

  button {
    top: 11px;
    left: 9px;
    width: 28px;
    position: absolute;
    transition: 180ms ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }

  input {
    width: 40%;
    margin-top: 4px;
    padding-left: 43px;
    color: ${colors.system.neutral.darkColor};
    font-size: ${inputFonts.sizeFont};
    font-style: ${inputFonts.styleFont};
    font-weight: ${inputFonts.weightFont};
    border: ${inputBorders.sizeBorder} ${inputBorders.styleBorder} ${inputColors.default.secondaryColor};
    box-shadow: 2px 2px 6px ${inputColors.default.shadowColor};
    border-radius: 25px;

    &:focus {
      caret-color: ${inputColors.default.primaryColor};
      border-color: ${inputColors.default.primaryColor};
      box-shadow: 0 0 4px ${inputColors.default.shadowFocusColor};
    }
}
`;