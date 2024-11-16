import fonts from "@/Constants/fonts";
import styled from "styled-components";
import colors from "@/Constants/colors";
import borders from "@/Constants/borders";
import paddings from "@/Constants/paddings";

const cardFonts = fonts.component.card;
const cardColors = colors.component.card;
const cardBorders = borders.component.card;
const cardPaddings = paddings.component.card.content;

export const StyledCard = styled.div`
  height: 100%;
  max-width: 270px;
  background: ${cardColors.primaryColor};
  border-radius: ${cardBorders.radiusBorder};
  border: ${cardBorders.sizeBorder} ${cardBorders.styleBorder} ${cardColors.secondaryColor};
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  box-shadow: 0 2px 4px ${cardColors.shadownColor};
  border-radius: ${cardBorders.radiusBorder} ${cardBorders.radiusBorder} 0 0;
`;

export const StyledContent = styled.div`
  padding: ${cardPaddings.defaultPadding}px;
`;

export const StyledTitle = styled.h2`
  min-height: 60px;
  margin-bottom: 8px;
  font-size: ${cardFonts.title.sizeFont};
  font-weight: ${cardFonts.title.weightFont};
  color: ${colors.system.neutral.darkColor};
`;

export const StyledText = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  hr {
    width: 100%;
    color: ${cardColors.secondaryColor};
  }
`;

export const StyledFooterContainer = styled.div`
  padding: ${cardPaddings.defaultPadding/4}px;

  a {
    font-size: ${cardFonts.link.sizeFont};
  }
`;