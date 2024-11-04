import { InputHTMLAttributes } from "react";
import { StyledContainerInput, StyledInput } from "./style";
import ContainerError from "./Components/ContainerError";

export type InputProps = {
  error?: string,
} & InputHTMLAttributes<HTMLInputElement>

export default function Input({ error, ...props }: InputProps) {
  return (
    <StyledContainerInput>
      <StyledInput $error={error} {...props} />
      <ContainerError message={error} />
    </StyledContainerInput>
  )
}