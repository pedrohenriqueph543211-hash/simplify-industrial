# Simplify Industrial

**Mais controle. Menos complicação.**

## 1. Sobre o projeto

O Simplify Industrial é um projeto acadêmico desenvolvido para a disciplina de Programação Web I, com o objetivo de apresentar a proposta de uma plataforma de gestão industrial voltada principalmente para pequenas e médias empresas.

A ideia do projeto é demonstrar como a tecnologia pode ajudar na organização das atividades de uma indústria, facilitando o acompanhamento do estoque, da produção e dos custos.

O site apresenta as principais soluções da plataforma, os benefícios propostos e um formulário de contato para que os visitantes possam demonstrar interesse.

O projeto foi desenvolvido em duas etapas, começando pela estruturação e estilização das páginas e avançando para a implementação de interações com JavaScript e bibliotecas externas.

## 2. Objetivos

O principal objetivo é desenvolver um site responsivo utilizando HTML5, CSS3 e JavaScript, aplicando os conhecimentos adquiridos durante a disciplina.

Durante o desenvolvimento, também foram trabalhados conceitos de organização de arquivos, estruturação semântica, estilização de páginas, manipulação do DOM, eventos, responsividade e utilização de bibliotecas.

## 3. Tecnologias utilizadas

As seguintes tecnologias e bibliotecas foram utilizadas no projeto:

- **HTML5:** estruturação das páginas, organização dos conteúdos, navegação e criação do formulário.

- **CSS3:** estilização dos elementos, definição de cores, fontes, espaçamentos, bordas, efeitos visuais e responsividade.

- **JavaScript:** implementação das interações, manipulação do DOM, tratamento de eventos e alteração dos elementos da página.

- **jQuery 4.0.0:** implementação da funcionalidade de mostrar e ocultar os cards de benefícios com a animação `slideToggle()`.

- **Bootstrap 5.3.8:** utilização de classes prontas para estilização dos campos dos formulários, botões e alerta de confirmação.

- **AOS 2.3.1 (Animate On Scroll):** aplicação de animações nos cards de soluções e benefícios quando entram na área visível durante a rolagem da página.

As bibliotecas externas são carregadas por meio de CDN. Por esse motivo, é necessário ter conexão com a internet para que seus recursos sejam carregados corretamente.

## 4. Estrutura do projeto

O projeto está organizado da seguinte forma:

```text
Simplify-Industrial/
│
├── index.html
│
├── css/
│   └── style.css
│
├── img/
│
├── js/
│   └── script.js
│
├── pages/
│   ├── solucoes.html
│   └── contato.html
│
└── README.md
```

### Descrição dos arquivos e pastas

**`index.html`**

É a página inicial do projeto. Apresenta o Simplify Industrial, suas principais soluções, os benefícios propostos e o formulário de contato. Também contém a busca dinâmica de soluções e as interações desenvolvidas para a página inicial.

**`css/style.css`**

Contém as regras de estilo do projeto, incluindo cores, fontes, espaçamentos, organização dos elementos, aparência dos cards, botões, formulário e ajustes responsivos.

**`js/script.js`**

Contém as funcionalidades desenvolvidas em JavaScript e jQuery, incluindo o comportamento do botão inicial, a validação demonstrativa do formulário, a busca dinâmica de soluções, o controle de exibição dos benefícios e a inicialização do AOS quando disponível.

**`pages/solucoes.html`**

É a página dedicada à apresentação das principais soluções propostas pelo Simplify Industrial. Também utiliza a biblioteca AOS para animar os cards durante a rolagem.

**`pages/contato.html`**

É a página dedicada ao formulário de contato, permitindo que o visitante preencha seus dados e visualize uma mensagem de confirmação após o preenchimento válido.

**`img/`**

Diretório reservado para armazenar imagens utilizadas no projeto.

**`README.md`**

Arquivo de documentação com informações sobre os objetivos, as tecnologias, a estrutura, as funcionalidades e os testes realizados.

