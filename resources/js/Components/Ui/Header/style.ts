import fonts from "@/Constants/fonts";
import styled from "styled-components";
import colors from "@/Constants/colors";
import paddings from "@/Constants/paddings";

const headerFonts = fonts.component.header;
const headerPaddings = paddings.component.header;

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
`;

export const StyledHeaderNav = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${colors.system.neutral.lightColor};
  padding: ${headerPaddings.paddingY}px 0;

  a {
    color: ${colors.system.neutral.darkColor};
    font-size: ${headerFonts.link.sizeFont};
  }
`;

export const StyledHeaderRoot = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
`;

export const StyledHeaderContainer = styled.div`
  gap: 24px;
  display: flex;
`;