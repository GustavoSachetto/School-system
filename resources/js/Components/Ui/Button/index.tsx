import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./style";

type ButtonProps = {
  styled?: "outline" | "alert",
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, styled, ...props }: ButtonProps) {
  return (
    <StyledButton $styled={styled} {...props}>
      {children}
    </StyledButton>
  )
}