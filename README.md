# 📚 Sistema de Cadastro e Gerenciamento de Alunos

Um projeto full stack robusto, desenvolvido com as tecnologias mais modernas do mercado! Este sistema permite o cadastro, listagem, edição e remoção de alunos, upload de fotos, autenticação segura e integração com banco de dados MySQL hospedado em servidor Linux próprio via SSH.

---

## ✨ Principais Funcionalidades

- Cadastro, edição e exclusão de alunos
- Upload e exibição de fotos dos alunos
- Autenticação de usuários com JWT
- Validação de formulários e feedback visual
- Listagem paginada e busca de alunos
- Rotas protegidas e navegação SPA
- Integração total com banco de dados MySQL remoto
- Deploy real em servidor Linux via SSH

---

## 🗂️ Estrutura do Projeto

```
/consumirapi
  /frontend   → Aplicação React (interface do usuário)
  /BackEnd/API_REST → API Node.js/Express (servidor e banco de dados)
  README.md
```

---

## 🚀 Tecnologias Utilizadas

- **Frontend:** React.js, Redux, Redux-Saga, React Router, Styled-Components, React-Toastify, Axios
- **Backend:** Node.js, Express.js, API RESTful, JWT, CORS, Multer
- **Banco de Dados:** MySQL (hospedado em servidor Linux próprio)
- **Infraestrutura:** Linux, SSH, MySQL Workbench
- **Ferramentas:** Prettier, ESLint, Insomnia, Git, GitHub

---

## 🛠️ Como rodar o projeto

### Frontend

```powershell
cd frontend
npm install
npm start
```

### Backend

```powershell
cd BackEnd/API_REST
npm install
npm run dev
```

> **Obs:** O backend está em produção em um servidor Linux próprio, mas todo o código está disponível aqui para consulta, testes e deploy.

---

## 🔒 Diferenciais

- Backend e banco de dados hospedados em servidor Linux próprio, com acesso via SSH
- Experiência real de deploy, infraestrutura e segurança
- Código limpo, modular e padronizado com Prettier e ESLint
- Testes de API automatizados com Insomnia
- Upload de imagens com Multer e armazenamento organizado

---

## 👤 Autor

- [Carlos Alberto Carvalho Filho]
- (https://github.com/cac498)

---

Contribuições são bem-vindas! Fique à vontade para abrir issues, sugerir melhorias ou enviar um pull request.


