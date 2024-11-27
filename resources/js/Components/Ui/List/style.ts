import fonts from "@/Constants/fonts";
import styled from "styled-components";
import colors from "@/Constants/colors";
import paddings from "@/Constants/paddings";

const listFonts = fonts.component.list;
const listColors = colors.component.list;
const listPaddings = paddings.component.list;

export const StyledList = styled.ul`
  gap: 16px;
  width: 100%;
  display: flex;
  margin-top: 16px;
  padding: 0 ${listPaddings.paddingX}px;
  flex-direction: row;
  box-sizing: border-box;

  li {
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: ${listFonts.item.sizeFont};
  }
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