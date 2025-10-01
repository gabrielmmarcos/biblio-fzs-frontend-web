import { useState } from "react";
import Navbar from "../../componets/navbar";

function AddFuncionario() {
  const [cargo, setCargo] = useState("Auxiliar");

  return (
    <>
      <Navbar />
      <div className="ml-64 pt-10 ">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 ">
          Formulário de Cadastro
        </h1>
        <p className="text-gray-500 mb-10 text-xl">
          Preencha os dados abaixo para cadastrar um funcionário.
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

          {/* Turno */}
          <div className="mb-4">
            <h2 className="text-gray-500">Turno</h2>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="Manhã">Manhã</option>
              <option value="Tarde">Tarde</option>
              <option value="Noite">Noite</option>
            </select>
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

          {/* Cargo */}
          <div className="mb-4">
            <h2 className="text-gray-500">Cargo</h2>
            <select
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="Auxiliar">Auxiliar</option>
              <option value="Bibliotecário">Bibliotecário</option>
            </select>
          </div>

          {/* CRB */}
          {cargo === "Bibliotecário" && (
            <div className="mb-4">
              <h2 className="text-gray-500">CRB</h2>
              <input
                type="text"
                placeholder="Digite o CRB"
                className="w-full px-4 py-2 border border-gray-300 rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          )}
        </div>

        {/* Botão de salvar */}
        <div className="mt-10 pr-10">
          <button
            type="submit"
            className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md 
                       shadow-md hover:bg-red-700 transition"
          >
            Cadastrar Funcionário
          </button>
        </div>
      </div>
    </>
  );
}

export default AddFuncionario;
