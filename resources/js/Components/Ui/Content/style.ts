import fonts from "@/Constants/fonts";
import styled from "styled-components";
import Button from "@/Components/Ui/Button";

const contentFonts = fonts.component.content;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const StyledContentTitle = styled.h2`
  font-size: ${contentFonts.title.sizeFont};
  font-weight: ${contentFonts.title.weightFont};
`;

export const StyledContentSubTitle = styled.h3`
  font-size: ${contentFonts.subtitle.sizeFont};
  font-weight: ${contentFonts.subtitle.weightFont};
`;

export const StyledContentText = styled.p`
  font-size: ${contentFonts.text.sizeFont};
  font-weight: ${contentFonts.text.weightFont};
  margin-top: 12px;
`;

export const StyledContentButton = styled(Button)`
  margin-top: 12px;
`;