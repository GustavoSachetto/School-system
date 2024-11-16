import { StyledForm, StyledTitle, StyledFieldset, StyledContainer } from "./style";
import { HtmlHTMLAttributes, FormHTMLAttributes, FieldsetHTMLAttributes } from "react";

export function FormRoot({ children, ...props }: FormHTMLAttributes<HTMLFormElement>) {
  return <StyledForm {...props}>{children}</StyledForm>
}

export function FormTitle({ children, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) {
  return <StyledTitle {...props}>{children}</StyledTitle>
}

export function FormFieldset({ children, ...props }: FieldsetHTMLAttributes<HTMLFieldSetElement>) {
  return <StyledFieldset {...props}>{children}</StyledFieldset>
}

export function FormContainer({ children, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
  return <StyledContainer {...props}>{children}</StyledContainer>
}