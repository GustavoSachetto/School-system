import styled from "styled-components";

export const StyledPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 16px;
`;

export const StyledPriceCurrent = styled.h4`
  font-size: 32px;
  font-weight: 500;
  margin-top: -8px;
`;

export const StyledPriceOld = styled.span`
  color: #838383;
  font-size: 14px;
  text-decoration: line-through;
`;