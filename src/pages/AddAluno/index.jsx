import { useState } from "react";

import Navbar from "../../componets/navbar";


function AddAluno() {
  const [instituicao, setInstituicao] = useState("");
  const [curso, setCurso] = useState("");

  const cursosFatec = [
    "Análise e Desenvolvimento de Sistemas",
    "Desenvolvimento Multiplataforma",
    "Logística",
    "Gestão Empresarial",
  ];

  const cursosEtec = [
    "Administração",
    "Eletrônica",
    "Enfermagem",
  ];

  return (
    <>
      <Navbar />
      <div className="ml-64 pt-10  ">
        <div className=" h-fit flex flex-col bg-white ">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">Formulário de Cadastro</h1>
          <p className="text-gray-500 mb-10 text-xl">
            Preencha os dados abaixo para cadastrar o aluno.
          </p>


          <div className="grid grid-cols-2 gap-6 pr-10">
            {/* Nome */}
            <div className="mb-4">
              <h2 className="text-gray-500">Nome completo</h2>
              <input
                type="text"
                placeholder="Digite o nome completo"
                className="w-full px-4 py-2 border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* RA */}
            <div className="mb-4">
              <h2 className="text-gray-500">RA</h2>
              <input
                type="text"
                placeholder="Digite o RA"
                className="w-full px-4 py-2 border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* CPF */}
            <div className="mb-4">
              <h2 className="text-gray-500">CPF</h2>
              <input
                type="text"
                placeholder="Digite o CPF"
                className="w-full px-4 py-2 border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <h2 className="text-gray-500">Email</h2>
              <input
                type="email"
                placeholder="Digite o email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            {/* Telefone */}
            <div className="mb-4">
              <h2 className="text-gray-500">Telefone</h2>
              <input
                type="text"
                placeholder="(xx) x xxxx-xxxx"
                className="w-full px-4 py-2 border border-gray-300 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Senha */}
            <div className="mb-4">
              <h2 className="text-gray-500">Senha</h2>
              <input
                type="password"
                placeholder="Digite a senha"
                className="w-full px-4 py-2 border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Instituição */}
            <div className="mb-4">
              <h2 className="text-gray-500">Instituição</h2>
              <select
                value={instituicao}
                onChange={(e) => {
                  setInstituicao(e.target.value);
                  setCurso(""); // resetar curso ao trocar instituição
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">Selecione a instituição</option>
                <option value="Fatec">Fatec</option>
                <option value="Etec">Etec</option>
              </select>
            </div>

            {/* Curso */}
            <div className="mb-4">
              <h2 className="text-gray-500">Curso</h2>
              <select
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-red-500"
                disabled={!instituicao}
              >
                <option value="">Selecione o curso</option>
                {instituicao === "Fatec" &&
                  cursosFatec.map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
                {instituicao === "Etec" &&
                  cursosEtec.map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
              </select>
            </div>

            {/* Data de Início */}
            <div className="mb-4">
              <h2 className="text-gray-500">Data de Início</h2>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Data de Término */}
            <div className="mb-4">
              <h2 className="text-gray-500">Data de Término</h2>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
          {/* Botão de salvar */}
          <div className="mt-2 ">
            <button
              type="submit"
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md 
                       shadow-md hover:bg-red-700 transition"
            >
              Cadastrar Funcionário
            </button>
          </div>


        </div>
      </div>
    </>
  );
}

export default AddAluno;
