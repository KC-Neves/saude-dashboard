# 🏥 Saúde+ Dashboard

Um painel interativo e responsivo para visualização de dados de pacientes, com autenticação segura, gráficos dinâmicos e integração completa com uma API Node.js + MongoDB.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Secure%20Auth-blueviolet?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?style=for-the-badge&logo=vercel)
![Render](https://img.shields.io/badge/Backend-Render-46a2f1?style=for-the-badge&logo=render)

---

 📑 Sumário

- [🌟 Visão Geral](#-visão-geral)
- [⚙️ Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🧩 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Deploys](#-deploys)
- [🧪 Testes de API](#-testes-de-api)
- [🌈 Funcionalidades Principais](#-funcionalidades-principais)
- [👩‍💻 Desenvolvido por](#-desenvolvido-por)


---

## 🌟 Visão Geral

O Saúde+ Dashboard permite acompanhar informações de pacientes de forma prática e visual.
Com ele, você pode:

🔐 Fazer login com autenticação JWT

👩‍⚕️ Listar e filtrar pacientes

📊 Visualizar dados de saúde em gráficos interativos

🌙 Alternar entre modo claro e escuro

☁️ Consumir dados reais de uma API hospedada no Render

---

## ⚙️ Tecnologias Utilizadas

### 💻 Frontend

React + Vite

TailwindCSS

Chart.js

LocalStorage (armazenamento do token JWT)

### 🧠 Backend

Node.js + Express

MongoDB Atlas

JWT (Json Web Token)

Mongoose

bcrypt.js

---

## 🧩 Estrutura do Projeto

saude-dashboard/
├── src/
│   ├── components/        → Componentes reutilizáveis (Card, Sidebar, etc.)
│   ├── pages/             → Páginas principais (Login, Dashboard)
│   ├── data/              → Conexões e chamadas de API
│   ├── App.jsx            → Estrutura principal do app
│   └── main.jsx           → Ponto de entrada
├── public/
├── package.json
└── README.md

---

## 🚀 Deploys

Frontend (Vercel):
🔗 https://saude-dashboard-wine.vercel.app

Backend (Render):
🔗 https://api-pacientes-vh6j.onrender.com

---

## 🧪 Testes de API

Você pode testar as rotas com o Thunder Client ou Postman.

➕ Criar paciente (POST)
POST https://api-pacientes-vh6j.onrender.com/api/pacientes


Body (JSON):

{
  "nome": "Ana Souza",
  "idade": 30,
  "peso": 65,
  "altura": 1.68,
  "pressao": "120/80",
  "glicemia": 95
}

📋 Listar pacientes (GET)
GET https://api-pacientes-vh6j.onrender.com/api/pacientes

🔐 Login

Use o login configurado no backend para acessar o painel:

E-mail: kelly@email.com
Senha: 001010

---

## 🌈 Funcionalidades Principais

✅ Autenticação JWT
✅ Dashboard Responsivo
✅ Modo Escuro/Claro
✅ Filtro de Pacientes
✅ Gráficos com Chart.js
✅ Integração com API Node.js

---

## 👩‍💻 Desenvolvido por

Kelly Cristina Neves 
💼 GitHub - https://github.com/KC-Neves

🌐 Projeto: Saúde+ Dashboard