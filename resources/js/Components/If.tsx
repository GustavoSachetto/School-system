import { ReactNode } from "react";

type ConditionalProps = {
  conditional: boolean,
  children: ReactNode
}

export default function If({ conditional, children }: ConditionalProps) {
  return conditional == true && (children) 
}