import { FormHTMLAttributes } from "react";
import { StyledForm } from "./style";

export default function Form({ children, ...props }: FormHTMLAttributes<HTMLFormElement>) {
  return (
    <StyledForm {...props}>
      {children}
    </StyledForm>
  )
}