import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import logo from "../../assets/logos/cunet_logo_1.png"; // Logótipo rosa oficial

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/login`, // Redireciona o utilizador de volta após redefinir
    });

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      alert(
        "E-mail de recuperação enviado com sucesso! Verifique a sua caixa de entrada.",
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#121212] p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Efeito Glow Rosa no Topo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-[#ED1E79] blur-sm rounded-full" />

        {/* Cabeçalho do Formulário */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={logo}
            alt="CUNET Logo"
            className="h-12 w-auto mb-4 object-contain"
            onError={(e) => {
              (e.target as HTMLElement).style.display = "none";
            }}
          />
          <h2 className="text-2xl font-bold text-white tracking-wide">
            RECUPERAR SENHA
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Introduza o e-mail associado à sua conta
          </p>
        </div>

        <form onSubmit={handleResetPassword} className="space-y-6">
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              E-mail
            </label>
            <input
              type="email"
              placeholder="Exemplo: seuemail@dominio.com"
              className="w-full p-3 bg-[#1a1a1a] border border-white/5 rounded-lg text-white outline-none focus:border-[#ED1E79] focus:ring-1 focus:ring-[#ED1E79] transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-[#ED1E79] hover:bg-[#FF4A9D] text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-[#ED1E79]/20 flex items-center justify-center disabled:opacity-50"
          >
            {loading ? "A enviar..." : "ENVIAR LINK"}
          </button>

          <p className="text-center text-sm text-gray-400 mt-6">
            Lembrou-se da senha?{" "}
            <Link
              to="/login"
              className="text-[#ED1E79] hover:text-[#FF4A9D] transition-colors font-medium"
            >
              Voltar ao login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
