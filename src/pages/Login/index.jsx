
import fotoBiblio from "../../img/fotoBiblio.png";

function Login() {
  return (
  <div className="flex w-screen h-screen items-center justify-center bg-white">
 
  <div className="flex flex-col w-1/2 max-w-md p-10">
    <h1 className="text-5xl font-bold text-red-600 mb-2">Bem vindo!</h1>
    <p className="text-gray-600 mb-6 text-xl">Faça login para continuar</p>

    
    <div className="mb-4">
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>

    <div className="mb-2">
      <input
        type="password"
        placeholder="Senha"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>



    <a href="/home" className="bg-red-600 text-white text-center  font-semibold py-2 rounded-md hover:bg-red-700 transition">
      <button className="" >
        Entrar
      </button>
    </a>

  </div>


  <div className="w-1/2 h-full flex items-center justify-center">
    <img
      src={fotoBiblio}
      alt="Biblioteca"
      className="rounded-lg shadow-lg object-cover max-h-[80%]"
    />
  </div>
</div>

  );
}

export default Login;
