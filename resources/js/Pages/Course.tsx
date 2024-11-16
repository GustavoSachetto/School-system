import { Head } from "@inertiajs/react";
import { Course as CourseInterface } from "@/types";
import { Header, Article, Section, Content, Price, List } from "@/Components/Ui";
import { formatCourseTitle, formatCoursePrice, formatCourseOldPrice } from "@/utils/formatCourse";
import Idea from "@/img/icons/idea.png";
import Main from "@/Components/Ui/Main";
import Support from "@/img/icons/support.png";
import Certificate from "@/img/icons/certificate.png";
import HeaderLayout from "@/Layouts/HeaderLayout";

export type CoursePageProps = {
  course: CourseInterface
}

export default function Course({ course }: CoursePageProps) {
  return (
    <>
      <Head title={course.name} />

      <HeaderLayout>
        <Header.Article styled="display">
          <Article.Content>
            <Article.Title className="capitalize">
              { formatCourseTitle(course.title) }
            </Article.Title>
            <Article.Text>
              {course.about}
            </Article.Text>
          </Article.Content>
        </Header.Article>
      </HeaderLayout>

      <Main styled="border">
        <Article.Root>
          <Section.Root>
            <Section.Image src={course.image_url} />
            
            <Section.Content className="ms-2">
              <Content.Title>{course.name} - {course.workload}h</Content.Title>
              <Content.Text>{course.requirement}</Content.Text>
              
              <Content.Price>
                <Price.Old>{formatCourseOldPrice(course.price)}</Price.Old>
                <Price.Current>{formatCoursePrice(course.price)}</Price.Current>
              </Content.Price>
             
              <Content.Button styled="outline">Comece agora</Content.Button>
            </Section.Content>
          </Section.Root>
        </Article.Root>
        <Article.Root>
          <List.Root>
            <List.Title>Incluído no curso: </List.Title>
            <List.Item>
              <img src={Certificate} alt="Certificado" />
              <span>Certificado</span>
            </List.Item>
            <List.Item>
              <img src={Support} alt="Certificado" />
              <span>Suporte em tempo real</span>
            </List.Item>
            <List.Item>
              <img src={Idea} alt="Certificado" />
              <span>Projeto prático</span>
            </List.Item>
          </List.Root>
        </Article.Root>
      </Main> 
    </>
  )
}