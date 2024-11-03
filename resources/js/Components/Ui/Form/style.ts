import styled from "styled-components";
import paddings from "@/Constants/paddings";
import borders from "@/Constants/borders";
import colors from "@/Constants/colors";

const formPaddings = paddings.component.form;
const formBorders = borders.component.form;
const formColors = colors.component.form;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 460px;
  background: ${formColors.primaryColor};
  padding: ${formPaddings.paddingY}px ${formPaddings.paddingX}px;
  border: ${formBorders.sizeBorder} ${formBorders.styleBorder} ${formColors.secondaryColor};
  border-radius: ${formBorders.radiusBorder};
`;