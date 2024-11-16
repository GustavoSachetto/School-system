import { StyledGroupInput, StyledInput, StyledLabel } from "./style";
import { InputHTMLAttributes, HtmlHTMLAttributes, LabelHTMLAttributes } from "react";

export function InputGroup({ children, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
  return <StyledGroupInput {...props}>{children}</StyledGroupInput>
}

export type InputLabelProps = {
  required?: boolean;
} & LabelHTMLAttributes<HTMLLabelElement>

export function InputLabel({ children, required, ...props }: InputLabelProps) {
  return <StyledLabel $required={required} {...props}>{ children }</StyledLabel>
}

export type InputTextProps = {
  error?: string,
} & InputHTMLAttributes<HTMLInputElement>

export function InputText({ error, ...props }: InputTextProps) {
  return <StyledInput $error={error} {...props} />
}