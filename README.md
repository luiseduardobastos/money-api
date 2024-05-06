<p align="center">
  <img src="https://github.com/luiseduardobastos/money-web/blob/master/src/assets/logo.png" width="160">
</p>
<p align="center">
 Controle duas despesas de forma descomplicada 💰
</p>

<br>
<h1>Sobre o Projeto</h1>
<p>A API do sistema de controle de despesas em (Money) foi desenvolvida com o intuito de proporcionar uma maneira intuitiva e eficaz de gerenciar suas finanças pessoais. Com a crescente complexidade da vida moderna e a multiplicidade de gastos que enfrentamos diariamente, é crucial ter uma ferramenta que simplifique o processo de acompanhar e controlar nossas despesas. O principal objetivo deste projeto é oferecer uma plataforma mobile acessível e de fácil utilização para que os usuários possam listar, inserir, editar e excluir suas despesas de forma eficiente no seu próprio celular. Além disso, o sistema visa fornecer uma visão clara e concisa do total de gastos, permitindo que os usuários tenham uma compreensão abrangente de suas finanças.</p>
<ul>
    <li>Desenvolvida por meio de JavaScript, Node.js e Prisma;</li>
    <li>Integra todo o Projeto Money de Controle de Despesas;</li>
    <li>Utiliza o Banco de Dados SQLite para armazenas as despesas.</li>
</ul>

<br>

<h1>Pré-requisitos</h1>
<p>Antes de começar a utilizar o sistema de controle de despesas em React-Native (Money), é importante garantir que seu ambiente atenda aos pré-requisitos listados abaixo. Ao garantir que esses pré-requisitos sejam atendidos, você estará pronto para iniciar o uso do sistema de controle de despesas em React e aproveitar ao máximo suas funcionalidades para gerenciar suas finanças pessoais de maneira eficiente e conveniente.</p>

<ul>
    <li><b>Node.js e npm (Node Package Manager):</b> O sistema React-Native requer o Node.js para executar o ambiente de desenvolvimento e o npm para gerenciar as dependências do projeto. Certifique-se de ter o Node.js instalado em sua máquina, juntamente com o npm, que geralmente é instalado automaticamente junto com o Node.js;</li>
    <li><b>Editor de Código:</b> Você precisará de um editor de código para visualizar, modificar e trabalhar com os arquivos do projeto React. Existem várias opções disponíveis, como Visual Studio Code, Atom, Sublime Text, entre outros. Escolha aquele com o qual você se sinta mais confortável;</li>
    <li><b>Postman:</b> Para testar as requisições e respostas da API que o aplicativo irá consumir, é recomendado ter o Postman instalado. O Postman é uma ferramenta poderosa para testar APIs, permitindo enviar solicitações HTTP e analisar as respostas para garantir o correto funcionamento da comunicação entre o aplicativo e o servidor;</li>
    <li><b>Conhecimento Básico de JavaScript e React-Native:</b> É útil ter um conhecimento básico de JavaScript, pois o React Native é baseado em JavaScript. Além disso, familiarize-se com os conceitos básicos do React Native, como componentes, props, state e ciclo de vida, para entender melhor a estrutura e o funcionamento do seu aplicativo;</li>
    <li><b>Terminal ou Linha de Comando:</b> Você precisará de um terminal ou linha de comando para executar comandos relacionados ao gerenciamento do projeto React, como instalação de dependências, execução de scripts e criação de compilações de produção. Certifique-se de estar confortável usando o terminal em seu sistema operacional;</li>
    <li><b>Navegador Web Moderno:</b> O sistema de controle de despesas em React é uma aplicação web e, portanto, requer um navegador web moderno para ser executado corretamente. Certifique-se de estar usando a versão mais recente de um navegador popular, como Google Chrome, Mozilla Firefox, Safari ou Microsoft Edge.</li>
</ul>

<br>

<h1>Instalação</h1>
<p>Para começar a utilizar o sistema de controle de despesas em React-Native, siga os passos abaixo:</p>

```
git clone https://github.com/luiseduardobastos/money-api.git
```

```
cd money-api
```

```
npm install
```

```
node --watch src/index.js
```

<p>Depois desses passos, você pode utilizar tanto o projeto web e/ou mobile para testar suas requisições com a API.</p>


<br>

<h1>Funcionalidades</h1>
<p>A API que integra o sistema de controle de despesas (Money) oferece uma variedade de funcionalidades projetadas para simplificar e otimizar o gerenciamento de suas finanças pessoais. Antes de explorar os detalhes, aqui está um resumo das principais funcionalidades:</p>

<p align="center">
  <img src="https://github.com/luiseduardobastos/money-web/blob/master/src/assets/banner-telas.png">
</p>

<p><b>Listar Despesas:</b></p>
<ul>
    <li>Endpoint: "/despesas";</li>
    <li>Método: GET;</li>
    <li>Descrição: Retorna a lista completa de despesas registradas no sistema;</li>
    <li>Parâmetros de Consulta Opcionais: Podem ser utilizados parâmetros de consulta para filtrar as despesas com base em critérios específicos, como descrição, categoria, etc.</li>
