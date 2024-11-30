import { HtmlHTMLAttributes, ImgHTMLAttributes } from "react";
import { PriceRoot } from "@/Components/Ui/Price";
import { ButtonProps } from "@/Components/Ui/Button";
import { StyledContent, StyledContentTitle, StyledContentSubTitle, StyledContentText, StyledContentMark, StyledContentButton, StyledContentContainerButton, StyledContentImage } from "./style";

export function ContentRoot({ children, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
  return <StyledContent {...props}>{children}</StyledContent>
}

export function ContentTitle({ children, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) {
  return <StyledContentTitle {...props}>{children}</StyledContentTitle>
}

export function ContentSubTitle({ children, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) {
  return <StyledContentSubTitle {...props}>{children}</StyledContentSubTitle>
}

export function ContentImage({ ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return <StyledContentImage {...props} />
}

export function ContentText({ children, ...props }: HtmlHTMLAttributes<HTMLParagraphElement>) {
  return <StyledContentText {...props}>{children}</StyledContentText>
}

export function ContentMark({ children, ...props }: HtmlHTMLAttributes<HTMLParagraphElement>) {
  return <StyledContentMark {...props}>{children}</StyledContentMark>
}

export function ContentPrice({ children, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
  return <PriceRoot {...props}>{children}</PriceRoot>
}

export function ContentButton({ children, ...props }: ButtonProps) {
  return <StyledContentButton {...props}>{children}</StyledContentButton>
}

export function ContentContainerButton({ children, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
  return <StyledContentContainerButton {...props}>{children}</StyledContentContainerButton>
}