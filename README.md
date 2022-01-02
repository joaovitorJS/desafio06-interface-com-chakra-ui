<h1 align="center">
  <img 
    src="./public/logo.svg" 
    height="100"
    style="width: 400px" 
  />
</h1>

<p align="center">
  <a>
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/joaovitorJS/desafio05-criando-projeto-do-zero">
  </a>  
  <a>
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/joaovitorJS/desafio05-criando-projeto-do-zero">
  </a>
  <a>
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/joaovitorJS/desafio05-criando-projeto-do-zero">
  </a>
  <a href="https://lbesson.mit-license.org/"        target="_blank>
    <img alt="MIT license" src="https://img.shields.io/badge/License-MIT-blue.svg">
  </a>
</p>
<p align="center">

  <a target="_blank" href="https://reactjs.org/">
    <img alt="ReactJS" src="https://img.shields.io/static/v1?color=blue&label=React&message=JS&?style=plastic&logo=React">
  </a>

  <a target="_blank" href="https://nextjs.org/">
      <img alt="NextJS" src="https://img.shields.io/static/v1?color=white&label=Next&message=JS&?style=plastic&logo=Next.js">
  </a>
</p>

<h2 align="center"> 
 <strong>Spacetraveling</strong> | Complete 🚀 
</h2>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-este-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#-licença">Licença</a>
</p>

## 💻 Sobre o projeto

O **Spacetraveling** é uma aplicação que tem como objetivos trazer post usando o Prismic CMS como gerenciador de contúedo.

##### Desafio - Criando um projeto do zero do   **Treinamento Ignite - Trilha ReactJS** oferecida pela [Rocketseat](https://rocketseat.com.br/).

<br>

---
## 🎨 Layout
<br>

### **Web**

<p align="center">
  <img src="./.github/run.gif" alt="Demostração de uso" title="Exemplo do App Web" width="900px"/>
</p>
 <br>
<p align="center">
  <img src="./.github/home.png" alt="Layout Inicial" width="49%" height="260px"/>
  <img src="./.github/post.png" alt="Laout da página de Post" width="49%" height="260px"/>
</p>



---

## 🚀 Como executar este projeto 

### Pré-requisitos
Para executar esta aplicação, você deverá ter instalado em sua máquina as seguintes ferramentas:
* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/get-npm) ou [Yarn](https://yarnpkg.com/)

### 🎲 Rodando a aplicação web

```bash
# Clone este repositório -> usando SSH
$ git clone git@github.com:joaovitorJS/desafio05-criando-projeto-do-zero.git

# Acesse a pasta do projeto no seu terminal
$ cd desafio05-criando-projeto-do-zero

## Passos com yarn
# Instale as dependências
$ yarn install

# Antes de executar o 'yarn dev' é importante configurar o arquivo .env.local

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

## Passos com npm
# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor web inciará na porta:3000 - 
# acesse http://localhost:3000 em seu navegador para ver a aplicação funcionando
```

* Configurando o arquivo *.env.local*:
  *  Logo após tem feito o *git clone*, na raiz do projeto terá um arquivo chamado *.env.example*. Renomeie trocando por  *.env.local*.

  * Para ter essa váriavel ambiente, crie uma conta no Prismic CMS
  * Depois crie um repository com o nome que preferir

  * Em **Custom Types** (dentro do repository):
  Crie um **Repeatable Type** com o nome de '*Posts*'

  * No **JSON editor** ao lado de **Build mode** cole seguinte JSON:
 
* <details>
    <summary>JSON editor</summary>
 
    ```json
    {
    "Main" : {
      "uid" : {
        "type" : "UID",
        "config" : {
          "label" : "slug"
        }
      },
      "title" : {
        "type" : "Text",
        "config" : {
          "label" : "title"
        }
      },
      "subtitle" : {
        "type" : "Text",
        "config" : {
          "label" : "subtitle"
        }
      },
      "author" : {
        "type" : "Text",
        "config" : {
          "label" : "author"
        }
      },
      "banner" : {
        "type" : "Image",
        "config" : {
          "constraint" : { },
          "thumbnails" : [ ],
          "label" : "banner"
        }
      },
      "content" : {
        "type" : "Group",
        "config" : {
          "fields" : {
            "heading" : {
              "type" : "Text",
              "config" : {
                "label" : "heading"
              }
            },
            "body" : {
              "type" : "StructuredText",
              "config" : {
                "multi" : "paragraph,strong,em,hyperlink,image,embed,list-item,o-list-item,rtl",
                "allowTargetBlank" : true,
                "label" : "body"
              }
            }
          },
          "label" : "content"
        }
      }
    }
  } 
  ```
  </details>

* Após ter feito esses passos, crie documentos (em 'Documents') para testar

* Pegando a PRISMIC_API_ENDPOINT:
  * Em **Settings**, vai em **API & Security**
  * Copie o endereço que está em **API endpoint**
  * Cole o endereço copiado no arquivo *.env.local*
  * Ficando, por exemplo: PRISMIC_API_ENDPOINT=https://nomedorepository.prismic.io/api/v2
  
* Feito todos esses passos é só executar a aplicação.
---

## 🛠 Tecnologias

* **[TypeScript](https://www.typescriptlang.org/)**
* **[ReactJS](https://pt-br.reactjs.org/)**
* **[NextJS](https://nextjs.org/)**
* **[Sass](https://sass-lang.com/install)**
* **[Prismic](https://prismic.io/docs)**
* **[Utterances](https://utteranc.es/)**



> Veja o arquivo  [package.json](https://github.com/joaovitorJS/nlw-05-podcastr/blob/master/package.json) para ver todas as dependências do projeto

---

## 🤔 Como contribuir para este projeto?

- Faça um **fork** do projeto;
- Crie uma nova branch com as suas alterações: `git checkout -b my-feature`, ou se preferir, `git branch my-feature && git git checkout my-feature`
- Salve as alterações e crie uma mensagem de commit contando o que você fez:`git commit -m "feature: My new feature"`
- Envie as suas alterações: `git push origin my-feature`

> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)

---
## 👨🏻‍💻 Autor
<br>
<p>
  <img src="https://github.com/joaovitorJS.png" alt="João Vitor" width="150px" style="border-radius: 75px" />
</p>

## **[João Vitor](https://github.com/joaovitorJS)**

#### Entre em contato

<br>

<p>
  <a href="https://www.instagram.com/jaovitooor/">
  <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"/>
  </a>
  &nbsp;
  <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-oliveira-85a886174/" target="_blank">
  <img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin"/>
  </a>
  &nbsp;
  <a href="mailto:rgm38342@comp.uems.br">
  <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail"/>
  </a>
</p>

---

## 📝 Licença
Este projeto esta sobe a licença [MIT](https://opensource.org/licenses/MIT).