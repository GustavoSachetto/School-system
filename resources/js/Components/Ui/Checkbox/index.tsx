import { InputProps } from "@/Components/Ui/Input";
import { StyledContainerCheckbox, StyledCheckbox, StyledLabelCheckbox } from "./style";
import ContainerError from "../Input/Components/ContainerError";
import If from "@/Components/If";

export default function Checkbox({ children, error, ...props }: InputProps) {
  return (
    <StyledContainerCheckbox>
      <StyledCheckbox type="checkbox" {...props} />
      <If conditional={typeof children !== "undefined"}>
        <StyledLabelCheckbox htmlFor={props.name}>{children}</StyledLabelCheckbox>
      </If>
      <ContainerError message={error} />
    </StyledContainerCheckbox>
  )
}

