import { Head } from "@inertiajs/react";
import { Header, Article } from "@/Components/Ui";
import { Course as CourseInterface, CoursePayment, Payment } from "@/types";
import Main from "@/Components/Ui/Main";
import HeaderLayout from "@/Layouts/HeaderLayout";
import CheckoutPix from "@/Components/CheckoutPix";

export type PaymentCoursePageProps = {
  payment: Payment,
  course: CourseInterface,
  coursePayment: CoursePayment,
}

export default function Course({ coursePayment, course, payment }: PaymentCoursePageProps) {
  return (
    <>
      <Head title={`Pagamento do ${course.name}`} />

      <HeaderLayout>
        <Header.Article styled="display">
          <Article.Content>
            <Article.Title>Pedido de pagamento do curso</Article.Title>
            <Article.Text>
              Obrigado por escolher a nossa empresa. É um prazer ter você como cliente. Finalize agora o pagamento do {course.name} e vamos começar uma nova jornada.
            </Article.Text>
          </Article.Content>
        </Header.Article>
      </HeaderLayout>

      <Main styled="border">
        <Article.Root>
          <CheckoutPix 
            coursePayment={coursePayment} 
            course={course} 
            payment={payment} 
          />
        </Article.Root>
      </Main> 
    </>
  )
}