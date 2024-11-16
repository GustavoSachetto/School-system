import fonts from "@/Constants/fonts";
import colors from "@/Constants/colors";
import paddings from "@/Constants/paddings";
import styled, { css } from "styled-components";

const articleFonts = fonts.component.article;
const articleColors = colors.component.article;
const articlePaddings = paddings.component.article;

export const StyledArticle = styled.article<{ $styled?: "display" }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => {
    switch (props.$styled) {
      case "display":
        return css`
          background: linear-gradient(to left, ${articleColors.display.primaryColor} 66%, ${articleColors.display.secondaryColor});
          box-shadow: 0 3px 4px ${articleColors.shadowColor};
        `;
    
      default:
        return css`
          background: ${colors.system.neutral.lightColor};
        `;
    }
  }}
`;

export const StyledArticleContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: ${articlePaddings.content.paddingY}px 0;
`;

export const StyledArticleTitle = styled.h2`
  font-size: ${articleFonts.title.sizeFont};
  font-weight: ${articleFonts.title.weightFont};
  color: ${colors.system.neutral.lightColor};
`;

export const StyledArticleText = styled.p`
  margin-top: 8px;
  letter-spacing: 0.5px;
  font-size: ${articleFonts.text.sizeFont};
  font-weight: ${articleFonts.text.weightFont};
  color: ${colors.system.neutral.lightColor};
`;