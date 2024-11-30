import { HtmlHTMLAttributes } from "react";
import { StyledList, StyledListTitle, StyledListItem } from "./style";

export type ListProps = {
  direction: "inline" | "column"
} & HtmlHTMLAttributes<HTMLUListElement>

export function ListRoot({ children, direction, ...props }: ListProps) {
  return <StyledList $direction={direction} {...props}>{children}</StyledList>
}

export function ListTitle({ children, ...props }: HtmlHTMLAttributes<HTMLLIElement>) {
  return <StyledListTitle {...props}>{children}</StyledListTitle>
}

export function ListItem({ children, ...props }: HtmlHTMLAttributes<HTMLLIElement>) {
  return <StyledListItem {...props}>{children}</StyledListItem>
}