import { ArrowLeft, UserPlus, FileBarChart } from "lucide-react";
import Navbar from "../../componets/navbar";


function Bibliotecario() {
  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center justify-center pb-32  min-h-screen ml-[230px]">
      
      {/* Botão voltar 
      <div className="fixed top-2 left-60  ">
        <a href="/home">
          <ArrowLeft className="w-10 h-10 text-black" />
        </a>
      </div>
      */}

      {/* Título e subtítulo */}
      <h1 className="text-2xl md:text-5xl font-bold text-gray-900 mb-2">
        Funções de Bibliotecário
      </h1>
      <p className="text-gray-500 mb-10 text-center text-xl">
        Aqui você pode realizar funções especiais
      </p>

      {/* Botões */}
      <div className="flex gap-6  justify-center">
  
        <a href="/AddFuncionario" className=" flex items-center gap-3 bg-black text-white hover:text-red-500 px-6 py-4 rounded-xl transition ">
          <UserPlus className="w-12 h-12 text-white-300 " />
          <span className="text-left">
            <p className="leading-none text-2xl " >Adicionar Funcionário</p>
          </span>
        </a>

        {/* Botão Gerar Relatório */}
        <a href="/Relatorio" className=" flex items-center gap-3 bg-black text-white hover:text-red-500 px-6 py-4 rounded-xl transitio">
          <FileBarChart className="w-12 h-12 text-white-300" />
          <p className="leading-none text-2xl">Gerar Relatório</p>
        </a>
      </div>
    </div>
    </>
  );
}

export default Bibliotecario;
