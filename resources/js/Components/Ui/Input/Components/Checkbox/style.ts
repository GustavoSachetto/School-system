import colors from "@/Constants/colors";
import borders from "@/Constants/borders";
import styled from "styled-components";
import Checked from "@/img/icons/checked.png";

const checkboxColors = colors.component.checkbox;
const checkboxBorders = borders.component.checkbox;

export const StyledContainerCheckbox = styled.div`
  input + label:before {
    content: '';
    width: 20px;
    height: 20px;
    margin-right: 8px;
    margin-bottom: 3px;
    display: inline-block;
    vertical-align: middle;
    border-radius: 4px;
    background: ${checkboxColors.secondaryColor};
    border: ${checkboxBorders.sizeBorder} ${checkboxBorders.styleBorder} ${checkboxColors.primaryColor};
    border-radius: ${checkboxBorders.radiusBorder};
  }
`;

export const StyledCheckbox = styled.input`
  cursor: pointer;
  user-select: none;
  display: none;

  &:checked + label:before {
    background-image: url(${Checked});
    background-repeat: no-repeat;
    background-position: center;
    background-color: ${checkboxColors.primaryColor};
  }
`;

export const StyledLabelCheckbox = styled.label`
  font-size: 16px;
  cursor: pointer;
  user-select: none;
`;