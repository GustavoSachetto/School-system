import { FieldsetHTMLAttributes } from "react";
import { StyledFieldset } from "./style";

export default function Fieldset({ children, ...props }: FieldsetHTMLAttributes<HTMLFieldSetElement>) {
  return (
    <StyledFieldset {...props}>{children}</StyledFieldset>
  )
}