import { HtmlHTMLAttributes } from "react";
import { StyledContainerError } from "./style";
import WarningIncon from "@/img/icons/warning.png";
import If from "@/Components/If";

export type InputErrorProps = {
  message?: string,
} & HtmlHTMLAttributes<HTMLDivElement>

export default function InputError({ message }: InputErrorProps) {
  return (
    <If conditional={typeof message === "string"}>
      <StyledContainerError>
        <img src={WarningIncon} alt="Warning Icon" />
        <span>
          <strong>ERRO:</strong> {message}
        </span>
      </StyledContainerError>
    </If>
  )
}