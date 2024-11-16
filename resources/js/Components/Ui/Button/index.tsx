import { StyledButton } from "./style";
import { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  styled?: "outline" | "alert",
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, styled, ...props }: ButtonProps) {
  return <StyledButton $styled={styled} {...props}>{children}</StyledButton>
}