</ul>
<p><b>Inserir Despesa:</b></p>
<ul>
    <li>Endpoint: "/despesas";</li>
    <li>Método: POST;</li>
    <li>Descrição: Permite adicionar uma nova despesa ao sistema;</li>
    <li>Corpo da Requisição: Deve incluir os detalhes da nova despesa, como valor, categoria, etc.</li>
</ul>
<p><b>Editar Despesa:</b></p>
<ul>
    <li>Endpoint: "/despesas/{id}";</li>
    <li>Método: DELETE;</li>
    <li>Descrição: Remove uma despesa específica com base no ID fornecido;</li>
    <li>Parâmetros de Caminho: O ID da despesa a ser excluída deve ser especificado no URL da requisição.</li>
</ul>
<p><b>Excluir Despesa:</b></p>
<ul>
    <li>Endpoint: "/despesas/{id}";</li>
    <li>Método: DELETE;</li>
    <li>Descrição: Remove uma despesa específica com base no ID fornecido;</li>
    <li>Parâmetros de Caminho: O ID da despesa a ser excluída deve ser especificado no URL da requisição.</li>
</ul>

<p><b>Respostas da API (Códigos de Status HTTP):</b></p>
<ul>
    <li>200 OK: Indica que a solicitação foi bem-sucedida;</li>
    <li>201 Created: Indica que a nova despesa foi criada com sucesso;</li>
    <li>204 No Content: Indica que a despesa foi excluída com sucesso;</li>
    <li>400 Bad Request: Indica que houve um erro na solicitação, como dados inválidos;</li>
    <li>404 Not Found: Indica que a despesa solicitada não foi encontrada;</li>
    <li>500 Internal Server Error: Indica que ocorreu um erro interno no servidor;</li>
    <li>As respostas bem-sucedidas geralmente incluem os dados relevantes associados à solicitação, como a lista de despesas, detalhes da despesa inserida, etc;</li>
    <li>Em caso de erro, uma mensagem de erro explicativa é fornecida para ajudar na depuração e resolução do problema.</li>
</ul>

<br> 

<h1>Tecnologias</h1>
<p>A API utiliza um conjunto de tecnologias modernas e poderosas para oferecer uma experiência robusta e eficiente aos usuários. Antes de explorar os detalhes, aqui está um resumo das principais tecnologias utilizadas:</p>

<ul>
    <li><b>Node.js:</b> Um ambiente de tempo de execução JavaScript que permite executar JavaScript no servidor, usado para gerenciar dependências, executar scripts e configurar o ambiente de desenvolvimento;</li>
    <li><b>Postman:</b> Uma ferramenta poderosa para testar APIs, permitindo enviar solicitações HTTP e analisar as respostas para garantir o correto funcionamento da comunicação entre o aplicativo móvel e o servidor;</li>
    <li><b>Prisma e ORM:</b> Um ORM (Object-Relational Mapping) moderno e de código aberto para Node.js e TypeScript. O Prisma simplifica a interação com o banco de dados e oferece uma camada de abstração poderosa para realizar operações CRUD de forma eficiente;</li>
    <li><b>JavaScript:</b> A linguagem de programação fundamental para o desenvolvimento web moderno, utilizada para criar a lógica e a interatividade do sistema;</li>
    <li><b>npm (Node Package Manager):</b> Um gerenciador de pacotes para JavaScript, utilizado para instalar e gerenciar as dependências do projeto React;</li>
</ul>


<br>

<h1>Benefícios da API</h1>

<ul>
    <li><b>Facilidade de Uso:</b> A API foi projetada para ser testada com uma interface mobile e/ou web intuitiva e amigável, tornando-a acessível para usuários de todos os níveis de habilidade;</li>
    <li><b>Controle Financeiro:</b> Ao fornecer uma visão clara das despesas e do total de gastos, o sistema capacita os usuários a ter um maior controle sobre suas finanças e a tomar decisões mais conscientes;</li>
    <li><b>Eficiência:</b> Com funcionalidades como inserção, edição e exclusão de despesas, o sistema ajuda os usuários a gerenciar suas finanças de forma rápida e eficiente, economizando tempo e esforço.</li>    
</ul>


<br>

<h1>Roadmap</h1>
<p>Navegue pelo nosso roadmap para conhecer os próximos passos do projeto:</p>

- [x] Criação da interface Web e Mobile;
- [x] Consumo da API Money-API;
- [x] Listar despesas;
- [x] Inserir despesas;
- [x] Editar despesas;
- [x] Excluir despesas;
- [ ] Criação da interface de configurações e logout;
- [ ] Criação do sistema de cadastro e login;



<br>

<h1>Resumo do Projeto</h1>
<p>Em suma, a Money-API é uma ferramenta valiosa para qualquer pessoa que deseja manter suas finanças organizadas e sob controle utilizando o Projeto Money. Com uma variedade de funcionalidades e uma abordagem centrada no usuário, ele oferece uma solução abrangente para o desafio contínuo de gerenciar despesas pessoais.</p>
<br>


<p align="center">
  Feito com ❤️ por Luis Eduardo
</p>
