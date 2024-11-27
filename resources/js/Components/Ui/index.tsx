import { ListRoot, ListTitle, ListItem } from "@/Components/Ui/List";
import { InputGroup, InputLabel, InputText } from "@/Components/Ui/Input";
import { PriceRoot, PriceCurrent, PriceOld } from "@/Components/Ui/Price";
import { SectionRoot, SectionImage, SectionContent } from "@/Components/Ui/Section";
import { FormRoot, FormTitle, FormFieldset, FormContainer } from "@/Components/Ui/Form";
import { HeaderRoot, HeaderContainer, HeaderNav, HeaderArticle } from "@/Components/Ui/Header";
import { ArticleRoot, ArticleTitle, ArticleText, ArticleContent } from "@/Components/Ui/Article";
import { DropdownRoot, DropdownTrigger, DropdownContent, DropdownLink } from "@/Components/Ui/Dropdown";
import { CardRoot, CardImage, CardContent, CardText, CardFooter, CardTitle } from "@/Components/Ui/Card";
import { SearchBarForm, SearchBarContainer, SearchBarInput } from "@/Components/Ui/SearchBar";
import { ContentRoot, ContentTitle, ContentSubTitle, ContentText, ContentPrice, ContentButton } from "@/Components/Ui/Content";
import InputError from "@/Components/Ui/Input/Components/Error";
import InputPassword from "@/Components/Ui/Input/Components/Password";
import InputCheckbox from "@/Components/Ui/Input/Components/Checkbox";

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
  SubTitle: ContentSubTitle,
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

export const SearchBar = {
  Form: SearchBarForm,
  Container: SearchBarContainer,
  Input: SearchBarInput,
}

export const Dropdown = {
  Root: DropdownRoot,
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Link: DropdownLink,
}