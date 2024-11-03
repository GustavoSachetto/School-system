import { HtmlHTMLAttributes } from "react";
import { StyledTitle } from "./style";

export default function Title({ children, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) {
  return (
    <StyledTitle {...props}>{children}</StyledTitle>
  )
}