## 5. Desenvolvimento da N1

Na primeira etapa do projeto, o foco foi construir a estrutura do site utilizando HTML5 e CSS3, sem a utilização de frameworks.

Foram desenvolvidos o cabeçalho, o menu de navegação, a apresentação inicial, a seção de soluções, a seção de benefícios, o formulário de contato e o rodapé.

### Recursos utilizados na N1

- Estruturação com HTML5.
- Utilização de elementos semânticos, como `header`, `nav`, `main`, `section`, `article` e `footer`.
- Criação de links de navegação entre as seções.
- Utilização de títulos, parágrafos, formulários e campos de entrada.
- Definição de cores, fontes, margens, preenchimentos e bordas com CSS3.
- Aplicação do Box Model.
- Organização dos elementos utilizando Flexbox e CSS Grid.
- Aplicação de efeitos com a pseudoclasse `:hover`.
- Utilização de media queries para adaptar o layout a diferentes tamanhos de tela.
- Organização dos arquivos em pastas separadas para facilitar a manutenção do projeto.
- Criação de um README para documentar o projeto.

O objetivo dessa etapa foi criar uma página visualmente organizada, com uma identidade própria e adaptável a computadores, tablets e celulares.

## 6. Desenvolvimento da N2

Na segunda etapa, o projeto foi ampliado com JavaScript, jQuery, Bootstrap e AOS.

Além das interações implementadas, foram criadas páginas adicionais para separar a apresentação das soluções e o formulário de contato da página inicial.

### 6.1. Interação no botão inicial

O botão **"Conheça o Simplify"** possui uma interação implementada em JavaScript.

Ao clicar nele, uma mensagem é exibida na seção de soluções da página inicial.

Essa funcionalidade utiliza os métodos `querySelector()`, `addEventListener()` e `textContent` para localizar os elementos, detectar o clique e alterar o conteúdo exibido.

### 6.2. Busca dinâmica de soluções

A página inicial possui um campo de busca que permite filtrar os cards de soluções de acordo com o texto digitado pelo visitante.

A busca utiliza o evento `input` para detectar as alterações no campo.

O JavaScript percorre os cards, compara o texto digitado com o conteúdo de cada um e exibe apenas os elementos correspondentes.

Se o campo estiver vazio, todos os cards voltam a ser exibidos. Se nenhum resultado corresponder à pesquisa, os cards ficam ocultos até que o texto seja alterado.

Essa funcionalidade utiliza recursos como `querySelectorAll()`, `value`, `toLowerCase()`, `trim()`, `forEach()` e `includes()`.

### 6.3. Formulário de contato

O projeto possui um formulário com os seguintes campos:

- Nome;
- E-mail;
- Empresa;
- Mensagem.

Os campos de nome, e-mail e mensagem são obrigatórios, enquanto o campo de empresa é opcional.

O atributo `required` do HTML impede o envio enquanto os campos obrigatórios não estiverem preenchidos corretamente. O campo de e-mail também utiliza o tipo `email` para a validação básica do navegador.

O JavaScript utiliza o evento `submit` para detectar a tentativa de envio e o método `preventDefault()` para impedir o comportamento padrão do formulário.

Após o preenchimento válido, uma mensagem de confirmação é exibida na página sem recarregá-la. Essa funcionalidade está disponível tanto na página inicial quanto na página dedicada ao contato.

**Importante:** o formulário é demonstrativo. Atualmente, os dados não são enviados para um servidor, não são armazenados em um banco de dados e não geram o envio real de mensagens.

### 6.4. Alerta de confirmação com Bootstrap

O Bootstrap foi utilizado para melhorar a apresentação da mensagem de confirmação do formulário.

Foram utilizadas classes como:

