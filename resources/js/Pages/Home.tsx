import { Course } from "@/types";
import { Head } from "@inertiajs/react";
import { Header, Article, Section } from "@/Components/Ui";
import { CollectionCardCourse } from "@/Components/CardCourse";
import Main from "@/Components/Ui/Main";
import HeaderLayout from "@/Layouts/HeaderLayout";

export type HomePageProps = {
  courses: Array<Course>
}

export default function Home({ courses }: HomePageProps) {
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