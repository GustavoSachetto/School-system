import { User } from "@/types";
import { HtmlHTMLAttributes } from "react";
import { Link, usePage } from "@inertiajs/react";
import { Dropdown, Header } from "@/Components/Ui";
import Profile from "@/img/icons/profile.png";

function handleUserLogged(user: User) {
  return user 
    ? (
      <Dropdown.Root>
        <Dropdown.Trigger>
          <img 
            src={typeof user.image_url === "string" ? user.image_url : Profile} 
            className="w-6 h-6 me-2 rounded-full"
          />
          <span>{user.name}</span>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Link href={route('profile.edit')}>
            Profile
          </Dropdown.Link>
          <Dropdown.Link href={route('logout')} method="post">
            Log Out
          </Dropdown.Link>
        </Dropdown.Content>
      </Dropdown.Root>
    ) : (
      <Link href="/login">Entrar</Link>
    )
}

export default function HeaderLayout({ children }: HtmlHTMLAttributes<HTMLHeadingElement>) {
  const user = usePage().props.auth.user;

  return (
    <Header.Root>
      <Header.Nav>
        <Header.Container>
            <Link href="/">Cursos</Link>
            <Link href="/about">Sobre</Link>
        </Header.Container>

        <Header.Container>
          { handleUserLogged(user) }
        </Header.Container>
      </Header.Nav>

      {children}
    </Header.Root>
  )
}