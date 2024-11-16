<?php

namespace Database\Seeders;

use App\Models\Course;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Courses to be inserted into storage.
     */
    public array $courses = [
        [ 
            'title'       => 'laravel-framework',
            'about'       => 'Laravel é um framework PHP gratuito utilizado no desenvolvimento de sistemas web. Ele deixa o código mais simples e legível, com suporte a recursos avançados. Então, por que usar Laravel? Em resumo, ele oferece um conjunto de funcionalidades com alto desempenho, deixando o código mais estruturado e pronto para receber a devida manutenção sempre que necessário. ',
            'name'        => 'Curso de Laravel',
            'image'       => 'storage/images/course/bd0fafdc9d5d3cd9a4ff56984c9a28d1.png',
            'requirement' => 'Neste curso de Laravel aprenderemos a trabalhar com um dos frameworks PHP mais utilizados atualmente. O Laravel é baseado na arquitetura MVC e tem um excelente desempenho. Veremos no decorrer do curso instalação, configuração do ambiente, rotas, manipulação de registros em banco de dados e também o desenvolvimento de templates.',
            'workload'    => '65',
            'price'       => '0.59',
        ],
        [ 
            'title'       => 'mongo-database',
            'about'       => 'MongoDB é um sistema de gerenciamento de banco de dados NoSQL (Not Only SQL) de código aberto e orientado a documentos. MongoDB é projetado para oferecer flexibilidade, escalabilidade e desempenho para aplicações modernas.Em vez de seguir o modelo de banco de dados relacional tradicional, que organiza os dados em tabelas com esquemas predefinidos, o MongoDB adota um modelo de dados flexível baseado em documentos. Assim, o MongoDB armazena os dados no formato BSON (Binary JSON), que permite estruturas de dados hierárquicas e não requer um esquema fixo.',
            'name'        => 'Curso de MongoDB',
            'image'       => 'storage/images/course/4ce639426609bf9476a0c42abd806596.jpeg',
            'requirement' => 'O MongoDB é um dos novos bancos de dados de código aberto, baseado nos conceitos associados com a sigla NoSQL (Not Only SQL). Este banco de dados é utilizado para lidar com documentos em um projeto de esquema livre, o que dá ao programador uma grande flexibilidade para armazenar e utilizar dados. Este curso se concentra na tecnologia MongoDB como uma ferramenta para implementar novas formas de armazenar e manipular dados que podem ser modelados como um formato de documento.',
            'workload'    => '42',
            'price'       => '0',
        ],
        [ 
            'title'       => 'typescript-programming-language',
            'about'       => 'TypeScript é um superconjunto de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem.',
            'name'        => 'Curso de TypeScript',
            'image'       => 'storage/images/course/d46bd127ae7218fc83afaa7959f9741a.png',
            'requirement' => 'Neste curso de TypeScript serão apresentados os conceitos do TypeScript na forma de classes, módulos, interfaces, tipos e funções, para mostrar como um desenvolvedor da plataforma .NET pode aumentar sua produtividade e a qualidade e segurança de um código mesmo utilizando o JavaScript.',
            'workload'    => '30',
            'price'       => '1.99',
        ],
        [ 
            'title'       => 'javascript-programming-language',
            'about'       => 'JavaScript é uma linguagem de programação usada por desenvolvedores para fazer páginas interativas da Internet. As funções de JavaScript podem melhorar a experiência do usuário durante a navegação em um site, como, por exemplo, desde a atualização do feed na página da mídia social até a exibição de animações e mapas interativos. Como uma linguagem de script do lado do cliente, ele é uma das tecnologias principais da World Wide Web (WWW).',
            'name'        => 'Curso de JavaScript',
            'image'       => 'storage/images/course/1bfbc56006417b812a8d86d55647f7a9.png',
            'requirement' => 'Neste curso, vamos preparar nosso ambiente de desenvolvimento com JavaScript e imprimir o texto "Hello World" com Node.js.',
            'workload'    => '20',
            'price'       => '2.99',
        ],
        [ 
            'title'       => 'java-oriented-object',
            'about'       => 'A Programação Orientada a Objetos (POO) é um paradigma de programação que se baseia na ideia de que os programas podem ser modelados como um conjunto de objetos que interagem entre si. Java, uma linguagem de programação amplamente utilizada, é conhecida por seu forte cumprimento aos princípios do POO.',
            'name'        => 'Curso de Java e Orientação a Objetos',
            'image'       => 'storage/images/course/8ce91eb8141f5af7ea1cf9288322a7d6.png',
            'requirement' => 'O objetivo deste curso básico de Java e Orientação a Objetos é apresentar os conceitos básicos da linguagem de programação Java e a orientação a objetos (OO), visando ensinar usuários leigos, com pouca experiência em linguagem de programação a trabalhar com a plataforma Java. O foco do curso é apresentar conceitos, aplicando sempre que possível a problemas práticos, apresentando muitos conceitos e exemplos práticos. Ao final do curso, o usuário estará capacitado a utilizar a sintaxe da linguagem Java, desenvolver classes, aplicar os conceitos de herança, polimorfismo, classes abstratas e interfaces no desenvolvimento de projetos OO.',
            'workload'    => '36',
            'price'       => '1.99',
        ],
        [ 
            'title'       => 'jwt-secret-token',
            'about'       => 'JWT (JSON Web Token) é um padrão aberto que permite a troca de informações de forma segura e compacta entre partes. É uma forma de autenticação que permite a um servidor verificar a identidade de um usuário sem precisar armazenar informações sobre ele. O JWT é muito utilizado para autenticação e autorização em aplicativos web e móveis. É mais seguro que a autenticação tradicional de cookies e pode ser usado com clientes que usam navegadores e aplicações mobile.',
            'name'        => 'Curso de Json Web Tokens (JWT)',
            'image'       => 'storage/images/course/a9bbe9106b0a03ebf1d79553edc93673.png',
            'requirement' => 'Neste curso apresentaremos os conceitos introdutórios do JWT, suas características e funcionamento para que você saiba quando e onde usar. Veremos também um exemplo prático utilizando o JWT para recuperar o assunto e o emissor do token. Com isso, você poderá usar junto com qualquer tecnologia.',
            'workload'    => '5',
            'price'       => '2.39',
        ],
        [ 
            'title'       => 'mysql-relational-database',
            'about'       => 'O MySQL é um sistema de gerenciamento de banco de dados (SGBD) de código aberto, que usa a linguagem de consulta estruturada (SQL) como interface. É um dos bancos de dados mais populares do mundo, sendo utilizado em sites de comércio eletrônico, mídias sociais e aplicativos. O MySQL é conhecido por sua: Estabilidade e confiabilidade, Facilidade de uso, Alta performance. Algumas das principais características do MySQL são: Suporte a transações, Indexação eficiente, Controle de acesso e segurança dos dados, Compatibilidade com todas as principais plataformas, Flexibilidade em termos de linguagens de programação suportadas.',
            'name'        => 'Curso de MySQL',
            'image'       => 'storage/images/course/dd9a62dfc171a6f70315ff6f350bcab1.png',
            'requirement' => 'Neste curso você aprenderá como criar seu primeiro banco de dados utilizando o MySQL. O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface para manipulação dos seus recursos.',
            'workload'    => '8',
            'price'       => '0',
        ],
        [ 
            'title'       => 'php-programming-language',
            'about'       => 'PHP (Hypertext Preprocessor) é uma linguagem de programação open source, utilizada para o desenvolvimento de aplicações web, como sites e lojas virtuais. O PHP é uma linguagem dinâmica que permite desenvolver sites com aplicações robustas, que respondem rapidamente e se conectam a bancos de dados de grande porte.',
            'name'        => 'Curso de PHP',
            'image'       => 'storage/images/course/1e86128fbb1a9dd7bb31e6f7a1378f61.png',
            'requirement' => 'Neste curso apresentaremos os conceitos introdutórios do PHP, suas características e funcionamento. Veremos também um exemplo prático utilizando o PHP.',
            'workload'    => '40',
            'price'       => '0.99',
        ],
        [ 
            'title'       => 'java-programming-language',
            'about'       => 'Java é uma linguagem de programação amplamente usada para codificar aplicações Web. Ela tem sido uma escolha popular entre os desenvolvedores há mais de duas décadas, com milhões de aplicações Java em uso hoje. Java é uma linguagem multiplataforma, orientada a objetos e centrada em rede que pode ser usada como uma plataforma em si. É uma linguagem de programação rápida, segura e confiável para codificar tudo, desde aplicações móveis e software empresarial até aplicações de big data e tecnologias do servidor.',
            'name'        => 'Curso de Java',
            'image'       => 'storage/images/course/a0413e270769b46bd9ab517588fbc9b1.jpeg',
            'requirement' => 'Neste curso apresentaremos os conceitos introdutórios do Java, suas características e funcionamento. Veremos também um exemplo prático utilizando o Java.',
            'workload'    => '2',
            'price'       => '0.79',
        ],
        [ 
            'title'       => 'composer-dependency-manager',
            'about'       => 'O Composer é uma ferramenta de gerenciamento de dependências em PHP. Ele permite que você declare as bibliotecas das quais seu projeto depende e as gerenciará para você (instalação/atualização).',
            'name'        => 'Curso de Composer',
            'image'       => 'storage/images/course/074fcb7a5b48478ac3abdb88804af479.jpg',
            'requirement' => 'Neste curso apresentaremos os conceitos introdutórios do Composer, suas características e funcionamento. Veremos também um exemplo prático utilizando o Composer.',
            'workload'    => '2',
            'price'       => '0.99',
        ],
        [ 
            'title'       => 'jquery-framework-js',
            'about'       => 'jQuery é uma biblioteca JavaScript que facilita o desenvolvimento web, permitindo que os desenvolvedores criem sites e aplicações de forma mais rápida e dinâmica. Algumas das características do jQuery são: É compatível com qualquer sistema operacional, Pode ser usado em qualquer navegador, Oferece suporte para CSS 3, Não exige loops para a localização de elementos no documento, Admite programação encadeada.',
            'name'        => 'Curso de Jquery',
            'image'       => 'storage/images/course/5031bf5fb203c366f42075c72a7706b6.png',
            'requirement' => 'Neste curso apresentaremos os conceitos introdutórios do JQuery, uma biblioteca JavaScript para desenvolvimento web front-end, suas características e funcionamento. Veremos também um exemplo prático utilizando o JQuery.',
            'workload'    => '8',
            'price'       => '2.99',
        ],
        [ 
            'title'       => 'html-markup-language',
            'about'       => 'A Linguagem de Marcação de Hipertexto (HTML) é uma linguagem de computador que compõe a maior parte das páginas da internet e dos aplicativos online. Um hipertexto é um texto usado para fazer referência a outros textos, enquanto uma linguagem de marcação é composta por uma série de marcações que dizem para os servidores da web qual é o estilo e a estrutura de um documento. O HTML não é considerado uma linguagem de programação, já que ele não pode criar funcionalidades dinâmicas. Ao invés disso, com o HTML, os usuários podem criar e estruturar seções, parágrafos e links usando elementos, tags e atributos.',
            'name'        => 'Curso de HTML',
            'image'       => 'storage/images/course/ed4d5a32885f54888d41a625914f914c.jpg',
            'requirement' => 'O HTML é uma linguagem de marcação utilizada para a criação de páginas na web. Sua principal finalidade é estruturar o conteúdo disponibilizado em uma página. O objetivo deste curso é guiar você pelos principais elementos do HTML na prática.',
            'workload'    => '9',
            'price'       => '0',
        ],
        [ 
            'title'       => 'css-styling-language',
            'about'       => 'CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo da representação visual do site. Pense  na decoração da sua página. Utilizando o CSS é possível alterar a cor do texto e do fundo, fonte e espaçamento entre parágrafos. Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por diante.',
            'name'        => 'Curso de CSS Flexbox',
            'image'       => 'storage/images/course/7234209da2a292f39774a80cbbb537ba.png',
            'requirement' => 'Neste curso ensinaremos uma técnica super importante do CSS conhecida como Flexbox, essencial para criar layouts modernos e responsivos de páginas web. Você aprenderá como utilizar o Flexbox para alinhar elementos, distribuir espaçamento e criar layouts fluidos que se adaptam às mudanças de resolução de tela (desktop e mobile). Ao longo deste curso você irá adquirir conhecimento sobre as principais propriedades relacionadas ao Flexbox, como display: flex, flex-direction, justify-content, align-items, flex-wrap, e flex-basis, e como usá-las de maneira estratégica para criar designs para diferentes tipos de dispositivos.',
            'workload'    => '13',
            'price'       => '0',
        ],
    ];

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ($this->courses as $course) {
            Course::create($course);
        }
    }
}
