import { StyledContainerPasswordInput, StyledPasswordInput, StyledImageEye } from "./style";
import { InputProps } from "@/Components/Ui/Input";
import { useState } from "react";
import OpenEyeIcon from "@/img/icons/open-eye.png";
import CloseEyeIcon from "@/img/icons/close-eye.png";

export default function PasswordInput({ ...props }: InputProps) {
  const [passwordView, setPasswordView] = useState<boolean>(false);

  const handlePasswordView = () => {
    setPasswordView(!passwordView);
  } 

  return (
    <StyledContainerPasswordInput>
      <StyledPasswordInput type={passwordView ? "text" : "password"} {...props} />
      <StyledImageEye 
        src={passwordView ? OpenEyeIcon : CloseEyeIcon} 
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