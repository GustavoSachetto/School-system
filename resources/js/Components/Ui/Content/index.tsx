import { HtmlHTMLAttributes } from "react";
import { PriceRoot } from "@/Components/Ui/Price";
import { ButtonProps } from "@/Components/Ui/Button";
import { StyledContent, StyledContentTitle, StyledContentSubTitle, StyledContentText, StyledContentButton } from "./style";

export function ContentRoot({ children, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
  return <StyledContent {...props}>{children}</StyledContent>
}

export function ContentTitle({ children, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) {
  return <StyledContentTitle {...props}>{children}</StyledContentTitle>
}

export function ContentSubTitle({ children, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) {
  return <StyledContentSubTitle {...props}>{children}</StyledContentSubTitle>
}

export function ContentText({ children, ...props }: HtmlHTMLAttributes<HTMLParagraphElement>) {
  return <StyledContentText {...props}>{children}</StyledContentText>
}

export function ContentPrice({ children, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
  return <PriceRoot {...props}>{children}</PriceRoot>
}

export function ContentButton({ children, ...props }: ButtonProps) {
  return <StyledContentButton {...props}>{children}</StyledContentButton>
}