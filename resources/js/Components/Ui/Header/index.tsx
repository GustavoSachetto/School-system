import { HtmlHTMLAttributes } from "react";
import { ArticleProps, ArticleRoot } from "@/Components/Ui/Article";
import { StyledHeader, StyledHeaderRoot, StyledHeaderContainer, StyledHeaderNav } from "./style";

export function HeaderRoot({ children, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) {
  return <StyledHeader {...props}>{children}</StyledHeader>
}

export function HeaderNav({ children, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <StyledHeaderNav>
      <StyledHeaderRoot {...props}>{children}</StyledHeaderRoot>
    </StyledHeaderNav>
  )
}

export function HeaderContainer({ children, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
  return <StyledHeaderContainer {...props}>{children}</StyledHeaderContainer>
}

export function HeaderArticle({ children, ...props }: ArticleProps) {
  return <ArticleRoot {...props}>{children}</ArticleRoot>
}