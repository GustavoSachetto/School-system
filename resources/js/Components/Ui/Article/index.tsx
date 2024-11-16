import { HtmlHTMLAttributes } from "react";
import { StyledArticle, StyledArticleContent, StyledArticleTitle, StyledArticleText } from "./style";

export type ArticleProps = {
  styled?: "display"
} & HtmlHTMLAttributes<HTMLDivElement>

export function ArticleRoot({ children, styled, ...props }: ArticleProps) {
  return <StyledArticle $styled={styled} {...props}>{children}</StyledArticle>
}

export function ArticleContent({ children, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
  return <StyledArticleContent {...props }>{children}</StyledArticleContent>
}

export function ArticleTitle({ children, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) {
  return <StyledArticleTitle {...props}>{children}</StyledArticleTitle>
}

export function ArticleText({ children, ...props }: HtmlHTMLAttributes<HTMLParagraphElement>) {
  return <StyledArticleText {...props}>{children}</StyledArticleText>
}