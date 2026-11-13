# 🚗 Bessa Veículos Macapá — Plataforma Web & Painel Administrativo

Aplicação web desenvolvida para gerenciamento de estoque e vitrine digital de veículos da **Bessa Veículos** (Macapá - AP)[cite: 1]. O projeto conta com vitrine pública responsiva, contato integrado via WhatsApp e área administrativa para gestão de veículos, vendedores e clientes[cite: 1, 3, 4, 5].

> **Contexto Acadêmico:** Projeto desenvolvido como atividade prática do curso de **Ciência da Computação** na **Universidade Positivo** (Aluno: Guilherme Gibson Rodrigues — RGM: 50059343)[cite: 1].

---

## ✨ Funcionalidades

### 🌐 Vitrine Pública (`index.html`)
* **Catálogo Dinâmico:** Exibição automática dos veículos cadastrados em estoque com foto, modelo, ano, descrição e preço formatado em Real (`BRL`)[cite: 1, 3].
* **Atendimento Direto via WhatsApp:** Formulário de contato que valida os dados do cliente e redireciona diretamente para o WhatsApp da loja com mensagem pré-preenchida[cite: 1, 3].
* **Design Responsivo:** Layout escuro (*dark mode*) adaptado para desktop e dispositivos móveis[cite: 5].

### 🔐 Área Administrativa (`admin.html` & `painel.html`)
* **Controle de Acesso:** Autenticação básica com proteção de rota via `sessionStorage`[cite: 2, 4].
* **CRUD Completo de Veículos:** Cadastro, edição, listagem e exclusão de carros no estoque[cite: 3, 4].
* **Gestão de Equipe e Clientes:** Cadastro e manutenção de vendedores (nome e matrícula) e clientes (nome e telefone)[cite: 3, 4].
* **Persistência Local:** Armazenamento de dados no navegador utilizando `localStorage`[cite: 3].

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica das páginas[cite: 1, 2, 4].
* **CSS3:** Estilização customizada com Flexbox, CSS Grid e Media Queries para responsividade[cite: 5].
* **JavaScript (ES6+):** Manipulação do DOM, validação de formulários, formatação de moeda (`toLocaleString`) e gerenciamento de estado via `localStorage` e `sessionStorage`[cite: 2, 3].

---

## 📂 Estrutura de Arquivos

```text
bessa-veiculos/
├── index.html      # Vitrine pública e formulário de contato[cite: 1]
├── admin.html      # Tela de login da área restrita
├── painel.html     # Painel administrativo (Veículos, Vendedores e Clientes)[cite: 4]
├── styles.css      # Folha de estilos global e responsiva[cite: 5]
├── app.js          # Lógica de CRUD, vitrine dinâmica e integração WhatsApp[cite: 3]
└── img/
    └── logo.png    # Identidade visual da loja[cite: 1]
