import { HtmlHTMLAttributes } from "react";
import { StyledList, StyledListTitle, StyledListItem } from "./style";

export function ListRoot({ children, ...props }: HtmlHTMLAttributes<HTMLUListElement>) {
  return <StyledList {...props}>{children}</StyledList>
}

export function ListTitle({ children, ...props }: HtmlHTMLAttributes<HTMLLIElement>) {
  return <StyledListTitle {...props}>{children}</StyledListTitle>
}

export function ListItem({ children, ...props }: HtmlHTMLAttributes<HTMLLIElement>) {
  return <StyledListItem {...props}>{children}</StyledListItem>
}