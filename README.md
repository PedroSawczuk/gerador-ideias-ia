# Gerador de Ideias de Programação

## Introdução

O **Gerador de Ideias de Programação** é uma aplicação que utiliza a GEMINI AI para gerar ideias criativas para projetos de programação, com base em nos níveis de dificuldade, linguagens de programação e tecnologias que o usuário seleciona. O objetivo é ajudar desenvolvedores a ter ideias para novos projetos.

## Ferramentas

- React JS
- Google Gemini API
- Tailwind CSS (para estilização)

## Como Rodar

### Requisitos

- Node.js (versão 16 ou superior)
- Acesso à API do **Google Gemini** (Você precisará de uma chave da API, só clicar aqui para gerar a chave => [Google Generative AI](https://ai.google.dev/gemini-api/docs/api-key?hl=pt-br)).

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/PedroSawczuk/gerador-ideias-programacao.git
    ```
2. Instale as dependências:
   ```bash
    cd gerador-ideias-programacao
    npm install
    ```

3. Crie um arquivo .env na raiz do projeto e adicione sua chave da API do Google Gemini:
    ```bash
    VITE_GEMINI_API_KEY=YOUR_API_KEY_HERE
    ```

4. Inicie o servidor de desenvolvimento:
   ```bash
    npm run dev
    ```

Acesse a aplicação em **http://localhost:3000**

## Site do Deploy

Link da aplicação no ar é esse: [Deploy do Gerador de Ideias](https://gerador-ideias-programacao.vercel.app/)

## Licença

Este projeto está licenciado sob a **MIT License**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Autor

Desenvolvido por Pedro Sawczuk - [PedroSawczuk](https://github.com/PedroSawczuk)
