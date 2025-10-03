import { useState } from "react";
import { Search, User, Plus } from "lucide-react";
import Navbar from "../../componets/navbar";


function Alunos() {

  // Lista simulada de alunos
  const [alunos] = useState([
    { id: 1, nome: "David Vasconcelos", situacao: "Ok" },
    { id: 2, nome: "Danilo Alves do Santos", situacao: "Livro Atrasado" },
    { id: 3, nome: "Damasio Oliveira", situacao: "Ok" },
  ]);

  const [busca, setBusca] = useState("");

  // Filtrar alunos pela busca
  const alunosFiltrados = alunos.filter((aluno) =>
    aluno.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (

    <>
      <Navbar />
      <div className="min-h-screen bg-white p-6 relative ml-64">
        {/* Barra de pesquisa */}
        <div className="flex items-center bg-black rounded-full px-4 py-2 mb-6">
          <input
            type="text"
            placeholder="Pesquisar aluno..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="bg-black text-white placeholder-gray-400 outline-none flex-1"
          />
          <Search className="text-white w-5 h-5" />
        </div>

        {/* Texto de resultado */}
        <p className="mb-6 text-gray-700">
          Confira as{" "}
          <strong>{alunosFiltrados.length} resposta(s)</strong> encontradas com a
          pesquisa <strong>{busca || "..."}</strong>
        </p>

        {/* Lista de alunos */}
        <div className="flex flex-col gap-4">
          {alunosFiltrados.map((aluno) => (
            <div
              key={aluno.id}
              className="flex items-center justify-between bg-black text-white p-4 rounded-xl"
            >
              <div className="flex items-center gap-4">
                <User className="w-8 h-8" />
                <div>
                  <p className="font-medium">{aluno.nome}</p>
                  <p className="text-sm text-gray-300">
                    Situação: {aluno.situacao}
                  </p>
                </div>
              </div>
              <a
                href={`/aluno/${aluno.id}`}
                className="bg-red-700 px-4 py-2 rounded-md font-semibold hover:bg-red-800 transition"
              >
                Ver Perfil
              </a>
            </div>
          ))}
        </div>

        {/* Botão fixo de adicionar aluno */}
        <a
          href="/AddAluno"
          className="absolute button-0 right-0 bg-red-700 hover:bg-red-800 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-2xl transition"
        >
          <Plus className="w-6 h-6" />
        </a>
      </div>
    </>
  );
}

export default Alunos;
