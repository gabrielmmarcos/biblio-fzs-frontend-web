function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Tela de Login</h1>
      <a
        href="/home"
        className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
      >
        Prosseguir
      </a>
    </div>
  );
}

export default Login;
