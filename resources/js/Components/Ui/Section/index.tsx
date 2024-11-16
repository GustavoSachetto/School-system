import { HtmlHTMLAttributes, ImgHTMLAttributes } from "react";
import { StyledSection, StyledSectionImage } from "./style";
import { ContentRoot } from "@/Components/Ui/Content";

export function SectionRoot({ children, ...props }: HtmlHTMLAttributes<HTMLBaseElement>) {
  return <StyledSection {...props}>{children}</StyledSection>
}

export function SectionImage({ ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return <StyledSectionImage {...props } />
}

export function SectionContent({ children, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
  return <ContentRoot {...props}>{children}</ContentRoot>
}