- form-control: aplica a estilização do Bootstrap aos campos de entrada e à área de mensagem.
- btn: define a estrutura visual de um botão do Bootstrap.
- btn-primary: aplica a aparência de botão principal.
- alert: aplica a estrutura visual de um alerta.
- alert-success: aplica a aparência de uma mensagem de sucesso.
- mt-3: adiciona margem superior.
- d-none: mantém o alerta oculto inicialmente.

Após o envio válido, o JavaScript remove a classe `d-none` para mostrar o alerta.

Esses recursos foram integrados ao CSS próprio do projeto, mantendo a identidade visual do Simplify Industrial.

### 6.5. Mostrar e ocultar benefícios com jQuery

Na seção de benefícios, foi implementado um botão chamado **"Mostrar/Ocultar benefícios"**.

Ao clicar no botão, os cards de benefícios são ocultados ou exibidos novamente, utilizando a animação `slideToggle()` do jQuery.

Essa funcionalidade permite demonstrar a utilização de uma biblioteca JavaScript para selecionar elementos, detectar eventos e aplicar animações.

### 6.6. Animações com AOS

A biblioteca AOS (*Animate On Scroll*) foi utilizada para aplicar animações aos cards de soluções e benefícios da página inicial e aos cards da página dedicada às soluções.

Os cards utilizam o atributo `data-aos="fade-up"` para definir a animação de entrada.

A inicialização da biblioteca configura a duração das animações em 700 milissegundos e utiliza once: false, permitindo que as animações sejam repetidas quando os elementos voltam a entrar na área visível durante a rolagem.

A biblioteca é carregada antes do arquivo script.js, que realiza sua inicialização quando o AOS está disponível.

### 6.7. Criação de três páginas

O projeto foi expandido para incluir três páginas HTML:

- **Página inicial (`index.html`):** apresentação do projeto, soluções, benefícios e formulário de contato.
- **Página de soluções (`pages/solucoes.html`):** apresentação dedicada às principais soluções da plataforma.
- **Página de contato (`pages/contato.html`):** formulário de contato em uma página separada.

Os links de navegação foram ajustados para permitir o acesso entre as páginas.

Os caminhos relativos dos arquivos CSS e JavaScript foram configurados de acordo com a localização de cada página nas pastas do projeto.

### 6.8. Compartilhamento dos arquivos JavaScript

O arquivo `js/script.js` centraliza as funcionalidades JavaScript e é utilizado nas páginas que precisam dessas interações.

Foram adicionadas condições `if` para verificar a existência de determinados elementos antes de registrar eventos. Isso evita erros quando um elemento utilizado em uma interação não existe na página atual.

Nas páginas que utilizam o jQuery, Bootstrap ou AOS, as respectivas bibliotecas precisam ser carregadas antes do código que depende delas.

O projeto também possui comentários explicativos no HTML, CSS e JavaScript para facilitar a compreensão e a manutenção do código.

## 7. Layout e identidade visual

O projeto utiliza uma identidade visual baseada principalmente em azul-marinho, azul, branco e tons de cinza.

A proposta é transmitir organização e profissionalismo, mantendo os conteúdos fáceis de visualizar e compreender.

Foram utilizados cards com fundo branco, bordas arredondadas e sombras discretas para separar visualmente as soluções e os benefícios.

O CSS utiliza Flexbox e CSS Grid para organizar o cabeçalho, o menu e os cards, além de media queries para adaptar a estrutura a diferentes dimensões de tela.

O Bootstrap complementa o CSS próprio por meio de classes de estilização aplicadas aos campos dos formulários, botões e alertas.

## 8. Responsividade

O site foi desenvolvido para funcionar em diferentes tamanhos de tela.

Foram utilizadas media queries para adaptar o número de colunas das soluções, a disposição dos benefícios, o tamanho dos títulos, a organização do cabeçalho e a largura do formulário.

### Ajustes para diferentes telas

