import styled from "styled-components";
import colors from "@/Constants/colors";
import borders from "@/Constants/borders";
import paddings from "@/Constants/paddings";

const formColors = colors.component.form;
const formBorders = borders.component.form;
const formPaddings = paddings.component.form;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 460px;
  background: ${formColors.primaryColor};
  padding: ${formPaddings.paddingY}px ${formPaddings.paddingX}px;
  border: ${formBorders.sizeBorder} ${formBorders.styleBorder} ${formColors.secondaryColor};
  border-radius: ${formBorders.radiusBorder};
`;

export const StyledTitle = styled.h2`
  color: ${colors.system.neutral.darkColor};
  margin-bottom: 12px;
`; 

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 12px;
  margin-bottom: 16px;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;