import { HtmlHTMLAttributes, ImgHTMLAttributes } from "react";
import { StyledCard, StyledContent, StyledFooter, StyledFooterContainer, StyledImage, StyledTitle, StyledText } from "./style";

export function CardRoot({ children, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
  return <StyledCard {...props}>{children}</StyledCard>
}

export function CardImage({ ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return <StyledImage {...props} />
}

export function CardContent({ children, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
  return <StyledContent {...props}>{children}</StyledContent>
}

export function CardTitle({ children, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) {
  return <StyledTitle {...props}>{children}</StyledTitle>
}

export function CardText({ children, ...props }: HtmlHTMLAttributes<HTMLParagraphElement>) {
  return <StyledText {...props}>{children}</StyledText>
}

export function CardFooter({ children, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <StyledFooter {...props}>
      <hr />
      <StyledFooterContainer>{children}</StyledFooterContainer>
    </StyledFooter>
  )
}