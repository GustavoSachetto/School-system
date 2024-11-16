import { useState } from "react";
import { InputTextProps } from "@/Components/Ui/Input";
import { StyledContainerPasswordInput, StyledPasswordInput, StyledImageEye } from "./style";
import OpenEye from "@/img/icons/open-eye.png";
import CloseEye from "@/img/icons/close-eye.png";

export default function InputPassword({ ...props }: InputTextProps) {
  const [passwordView, setPasswordView] = useState<boolean>(false);

  const handlePasswordView = () => {
    setPasswordView(!passwordView);
  } 

  return (
    <StyledContainerPasswordInput>
      <StyledPasswordInput type={passwordView ? "text" : "password"} {...props} />
      <StyledImageEye 
        src={passwordView ? OpenEye : CloseEye} 
        style={{
          width: passwordView ? 20 : 22,
          right: passwordView ? 16 : 15,
          top: passwordView ? 15 : 14,
        }} 
        onClick={handlePasswordView} 
        alt="Eye Icon" 
      />
    </StyledContainerPasswordInput>
  )
}