import { InputTextProps } from "@/Components/Ui/Input";
import { StyledContainerCheckbox, StyledCheckbox, StyledLabelCheckbox } from "./style";
import If from "@/Components/If";

export default function InputCheckbox({ children, error, ...props }: InputTextProps) {
  return (
    <StyledContainerCheckbox>
      <StyledCheckbox type="checkbox" {...props} />
      <If conditional={typeof children !== "undefined"}>
        <StyledLabelCheckbox htmlFor={props.name}>{children}</StyledLabelCheckbox>
      </If>
    </StyledContainerCheckbox>
  )
}