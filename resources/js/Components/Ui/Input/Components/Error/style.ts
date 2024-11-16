import styled from "styled-components";
import colors from "@/Constants/colors";
import borders from "@/Constants/borders";
import paddings from "@/Constants/paddings";

const spanColors = colors.component.span;
const spanBorders = borders.component.span;
const spanPaddings = paddings.component.span;

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