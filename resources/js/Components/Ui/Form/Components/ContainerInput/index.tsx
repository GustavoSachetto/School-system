import { HtmlHTMLAttributes } from "react";
import { StyledContainerInput } from "./style";

export default function ContainerInput({ children, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <StyledContainerInput {...props}>{children}</StyledContainerInput>
  )
}