import { HtmlHTMLAttributes, InputHTMLAttributes } from "react";
import { StyledSearchBarContainer, StyledSearchBarRoot } from "./style";
import Glass from "@/img/icons/glass.png";

export function SearchBarForm({ children, ...props }: HtmlHTMLAttributes<HTMLFormElement>) {
  return <form {...props}>{children}</form>
}

export function SearchBarContainer({ children, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
  return <StyledSearchBarContainer {...props}>{children}</StyledSearchBarContainer>
}

export function SearchBarInput({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <StyledSearchBarRoot>
      <button type="submit">
        <img src={Glass} alt="Glass" />
      </button>
      <input type="text" {...props} />
    </StyledSearchBarRoot>
  )
}