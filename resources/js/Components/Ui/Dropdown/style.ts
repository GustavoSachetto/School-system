import fonts from "@/Constants/fonts";
import colors from "@/Constants/colors";
import borders from "@/Constants/borders";
import paddings from "@/Constants/paddings";
import styled, { css } from "styled-components";
import { Link } from "@inertiajs/react";

const spanFonts = fonts.component.span;
const inputColors = colors.component.input;

const dropdownColors = colors.component.dropdown;
const dropdownBorders = borders.component.dropdown;
const dropdownPaddings = paddings.component.dropdown;

export const StyledDropdown = styled.div`
  display: block;
  position: relative;

  span {
    font-size: ${spanFonts.sizeFont};
  }
`;

export const StyledDropdownTrigger = styled.div<{ $styled?: "border" }>`
  display: flex;
  cursor: pointer;
  user-select: none;

  ${(props) => {
    switch (props.$styled) {
      case "border":
        return css`
          box-shadow: 2px 2px 6px ${inputColors.default.shadowColor};
          border: ${dropdownBorders.sizeBorder} ${dropdownBorders.styleBorder} ${dropdownColors.primaryColor};
          padding: ${dropdownPaddings.paddingY}px ${dropdownPaddings.paddingX}px;
        `;
    }
  }}
`;

export const StyledDropdownImage = styled.img`
  width: 20px;
  height: 20px;
  margin: 2px 0 0 8px;
`;

export const StyledDropdownContent = styled.div`
  margin-top: 16px;
  width: 80%;
  right: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 8px 0;
  border-radius: ${dropdownBorders.radiusBorder};
  background: ${colors.system.neutral.lightColor};
  box-shadow: 2px 2px 6px ${inputColors.default.shadowColor};
  border: ${dropdownBorders.sizeBorder} ${dropdownBorders.styleBorder} ${dropdownColors.primaryColor};
`;

export const StyledDropdownLink = styled(Link)`
  font-size: 14px;
  border-radius: 4px;
  color: ${dropdownColors.primaryColor};
  padding: ${dropdownPaddings.paddingY}px ${dropdownPaddings.paddingX}px;
  transition: 80ms;

  &:hover {
    font-weight: 500;
    text-decoration: none;
    background: #D9D9D960;
  }
`;