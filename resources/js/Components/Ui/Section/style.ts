import styled from "styled-components";
import borders from "@/Constants/borders";
import paddings from "@/Constants/paddings";
import colors from "@/Constants/colors";

const sectionPaddings = paddings.component.section;

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: ${sectionPaddings.paddingY}px ${sectionPaddings.paddingX}px;
  gap: 16px;
`;

export const StyledSectionImage = styled.img`
  width: 100%;
  max-width: 650px;
  object-fit: cover;
  border-radius: ${borders.component.img.radiusBorder};
`;

export const StyledSectionLine = styled.hr`
  height: 500px;
  margin: 0 8px;
  border-left: 1px solid ${colors.component.hr.defaultColor};
`;