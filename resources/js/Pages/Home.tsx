import { Course } from "@/types";
import { FormEventHandler } from "react";
import { Head, useForm } from "@inertiajs/react";
import { Header, Article, Section, SearchBar } from "@/Components/Ui";
import { CollectionCardCourse } from "@/Components/CardCourse";
import Main from "@/Components/Ui/Main";
import HeaderLayout from "@/Layouts/HeaderLayout";

export type HomePageProps = {
  courses: Array<Course>
}

export default function Home({ courses }: HomePageProps) {
  const { setData, post } = useForm({
    titleOrName: ''
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post('/');
  }

  return (
    <>
      <Head title="Home" />
      
      <HeaderLayout>
        <Header.Article styled="display">
          <Article.Content>
            <Article.Title>Cursos da área de programação</Article.Title>
            <Article.Text>
              Realize seu sonho de trabalhar com programação! Nós da School System iremos te ensinar tudo que você precisa para começar com o pé direito. Aprenda no seu ritmo e tenha suporte sempre que precisar.
            </Article.Text>
          </Article.Content>
        </Header.Article>
      </HeaderLayout>

      <SearchBar.Form onSubmit={submit}>
        <SearchBar.Container>
          <SearchBar.Input placeholder="Pesquisar..." onChange={(e) => setData('titleOrName', e.target.value)} />
        </SearchBar.Container>
      </SearchBar.Form>
      
      <Main styled="border">
        <Article.Root>
          <Section.Root className="flex-wrap">
            <CollectionCardCourse courses={courses} />
          </Section.Root>
        </Article.Root>
      </Main>
    </>
  )
}