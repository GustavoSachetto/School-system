import { HtmlHTMLAttributes } from "react";
import { StyledContainerError } from "./style";
import WarningIncon from "@/img/icons/warning.png";
import If from "@/Components/If";

type ContainerErrorProps = {
  message?: string,
} & HtmlHTMLAttributes<HTMLDivElement>

export default function ContainerError({ message }: ContainerErrorProps) {
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