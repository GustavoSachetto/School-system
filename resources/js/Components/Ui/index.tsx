import { CardRoot, CardImage, CardContent, CardText, CardFooter, CardTitle } from "@/Components/Ui/Card";
import { FormRoot, FormTitle, FormFieldset, FormContainer } from "@/Components/Ui/Form";
import { InputGroup, InputLabel, InputText } from "@/Components/Ui/Input";
import { HeaderRoot, HeaderContainer, HeaderNav, HeaderArticle } from "@/Components/Ui/Header";
import { ArticleRoot, ArticleTitle, ArticleText, ArticleContent } from "@/Components/Ui/Article";
import { SectionRoot, SectionImage, SectionContent } from "@/Components/Ui/Section";
import { ContentRoot, ContentTitle, ContentText, ContentPrice, ContentButton } from "@/Components/Ui/Content";
import { PriceRoot, PriceCurrent, PriceOld } from "@/Components/Ui/Price";
import { ListRoot, ListTitle, ListItem } from "@/Components/Ui/List";
import { DropdownRoot, DropdownTrigger, DropdownContent, DropdownLink } from "@/Components/Ui/Dropdown";
import InputPassword from "@/Components/Ui/Input/Components/Password";
import InputCheckbox from "@/Components/Ui/Input/Components/Checkbox";
import InputError from "@/Components/Ui/Input/Components/Error";

export const Card = {
  Root: CardRoot,
  Image: CardImage,
  Content: CardContent,
  Title: CardTitle,
  Text: CardText,
  Footer: CardFooter,
}

export const Form = {
  Root: FormRoot,
  Title: FormTitle,
  Fieldset: FormFieldset,
  Container: FormContainer,
}

export const Header = {
  Root: HeaderRoot,
  Nav: HeaderNav,
  Container: HeaderContainer,
  Article: HeaderArticle,
}

export const Article = {
  Root: ArticleRoot,
  Content: ArticleContent,
  Title: ArticleTitle,
  Text: ArticleText,
}

export const Section = {
  Root: SectionRoot,
  Image: SectionImage,
  Content: SectionContent,
}

export const Content = {
  Root: ContentRoot,
  Title: ContentTitle,
  Text: ContentText,
  Price: ContentPrice,
  Button: ContentButton,
}

export const Price = {
  Root: PriceRoot,
  Current: PriceCurrent,
  Old: PriceOld,
}

export const List = {
  Root: ListRoot,
  Title: ListTitle,
  Item: ListItem,
}

export const Input = {
  Group: InputGroup,
  Label: InputLabel,
  Text: InputText,
  Password: InputPassword,
  Checkbox: InputCheckbox,
  Error: InputError,
}

export const Dropdown = {
  Root: DropdownRoot,
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Link: DropdownLink,
}