- **Desktop:** as soluções são organizadas em três colunas e os benefícios em duas colunas.
- **Tablet:** a grade de soluções é adaptada para duas colunas.
- **Celular:** as soluções e os benefícios são organizados em uma coluna, o cabeçalho passa a ter disposição vertical e os campos do formulário ocupam a largura disponível.

Foram realizados testes em larguras representativas de desktop, tablet e celular para verificar a organização e a legibilidade dos elementos.

## 9. Testes realizados

Após o desenvolvimento, foram realizados testes para verificar o funcionamento do site.

### Testes de navegação

- Acesso à página de soluções pelo menu da página inicial.
- Acesso à página de contato.
- Retorno à página inicial.
- Verificação dos links de navegação entre as páginas.

### Testes das funcionalidades

- Verificação do botão "Conheça o Simplify".
- Busca por termos correspondentes às soluções.
- Verificação da restauração dos cards após limpar a busca.
- Teste do botão de mostrar e ocultar os benefícios.
- Teste do formulário com campos obrigatórios vazios.
- Teste do formulário com os campos obrigatórios preenchidos.
- Verificação da mensagem de confirmação do Bootstrap.
- Verificação das animações dos cards durante a rolagem.
- Verificação dos campos e botões estilizados com Bootstrap.

### Testes de responsividade e compatibilidade

- Verificação do layout em desktop.
- Verificação do layout em tablet.
- Verificação do layout em celular.
- Testes em dois navegadores diferentes.

Nos testes realizados, as funcionalidades apresentaram o comportamento esperado.

## 10. Como executar o projeto

Para visualizar o projeto localmente:

1. Baixe ou copie os arquivos mantendo a estrutura de pastas.
2. Abra a pasta `Simplify-Industrial` no Visual Studio Code.
3. Abra o arquivo `index.html` diretamente no navegador ou execute-o utilizando a extensão Live Server.
4. Navegue entre as páginas pelo menu.
5. Teste as interações disponíveis na página inicial e o formulário de contato.
6. Mantenha a conexão com a internet para que as bibliotecas externas carregadas por CDN funcionem corretamente.

Não é necessário configurar um servidor de aplicação ou um banco de dados para executar a versão atual do projeto.

## 11. Limitações atuais

O Simplify Industrial é um projeto acadêmico voltado à prática de desenvolvimento web no lado do cliente.

Atualmente:

- O formulário não envia dados para um servidor.
- Não existe armazenamento em banco de dados.
- A mensagem de confirmação é apenas demonstrativa.
- As bibliotecas externas dependem de conexão com a internet.
- As soluções apresentadas são conteúdos demonstrativos, sem integração com um sistema real de gestão industrial.

Essas limitações podem ser tratadas em futuras versões, caso o projeto seja ampliado com uma aplicação de backend.

## 12. Possibilidades de evolução

Como melhorias futuras, o projeto poderá receber:

- Integração do formulário com um servidor.
- Armazenamento dos dados em banco de dados.
- Envio real das mensagens de contato.
- Implementação de funcionalidades reais para controle de estoque, produção e custos.
- Ampliação das informações e dos recursos apresentados em cada página.
- Melhorias de acessibilidade e usabilidade.

## 13. Considerações finais

O desenvolvimento do Simplify Industrial permitiu aplicar os conhecimentos adquiridos durante a disciplina de Programação Web I.

Na N1, foram trabalhadas a estruturação com HTML5, a estilização com CSS3, a organização dos elementos e a responsividade.

Na N2, o projeto foi ampliado com JavaScript, jQuery, Bootstrap e AOS, além da criação de páginas adicionais e da implementação de funcionalidades interativas.

Os testes de navegação, responsividade e funcionamento das interações ajudaram a verificar o comportamento do site em diferentes situações.

O resultado é um projeto acadêmico organizado, responsivo e com recursos interativos, que poderá servir como base para futuras melhorias e implementações.

---

**Projeto acadêmico:** Simplify Industrial  
**Disciplina:** Programação Web I  
**Desenvolvido por:** Pedro Henrique Souza Mendonça