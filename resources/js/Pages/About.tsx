import { Head } from "@inertiajs/react";
import { Header, Article, Section, Content } from "@/Components/Ui";
import Main from "@/Components/Ui/Main";
import HeaderLayout from "@/Layouts/HeaderLayout";

export default function About() {
  return (
    <>
      <Head title="Sobre" />
      
      <HeaderLayout>
        <Header.Article styled="display">
          <Article.Content>
            <Article.Title>Sobre a School System</Article.Title>
            <Article.Text>
              Se você está começando sua jornada na programação ou deseja aprofundar seus conhecimentos, a School System é a escolha ideal para transformar sua carreira digital.
            </Article.Text>
          </Article.Content>
        </Header.Article>
      </HeaderLayout>

      <Main styled="border">
        <Article.Root>
          <Article.Content style={{padding: 0}}>
            <Section.Root className="flex-col" style={{gap: 0}}>
              <Content.Title>
                Plataforma de estudo School System
              </Content.Title>

              <Content.Text>
                Criada em novembro de 2024, ela foi completamente baseada em desenvolver uma plataforma digital de ensino, na qual, é possível gerir completamente todos os alunos, instrutores e monitores do sistema de curso da School System.
              </Content.Text>

              <Content.Text>
                O criador desta plataforma se chama <a href="https://gustavosachetto.site/" className="text-[16px]" target="_blank" rel="noopener noreferrer">Gustavo Sachetto da Cruz</a>, onde o objetivo deste projeto, de fato, é demonstrar todos os conhecimentos adquiridos, de maneira prática. 
              </Content.Text>
            </Section.Root>

            <Section.Root className="flex-col">
              <Content.SubTitle>
                Ferramentas utilizadas
              </Content.SubTitle>

              <ul>
                <li>
                  <strong>Softwares: </strong>
                  Visual Studio Code, Figma, HeidiSQL e Laragon.
                </li>
                <li>
                  <strong>Frameworks e Linguagens: </strong>
                  Laravel, React Js, Inertia Js, Php, Typescript e Javascript.
                </li>
                <li>
                  <strong>Bibliotecas: </strong>
                  Styled Components e Tailwind Css.
                </li>
                <li>
                  <strong>Outros: </strong>
                  Github e Git.
                </li>
              </ul>
            </Section.Root>

            <Section.Root className="flex-col">
              <Content.SubTitle>
                Conceitos importantes a pontuar
              </Content.SubTitle>

              <ul>
                <li>Sistema de pagamentos através do Mercado Pago.</li>
                <li>Fundamentos do design de interfaces.</li>
                <li>Modularização e reaproveitamento de componentes React.</li>
                <li>Orientação a Objetos do PHP 8+ (Traits, Abstract e Interfaces).</li>
                <li>Gerenciamento de dependências com o Composer e o Node Js.</li>
                <li>Utilização do Laravel Spatie para o tratamento do nível permissão dos usuários.</li>
                <li>Design Patern, Design System, Clean code e Testes unitários.</li>
              </ul>
            </Section.Root>

            <Section.Root className="flex-col">
              <Content.SubTitle>
                Redes para contato do criador
              </Content.SubTitle>

              <p>
                <a 
                  href="https://www.linkedin.com/in/gustavo-sachetto/" 
                  className="text-[16px]" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
                <span> - </span>

                <a 
                  href="https://github.com/GustavoSachetto" 
                  className="text-[16px]" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <span> - </span>
                
                <a 
                  href="mailto:g.sachettocruz@gmail.com" 
                  className="text-[16px]" 
                  rel="noopener noreferrer"
                >
                  Email
                </a>
                <span> - </span>

                <a 
                  href="https://gustavosachetto.site/" 
                  className="text-[16px]" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Portfólio
                </a>
              </p>
            </Section.Root>
          </Article.Content>
        </Article.Root>
      </Main>
    </>
  )
}