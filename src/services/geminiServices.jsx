import { GoogleGenerativeAI } from "@google/generative-ai";

// Aqui pega a chave da API do GEMINI. 
// Renomeie o ".env-example" para ".env" e adicione a sua chave
// Link para pegar a chave: https://ai.google.dev/gemini-api/docs/api-key?hl=pt-br
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateIdea = async (difficulty, language, technology) => {

// Prompt para gerar a ideia. Passando como parâmetro a dificuldade, linguagem e a tecnologia
const prompt = `Olá! Você é um gerador de ideias de programação! Gere uma ideia de nível ${difficulty}, focado na linguagem ${language} e a tecnologia ${technology || "não precisa ser uma específica."}. Forneça a ideia com a seguinte estrutura: 
forneça um título curto e chamativo para a ideia.
Uma breve descrição do projeto.
Funcionalidades principais.
Tecnologias que poderiam ser utilizadas.
Desafios do projeto.
Descreva o projeto de forma detalhada, sem qualquer formatação em Markdown, apenas como texto simples para ser usado em JSON.`;



try {
    // gera a ideia com a IA
    const result = await model.generateContent(prompt);
  
    // se houver sucesso, crie um objeto com a ideia
    const ideaJson = {
      success: true,
      idea: result.response.text(), // pega somente a ideia da IA
    };
  
    return JSON.stringify(ideaJson, null, 2); 
  } catch (error) {
    const errorJson = {
      success: false,
      error: error.message, 
    };
  
    return JSON.stringify(errorJson, null, 2); 
  }
  
};
