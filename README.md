# Design System - StoryBook
![NPM Version](https://img.shields.io/npm/v/%40anderson-ignite-ui%2Freact?style=flat-square)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/andersondev96/05-design-system/release.yml?style=flat-square&color=blue)
![GitHub last commit](https://img.shields.io/github/last-commit/andersondev96/05-design-system?style=flat-square&color=blue)


Neste projeto é criado um Design System utilizando React.js, abordando elementos essenciais, como cores, tipografia, botões e muito mais. A documentação é apresentada no **Storybook**, e o sistema está disponível como um pacote **npm**, permitindo a sua integração em qualquer projeto front-end.

🔗 Link do projeto: [Design System - Storybook](https://andersondev96.github.io/05-design-system)

---

### 📌 Índice
- [💻 Capturas de tela](#-capturas-de-tela)
- [🚀 Componentes](#-componentes)
- [🧑‍💻 Tecnologias utilizadas](#-tecnologias-utilizadas)
- [🎨 Layout do projeto](#-layout-do-projeto)
- [⚙ Como executar o projeto](#-como-executar-o-projeto)
- [🌍 Como utilizar os componentes](#-como-utilizar-os-componentes)
- [🤝 Como contribuir](#-como-contribuir)
- [👥 Autor](#-autor)

## 💻 Capturas de tela

<p align="center">
  <img src="https://github.com/user-attachments/assets/4e39065e-b864-4806-9cfa-48386c38074c" width="30%">
  <img src="https://github.com/user-attachments/assets/816ef1a0-365f-430b-915f-8fbddda3e9e2" width="30%">
  <img src="https://github.com/user-attachments/assets/6864bff4-7abf-4a78-abdf-fc958439fa6f" width="30%">
</p>

---

# 🚀 Componentes

- [ ] Text
- [ ] Heading
- [ ] Box / Card
- [ ] Button
- [ ] TextInput
- [ ] Textarea
- [ ] Checkbox
- [ ] Avatar
- [ ] MultiStep
- [ ] Toast
- [ ] Tooltip

---

## 🧑‍💻 Tecnologias utilizadas
Ao longo do desenvolvimento do projeto foram utilizadas as seguintes tecnologias:

[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Radix UI](https://img.shields.io/badge/radix%20ui-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white)](https://www.radix-ui.com/)

---
## 🎨 Layout do projeto
Confira o layout do projeto no Figma.
- [Layout do projeto](https://www.figma.com/design/NYfrAhWNH0cyrUXjBt2XJL/Ignite-Call?node-id=0-1&t=flsUTrlo4XcKR8eD-1)

## ⚙ Como executar o projeto
Siga os seguintes passos para executar o projeto localmente:

1. Para executar o projeto, primeiro clone esse repositório:
    ```
    git clone https://github.com/andersondev96/05-design-system
    ```

2. Acesse a pasta *05-design-system*:
    ```
    cd 05-design-system
    ```

3. Instale as dependências:
    ```
    npm install
    ```

4. Execute o projeto:
    ```
    npm run dev
    ```

    A aplicação está disponível em: [http://localhost:6006](http://localhost:6006)

## 🌍 Como utilizar os componentes
Para utilizar os componentes em seu projeto, siga os passos abaixo: 

1. Acesse o pacote no **npm**: [@anderson-ignite-ui](https://www.npmjs.com/package/@anderson-ignite-ui/react)

2. Instale a biblioteca no seu projeto: 
    ```
    npm i @anderson-ignite-ui/react
    ```

3. Importe e utilize os componentes em seu código. Veja o exemplo do componente `<Button>`.

    ```ts
    import { Button } from '@anderson-ignite-ui/react';
    
    <Button
      onClick={function Ms(){}}
      size="md"
      variant="primary"
    >
      Send
    </Button>
    ```

    > Consulte a documentação completa do projeto para mais detalhes sobre utilizar outros componentes.

## 🤝 Como contribuir
1. Faça um fork do repositório.

2. Crie uma nova branch com as suas alterações:
    ```
    git checkout -b my-feature
    ```
3. Salve as suas alterações e crie uma mensagem de commit, dizendo o que você fez: 
    ```
    git commit -m "feature: My new feature"
    ```
4. Envie as suas alterações: 
    ```
    git push origin my-feature
    ```

## 👥 Autor

<div style="display:flex; flex-direction:column; align-items: center;">

<a href="https://www.linkedin.com/in/anderson-fernandes96/">
<img src="https://avatars.githubusercontent.com/u/49786548?v=4" width="64" style="border: 2px solid blue; border-radius: 50px" />
</a>

**Anderson Fernandes Ferreira**

[![Instagram](https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/anderson_ff13)
[![Gmail](https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white)](mailto:andersonfferreira96@gmail.com.br)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anderson-fernandes96/)
