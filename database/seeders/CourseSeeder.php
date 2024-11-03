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
            'name'        => 'Curso de PHP',
            'image'       => 'storage/images/course/1e86128fbb1a9dd7bb31e6f7a1378f61.png',
            'requirement' => 'Neste curso apresentaremos os conceitos introdutórios do PHP, suas características e funcionamento. Veremos também um exemplo prático utilizando o PHP.',
            'workload'    => '40',
            'price'       => '30.99',
        ],
        [ 
            'name'        => 'Curso de Laravel',
            'image'       => 'storage/images/course/bd0fafdc9d5d3cd9a4ff56984c9a28d1.png',
            'requirement' => 'Neste curso de Laravel aprenderemos a trabalhar com um dos frameworks PHP mais utilizados atualmente. O Laravel é baseado na arquitetura MVC e tem um excelente desempenho. Veremos no decorrer do curso instalação, configuração do ambiente, rotas, manipulação de registros em banco de dados e também o desenvolvimento de templates.',
            'workload'    => '65',
            'price'       => '29.59',
        ],
        [ 
            'name'        => 'Curso de MySQL',
            'image'       => 'storage/images/course/dd9a62dfc171a6f70315ff6f350bcab1.png',
            'requirement' => 'Neste curso você aprenderá como criar seu primeiro banco de dados utilizando o MySQL. O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface para manipulação dos seus recursos.',
            'workload'    => '8',
            'price'       => '0',
        ],
        [ 
            'name'        => 'Curso de Composer',
            'image'       => 'storage/images/course/074fcb7a5b48478ac3abdb88804af479.jpg',
            'requirement' => 'Neste curso apresentaremos os conceitos introdutórios do Composer, suas características e funcionamento. Veremos também um exemplo prático utilizando o Composer.',
            'workload'    => '2',
            'price'       => '0.99',
        ],
        [ 
            'name'        => 'Curso de JavaScript',
            'image'       => 'storage/images/course/1bfbc56006417b812a8d86d55647f7a9.png',
            'requirement' => 'Neste curso, vamos preparar nosso ambiente de desenvolvimento com JavaScript e imprimir o texto "Hello World" com Node.js.',
            'workload'    => '20',
            'price'       => '19.99',
        ],
        [ 
            'name'        => 'Curso de MongoDB',
            'image'       => 'storage/images/course/4ce639426609bf9476a0c42abd806596.jpeg',
            'requirement' => 'O MongoDB é um dos novos bancos de dados de código aberto, baseado nos conceitos associados com a sigla NoSQL (Not Only SQL). Este banco de dados é utilizado para lidar com documentos em um projeto de esquema livre, o que dá ao programador uma grande flexibilidade para armazenar e utilizar dados. Este curso se concentra na tecnologia MongoDB como uma ferramenta para implementar novas formas de armazenar e manipular dados que podem ser modelados como um formato de documento.',
            'workload'    => '42',
            'price'       => '0',
        ],
        [ 
            'name'        => 'Curso de TypeScript',
            'image'       => 'storage/images/course/d46bd127ae7218fc83afaa7959f9741a.png',
            'requirement' => 'Neste curso de TypeScript serão apresentados os conceitos do TypeScript na forma de classes, módulos, interfaces, tipos e funções, para mostrar como um desenvolvedor da plataforma .NET pode aumentar sua produtividade e a qualidade e segurança de um código mesmo utilizando o JavaScript.',
            'workload'    => '30',
            'price'       => '59.99',
        ],
        [ 
            'name'        => 'Curso de Jquery',
            'image'       => 'storage/images/course/5031bf5fb203c366f42075c72a7706b6.png',
            'requirement' => 'Neste curso apresentaremos os conceitos introdutórios do JQuery, uma biblioteca JavaScript para desenvolvimento web front-end, suas características e funcionamento. Veremos também um exemplo prático utilizando o JQuery.',
            'workload'    => '8',
            'price'       => '2.99',
        ],
        [ 
            'name'        => 'Curso de Java',
            'image'       => 'storage/images/course/a0413e270769b46bd9ab517588fbc9b1.jpeg',
            'requirement' => 'Neste curso apresentaremos os conceitos introdutórios do Java, suas características e funcionamento. Veremos também um exemplo prático utilizando o Java.',
            'workload'    => '2',
            'price'       => '1.99',
        ],
        [ 
            'name'        => 'Curso de Java e Orientação a Objetos',
            'image'       => 'storage/images/course/8ce91eb8141f5af7ea1cf9288322a7d6.png',
            'requirement' => 'O objetivo deste curso básico de Java e Orientação a Objetos é apresentar os conceitos básicos da linguagem de programação Java e a orientação a objetos (OO), visando ensinar usuários leigos, com pouca experiência em linguagem de programação a trabalhar com a plataforma Java. O foco do curso é apresentar conceitos, aplicando sempre que possível a problemas práticos, apresentando muitos conceitos e exemplos práticos. Ao final do curso, o usuário estará capacitado a utilizar a sintaxe da linguagem Java, desenvolver classes, aplicar os conceitos de herança, polimorfismo, classes abstratas e interfaces no desenvolvimento de projetos OO.',
            'workload'    => '36',
            'price'       => '120.99',
        ],
        [ 
            'name'        => 'Curso de Json Web Tokens (JWT)',
            'image'       => 'storage/images/course/a9bbe9106b0a03ebf1d79553edc93673.png',
            'requirement' => 'Neste curso apresentaremos os conceitos introdutórios do JWT, suas características e funcionamento para que você saiba quando e onde usar. Veremos também um exemplo prático utilizando o JWT para recuperar o assunto e o emissor do token. Com isso, você poderá usar junto com qualquer tecnologia.',
            'workload'    => '5',
            'price'       => '28.39',
        ],
        [ 
            'name'        => 'Curso de HTML',
            'image'       => 'storage/images/course/ed4d5a32885f54888d41a625914f914c.jpg',
            'requirement' => 'O HTML é uma linguagem de marcação utilizada para a criação de páginas na web. Sua principal finalidade é estruturar o conteúdo disponibilizado em uma página. O objetivo deste curso é guiar você pelos principais elementos do HTML na prática.',
            'workload'    => '9',
            'price'       => '0',
        ],
        [ 
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
