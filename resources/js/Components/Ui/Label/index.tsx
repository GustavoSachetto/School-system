import { LabelHTMLAttributes } from "react";
import { StyledLabel } from "./style";

type LabelProps = {
  required?: boolean;
} & LabelHTMLAttributes<HTMLLabelElement>

export default function Label({ children, required, ...props }: LabelProps) {
  return (
    <StyledLabel $required={required} {...props}>{ children }</StyledLabel>
  )
}