import { HtmlHTMLAttributes } from "react";
import { StyledPrice, StyledPriceCurrent, StyledPriceOld, StyledPriceLegend } from "./style";

export function PriceRoot({ children, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
  return <StyledPrice {...props}>{children}</StyledPrice>
}

export function PriceCurrent({ children, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) {
  return <StyledPriceCurrent {...props}>{children}</StyledPriceCurrent>
}

export function PriceOld({ children, ...props }: HtmlHTMLAttributes<HTMLSpanElement>) {
  return <StyledPriceOld {...props}>{children}</StyledPriceOld>
}

export function PriceLegend({ children, ...props }: HtmlHTMLAttributes<HTMLSpanElement>) {
  return <StyledPriceLegend {...props}>{children}</StyledPriceLegend>
}