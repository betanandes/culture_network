import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      alert(
        "Cadastro realizado com sucesso! Verifique seu e-mail para confirmação.",
      );
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#121212] p-8 rounded-2xl border border-white/10 shadow-2xl">
        <h2 className="text-2xl font-bold text-white text-center mb-6 tracking-wide">
          CRIAR CONTA CUNET
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
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

          <input
            type="password"
            placeholder="Confirme sua senha"
            className="w-full p-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white outline-none focus:border-[#ED1E79] transition-all"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-[#ED1E79] hover:bg-[#c61966] text-white font-bold rounded-lg transition-all disabled:opacity-50"
          >
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Já tem uma conta?{" "}
            <Link to="/login" className="text-[#ED1E79] hover:underline">
              Entre aqui
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
