import { Transition } from "@headlessui/react";
import { InertiaLinkProps } from "@inertiajs/react";
import { HtmlHTMLAttributes, useState, createContext, useContext, Dispatch, SetStateAction } from "react";
import { StyledDropdown, StyledDropdownImage, StyledDropdownTrigger, StyledDropdownContent, StyledDropdownLink } from "./style";
import DownArrow from "@/img/icons/down-arrow.png";

const DropdownContext = createContext<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>,
  toggleOpen: () => void;
}>({
  open: false,
  setOpen: () => {},
  toggleOpen: () => {},
});

export function DropdownRoot({ children, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleOpen =() => {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <DropdownContext.Provider 
      value={{ 
        open: dropdownOpen, 
        setOpen: setDropdownOpen, 
        toggleOpen: toggleOpen 
      }}
    >
      <StyledDropdown {...props}>
        {children}
      </StyledDropdown>
    </DropdownContext.Provider>
  )
}

export type DropdownTriggerProps = {
  styled?: "border"
} & HtmlHTMLAttributes<HTMLDivElement>

export function DropdownTrigger({ children, styled, ...props }: DropdownTriggerProps) {
  const { toggleOpen } = useContext(DropdownContext);

  return (
    <StyledDropdownTrigger $styled={styled} onClick={toggleOpen} {...props}>
      {children}
      <StyledDropdownImage src={DownArrow} />
    </StyledDropdownTrigger>
  )
}

export function DropdownContent({ children, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {
  const { open } = useContext(DropdownContext);

  return (
    <Transition
      show={open}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <StyledDropdownContent {...props}>{children}</StyledDropdownContent>
    </Transition>
  )
}

export function DropdownLink({ ...props }: InertiaLinkProps) {
  return <StyledDropdownLink {...props} />
}