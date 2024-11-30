import { useState } from "react";
import { router } from "@inertiajs/react";
import { Course, CoursePayment, Payment } from "@/types";
import { formatCoursePrice } from "@/utils/formatCourse";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Section, Content, Price, List } from "@/Components/Ui";
import LogoPix from "@/img/logo-pix.png";

export type CheckoutPixProps = {
  course: Course,
  payment: Payment,
  coursePayment: CoursePayment
}

export default function CheckoutPix({ coursePayment, course, payment }: CheckoutPixProps) {
  const [copied, setCopied] = useState<boolean>(false);

  return (
    <Section.Root>
      <Section.Content className="relative">
        <Content.Image src={LogoPix} alt="Logo Pix" />
        <Content.Title>Pedido realizado com sucesso!</Content.Title>

        <Content.Text>
          <span>Código do pedido: </span> 
          <Content.Mark>{`#${coursePayment.payment_id}`}</Content.Mark>
        </Content.Text>

        <Content.Price style={{marginTop: 0, color: '#646464'}}>
          <Price.Legend className="text-[16px]">Valor do pagamento: </Price.Legend>
          <Price.Current>{ formatCoursePrice(course.price) }</Price.Current>
        </Content.Price>

        <List.Root direction="column" className="absolute bottom-0">
          <List.Title className="text-[20px] pb-2">Informações</List.Title>
          
          <List.Item>
            <span>Adquirido: </span>
            <strong>{course.name}</strong>
          </List.Item>
          <List.Item>
            <span>Carga horária: </span>
            <strong>{course.workload} horas</strong>
          </List.Item>
          <List.Item>
            <span>Data e horário da compra: </span>
            <strong>{coursePayment.generated_at}</strong>
          </List.Item>
        </List.Root>
      </Section.Content>
      <Section.Line />
      <Section.Content>
        <Content.Title>Copie o código ou escaneie o QR CODE</Content.Title>
        <Content.Text>Ao copiar o código, abra o seu aplicativo cadastrado no PIX e realize o seu pagamento de forma rápida.</Content.Text>

        <Content.Image 
          style={{width: '280px', margin: "0 auto"}} 
          src={`data:image/png;base64,${payment.point_of_interaction.transaction_data.qr_code_base64}`} 
          alt="Qr Code Pix" 
        />

        <Content.ContainerButton className="relative">
          {copied && <span style={{ position: "absolute", top: -12 }}>Copiado.</span>}
          
          <CopyToClipboard
            text={payment.point_of_interaction.transaction_data.qr_code}
            onCopy={() => setCopied(true)}
          >
            <Content.Button>Copiar código</Content.Button>
          </CopyToClipboard>
          
          <Content.Button onClick={() => router.replace('/')} styled="outline">Voltar</Content.Button>
        </Content.ContainerButton>
      </Section.Content>
    </Section.Root>
  )
}