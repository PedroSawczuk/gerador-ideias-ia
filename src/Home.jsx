import { useState } from 'react';
import { generateIdea } from './services/geminiServices';

function Home() {
  const [difficulty, setDifficulty] = useState(1);
  const [language, setLanguage] = useState('');
  const [technology, setTechnology] = useState('');
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateIdea = async () => {
    setLoading(true);
    const response = await generateIdea(difficulty, language, technology);

    try {
      const parsedResponse = JSON.parse(response); 
      setIdea(parsedResponse); 
    } catch (error) {
      console.error('Erro ao parsear JSON:', error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
        <h1 className="text-3xl font-semibold text-center mb-6 text-orange-600">Gerador de Ideias de Programação</h1>

        <div className="mb-4">
          <label className="block text-lg mb-2 text-gray-700">Dificuldade:</label>
          <input
            type="range"
            min="1"
            max="10"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full h-2 bg-gray-300 rounded-lg"
          />
          <div className="text-center text-sm text-gray-600">{difficulty}</div>
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2 text-gray-700">Selecione a Linguagem:</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Selecione</option>
            <option value="Python">Python</option>
            <option value="JavaScript">JavaScript</option>
            <option value="JavaScript">Dart</option>
            <option value="Java">Java</option>
            <option value="C#">C#</option>
            <option value="Ruby">Ruby</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-lg mb-2 text-gray-700">Selecione a Tecnologia (opcional):</label>
          <input
            type="text"
            placeholder="Exemplo: Django, Flutter, React"
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <button
          onClick={handleGenerateIdea}
          disabled={loading}
          className="w-full py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:bg-gray-400 transition-all"
        >
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            </div>
          ) : (
            'Gerar Ideia'
          )}
        </button>

        {idea && (
          <div className="mt-8 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{idea.title}</h2>
            <p className="whitespace-pre-wrap break-words p-4 rounded-lg">
              {idea.idea}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
