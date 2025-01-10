# School-system
![School-System](https://github.com/user-attachments/assets/c81160e4-dacf-445a-99b3-b011a59cd638)

## Sobre o projeto
Plataforma de venda de cursos online de programação que foi desenvolvida para estudo e implementação de __pagamento de pix__ através do banco __Mercado Pago__. Foi um projeto baseado na técnica de desenvolvimento de aplicações web modernas promovida pelo __Inertia JS__ que
demandou bastante estudo dos frameworks __Laravel e React__. 

#laravel #php #react #mercado-pago

* __Link para acesso:__ https://schoolsystem.shop/

## Ferramentas utilizadas

Para criar essa plataforma foi necessário o estudo da técnica de desenvolvimento do __Inertia js__ que permite a criação de __SPAs__ com o framework backend Laravel, 
no qual foi escolhido o React para o frontend.

- __Softwares:__ Visual Studio Code, Figma, HeidiSQL e Laragon.
- __Frameworks e Linguagens:__ Laravel, React Js, Inertia Js, Php, Typescript e Javascript.
- __Bibliotecas:__ Styled Components e Tailwind Css.
- __Outros:__ Github e Git.
  
## Conceitos importantes a pontuar

- Sistema de pagamentos através do Mercado Pago.
- Fundamentos do design de interfaces.
- Modularização e reaproveitamento de componentes React.
- Orientação a Objetos do PHP 8+ (Traits, Abstract e Interfaces).
- Gerenciamento de dependências com o Composer e o Node Js.
- Utilização do Laravel Spatie para o tratamento do nível permissão dos usuários.
- Design Patern, Design System, Clean code e Testes unitários.

## Configurações iniciais
__Abaixo está todos os comandos necessários para executar o projeto localmente.__
  
Clonar repositório do projeto
```
git clone https://github.com/GustavoSachetto/School-system.git
```

Mudar para pasta do projeto
```
cd School-system
```

Instalar as dependências do projeto
```
composer install
```

Copiando arquivo de configuração .env
```
cp .env.example .env
```

Gerar chave de criptografia do laravel
```
php artisan key:generate
```

Executar as tabelas do banco de dados
```
php artisan migrate
```

Inserir informações no banco de dados
```
php artisan db:seed
```

Configurar seu token de acesso do Mercado Pago
```
php artisan app:configure-access-token-mercado-pago 'Your Access Token'
```

Executar o teste do projeto
```
php artisan test
```

Executar o servidor web
```
npm run dev
```

Acessar o site no google
```
http://school-system.test
```

## Algumas telas do sistema
__Página do curso:__

![Curso](https://github.com/user-attachments/assets/89c8b97b-3635-4c6f-af07-0be54a4a9f6c)

__Página de login:__

![Login](https://github.com/user-attachments/assets/cadbd1e9-7be3-43db-9c19-e6cbd7674e82)

__Página de pagamento do curso:__

![Pagamento](https://github.com/user-attachments/assets/460d8759-1d9c-4fe7-afb7-d01e77340774)

*************
