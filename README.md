# 🚗 Bessa Veículos Macapá — Plataforma Web & Painel Administrativo

Aplicação web desenvolvida para gerenciamento de estoque e vitrine digital de veículos da **Bessa Veículos** (Macapá - AP). O projeto conta com vitrine pública responsiva, contato integrado via WhatsApp e área administrativa para gestão de veículos, vendedores e clientes.

> **Contexto Acadêmico:** Projeto desenvolvido como atividade prática do curso de **Ciência da Computação** na **Universidade Positivo** (Aluno: Guilherme Gibson Rodrigues — RGM: 50059343).

---

## ✨ Funcionalidades

### 🌐 Vitrine Pública (`index.html`)
* **Catálogo Dinâmico:** Exibição automática dos veículos cadastrados em estoque com foto, modelo, ano, descrição e preço formatado em Real (`BRL`).
* **Atendimento Direto via WhatsApp:** Formulário de contato que valida os dados do cliente e redireciona diretamente para o WhatsApp da loja com mensagem pré-preenchida.
* **Design Responsivo:** Layout escuro (*dark mode*) adaptado para desktop e dispositivos móveis.

### 🔐 Área Administrativa (`admin.html` & `painel.html`)
* **Controle de Acesso:** Autenticação básica com proteção de rota via `sessionStorage`.
* **CRUD Completo de Veículos:** Cadastro, edição, listagem e exclusão de carros no estoque.
* **Gestão de Equipe e Clientes:** Cadastro e manutenção de vendedores (nome e matrícula) e clientes (nome e telefone).
* **Persistência Local:** Armazenamento de dados no navegador utilizando `localStorage`.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica das páginas.
* **CSS3:** Estilização customizada com Flexbox, CSS Grid e Media Queries para responsividade.
* **JavaScript (ES6+):** Manipulação do DOM, validação de formulários, formatação de moeda (`toLocaleString`) e gerenciamento de estado via `localStorage` e `sessionStorage`.

---

## 📂 Estrutura de Arquivos

```text
Bessa-veiculos/
├── index.html      # Vitrine pública e formulário de contato
├── admin.html      # Tela de login da área restrita
├── painel.html     # Painel administrativo (Veículos, Vendedores e Clientes)
├── styles.css      # Folha de estilos global e responsiva
├── app.js          # Lógica de CRUD, vitrine dinâmica e integração WhatsApp
└── img/
    └── logo.png    # Identidade visual da loja
