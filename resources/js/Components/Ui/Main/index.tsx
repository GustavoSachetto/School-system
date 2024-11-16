import { StyledMain } from "./style"; 
import { HtmlHTMLAttributes } from "react";

export type MainProps = {
  styled?: "border"
} & HtmlHTMLAttributes<HTMLBaseElement>

export default function Main({ children, styled, ...props }: MainProps) {
  return <StyledMain $styled={styled} {...props}>{children}</StyledMain>
}