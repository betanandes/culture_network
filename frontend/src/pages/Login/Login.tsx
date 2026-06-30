import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login realizado com sucesso!");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#121212] p-8 rounded-2xl border border-white/10 shadow-2xl">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Acessar CUNET
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full p-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white outline-none focus:border-[#ED1E79] transition-all"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Sua senha"
            className="w-full p-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white outline-none focus:border-[#ED1E79] transition-all"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full p-3 bg-[#ED1E79] hover:bg-[#c61966] text-white font-bold rounded-lg transition-all"
          >
            ENTRAR
          </button>
          <p className="text-center text-sm text-gray-500 mt-4">
            Não tem uma conta?{" "}
            <Link to="/register" className="text-[#ED1E79] hover:underline">
              Registre-se aqui
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
