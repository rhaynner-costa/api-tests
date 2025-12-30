# 🚀 Automação de Testes de API com TypeScript

Este projeto é um framework de testes automatizados de API utilizando **TypeScript** e **SuperTest**. O objetivo é testar a API [ServeRest](https://serverest.dev) de forma direta, rápida e organizada, utilizando boas práticas de mercado como **Service Objects**.

## 🛠️ Tecnologias Utilizadas

*   **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript.
*   **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática (ajuda a evitar erros de digitação e melhora o autocompletar).
*   **[SuperTest](https://www.npmjs.com/package/supertest)**: Biblioteca para realizar requisições HTTP e validações de API de forma fluida.
*   **[Mocha](https://mochajs.org/)**: Framework de testes que fornece a estrutura (`describe`, `it`) e o executor (runner).
*   **[Chai](https://www.chaijs.com/)**: Biblioteca de asserções BDD/TDD (`expect`) para validar os resultados dos testes.

---

## ⚙️ Configuração e Instalação

Siga os passos abaixo para configurar o ambiente em sua máquina:

1.  **Pré-requisitos**: Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2.  **Instalar Dependências**: Abra o terminal na raiz do projeto e execute:

npm install

---

MEU-PROJETO
│
├── src
│ ├── services # CAMADA DE SERVIÇO: Encapsula as chamadas para a API (GET, POST, etc).
│ │ └── LoginService.ts
│ │
│ └── types # TIPAGEM: Interfaces do TypeScript que definem o formato dos dados (Requests/Responses).
│ └── ServerestTypes.ts
│
├── test # CAMADA DE TESTE: Contém os arquivos de teste (.spec.ts) com os cenários.
│ └── login.spec.ts
│
├── package.json # Gerenciamento de dependências e scripts de execução.
├── tsconfig.json # Configurações do compilador TypeScript.
└── README.md # Documentação do projeto.


---

## ▶️ Como Executar os Testes

Para rodar a bateria de testes automatizados, utilize o comando:

npm test