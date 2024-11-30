import fonts from "@/Constants/fonts";
import styled, { css } from "styled-components";
import colors from "@/Constants/colors";
import paddings from "@/Constants/paddings";

const listFonts = fonts.component.list;
const listColors = colors.component.list;
const listPaddings = paddings.component.list;

export const StyledList = styled.ul<{ $direction: "inline" | "column" }>`
  width: 100%;
  display: flex;
  margin-top: 16px;
  flex-direction: row;
  box-sizing: border-box;
  padding: 0 ${listPaddings.paddingX}px;

  li, span {
    margin: 0;
    list-style-type: none;
    font-size: ${listFonts.item.sizeFont};
  }

  ${(props) => {
    switch (props.$direction) {
      case "inline":
        return css`
          gap: 16px;
          flex-direction: row;
          
          li {
            display: flex;
            flex-direction: row;
            align-items: center;
          }
        `;

      case "column":
        return css`
          padding: 0;
          flex-direction: column;
        `;
    }
  }}
`;

export const StyledListTitle = styled.li`
  font-weight: 600;
`;

export const StyledListItem = styled.li`
  color: ${listColors.item.primaryColor};

  img {
    width: 25px;
    margin-right: 4px;
  }
`;