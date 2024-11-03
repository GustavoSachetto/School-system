import borders from "@/Constants/borders";
import colors from "@/Constants/colors";
import paddings from "@/Constants/paddings";
import styled from "styled-components";

const spanPaddings = paddings.component.span;
const spanBorders = borders.component.span;
const spanColors = colors.component.span;

export const StyledContainerError = styled.span`
  display: flex;
  margin-top: 8px;
  padding: ${spanPaddings.alert.paddingY}px ${spanPaddings.alert.paddingX}px;
  border: ${spanBorders.alert.sizeBorder} ${spanBorders.alert.styleBorder} ${spanColors.alert.primaryColor};
  border-radius: ${spanBorders.alert.radiusBorder};
  background: ${spanColors.alert.secondaryColor};

  img {
    width: 20px;
    margin-right: 8px;
  }
`;