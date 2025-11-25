import React from 'react';
import { Link } from './types';
import { LINKS, TESTIMONIALS, MAIN_CONTENT_LINKS, VIRAL_LINKS } from './constants';

// --- Componente: Botão de Link com Imagem (Social) ---
const SocialLinkButton: React.FC<{ link: Link; index: number }> = ({ link, index }) => {
  return (
    <div className="w-full animate-fade-in-up" style={{ animationDelay: `${(index + 5) * 100}ms` }}>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group relative rounded-2xl transition-all duration-300 ease-out hover:-translate-y-1"
        aria-label="Link social"
      >
        <div className="relative overflow-hidden rounded-2xl shadow-md shadow-[#A88BD4]/20">
          <img
            src={link.imageUrl}
            alt=""
            className="w-full h-auto object-cover rounded-2xl border-4 transition-transform duration-500 group-hover:scale-105"
            style={{ borderColor: link.borderColor }}
          />
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </a>
    </div>
  );
};

// --- Componente: Depoimento ---
const TestimonialCard: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex-shrink-0 w-64 p-4 bg-white/60 backdrop-blur-md rounded-2xl border border-[#CBB7F6]/50 shadow-sm snap-center mx-2 first:ml-0 last:mr-0">
    <p className="text-sm text-gray-700 italic text-center leading-relaxed">"{text}"</p>
    <div className="flex justify-center mt-2 gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className="text-[#A88BD4] text-xs">★</span>
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden font-poppins text-gray-800 bg-[#EDEDED]">
      
      {/* --- Fundo Claro e Suave --- */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#EDEDED] via-[#F8F5FF] to-[#CBB7F6]/30 -z-30"></div>
      {/* Textura sutil opcional */}
      <div className="fixed inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] -z-20 pointer-events-none"></div>

      <main className="relative z-10 flex flex-col items-center min-h-screen w-full px-4 py-10 selection:bg-[#CBB7F6] selection:text-white">
        <div className="w-full max-w-[420px] flex flex-col items-center text-center gap-6">
          
          {/* 1. TÍTULO PRINCIPAL */}
          <header className="mt-2 animate-fade-in-up flex flex-col items-center gap-2">
            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-[#A88BD4]">
              Ei, que bom ver você aqui! Eu sou a Raquel Rosa
            </h1>
            {/* ⭐ 1. Header com frase curta e forte (branding) */}
            <p className="text-[#8F74C6] font-medium text-lg leading-tight mt-1 max-w-[90%]">
              Guio mulheres que querem parar de descontar na comida.
            </p>
          </header>

          {/* 2. FOTO DE PERFIL */}
          <div className="animate-fade-in-up delay-100">
            <div className="relative group cursor-pointer">
              {/* Sombra Lilás */}
              <div className="absolute inset-0 rounded-full bg-[#CBB7F6] blur-2xl opacity-50 animate-pulse"></div>
              
              {/* Borda Gradiente Story */}
              <div className="relative p-[5px] bg-[conic-gradient(from_0deg,_#FF8FD7,_#A88BD4,_#CBB7F6,_#FF8FD7)] rounded-full shadow-xl shadow-[#A88BD4]/20 transition-transform duration-500 ease-out group-hover:scale-105">
                <div className="bg-white p-[4px] rounded-full overflow-hidden">
                  <img
                    src="https://i.imgur.com/hMoNv0v.png"
                    alt="Raquel Rosa"
                    className="w-40 h-40 lg:w-44 lg:h-44 rounded-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3. QUEM SOU EU (Bio) */}
          <section className="w-full animate-fade-in-up delay-200">
            <div className="bg-white/50 backdrop-blur-md border border-white/80 rounded-2xl p-5 shadow-lg shadow-[#A88BD4]/5">
              <p className="text-gray-700 font-medium leading-relaxed">
                Ajudando mulheres a retomarem o controle da alimentação, superarem a compulsão e conquistarem um corpo mais leve, saudável e possível. 💜
              </p>
            </div>
          </section>

          {/* ⭐ 2. Sessão: “Para quem é meu conteúdo?” */}
          <section className="w-full animate-fade-in-up delay-200">
            <div className="bg-white/70 backdrop-blur-sm border border-[#A88BD4]/30 rounded-2xl p-5 shadow-sm text-left">
              <p className="text-[#A88BD4] font-bold text-sm mb-3 uppercase tracking-wider text-center">Para quem é meu conteúdo?</p>
              <ul className="space-y-2 text-sm text-gray-700 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-[#A88BD4] mt-0.5">✔</span> Mulheres cansadas de dietas que não duram
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A88BD4] mt-0.5">✔</span> Quem luta contra compulsão ou exageros
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A88BD4] mt-0.5">✔</span> Quem quer emagrecer com leveza
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A88BD4] mt-0.5">✔</span> Quem busca saúde sem paranoia
                </li>
              </ul>
            </div>
          </section>

          {/* ⭐ 4. Bloco “Seu melhor link” (botão em destaque) */}
          <section className="w-full mt-2 animate-fade-in-up delay-300">
            <p className="text-[#A88BD4] font-bold text-sm uppercase tracking-widest mb-3">💜 Meu material mais pedido</p>
            
            <a 
              href="https://jejum-magras-magras.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full relative animate-heartbeat"
            >
              <div className="absolute inset-0 bg-[#A88BD4] rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <button className="relative w-full bg-gradient-to-r from-[#A88BD4] to-[#CBB7F6] text-white font-bold py-6 px-6 rounded-2xl shadow-xl shadow-[#A88BD4]/30 flex flex-col items-center justify-center group-hover:scale-[1.02] transition-transform duration-300 border border-white/20">
                <span className="text-sm font-medium opacity-90 mb-1">👉 Clique para acessar</span>
                <span className="text-xl leading-tight">Aplicativo Jejum Magras Magras</span>
              </button>
            </a>
          </section>

          {/* ⭐ 3. Bloco: “Meus principais conteúdos” (3 cartões) */}
          <section className="w-full mt-4 animate-fade-in-up delay-300">
            <h3 className="text-[#A88BD4] font-bold text-sm text-center mb-3 uppercase tracking-widest">Meus principais conteúdos</h3>
            <div className="flex flex-col gap-3">
              {MAIN_CONTENT_LINKS.map((content) => (
                <a 
                  key={content.id}
                  href={content.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#CBB7F6]/20 hover:bg-[#CBB7F6]/30 border border-[#CBB7F6] rounded-xl p-4 transition-all duration-300 hover:scale-[1.02]"
                >
                  <p className="text-[#8F74C6] font-semibold text-sm">{content.title}</p>
                </a>
              ))}
            </div>
          </section>

          {/* 5. BOTÕES DE LINKS (Sociais) */}
          <section className="w-full flex flex-col gap-5 mt-4">
            {LINKS.map((link, index) => (
              <SocialLinkButton key={link.id} link={link} index={index} />
            ))}
          </section>

          {/* ⭐ 5. Sessão: “Meu conteúdo te ajuda a…” */}
          <section className="w-full mt-4 animate-fade-in-up delay-300">
            <div className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-white">
               <h3 className="text-[#8F74C6] font-bold text-lg mb-4">Meu conteúdo te ajuda a...</h3>
               <ul className="text-left space-y-3">
                 {[
                   "Entender o que causa sua compulsão",
                   "Emagrecer sem passar fome",
                   "Comer com equilíbrio",
                   "Sentir controle sobre a comida",
                   "Criar uma rotina leve e possível"
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                     <span className="text-lg">✨</span> {item}
                   </li>
                 ))}
               </ul>
            </div>
          </section>

          {/* ⭐ 6. Frase de impacto (centralizada, destaque visual) */}
          <section className="mt-8 px-2 animate-fade-in-up delay-300">
             <p className="text-2xl lg:text-3xl font-light italic text-[#A88BD4] leading-snug">
               “Você não precisa comer perfeito. <br/> <span className="font-bold not-italic">Precisa comer certo!</span>”
             </p>
          </section>

          {/* ⭐ 7. Área: “Melhores conteúdos do momento” */}
          <section className="w-full mt-8 animate-fade-in-up delay-300">
            <h3 className="text-[#A88BD4] font-bold text-sm text-center mb-4 uppercase tracking-widest flex items-center justify-center gap-2">
              <span>🔥</span> Em alta no perfil
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {VIRAL_LINKS.map((viral) => (
                <a 
                  key={viral.id}
                  href={viral.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white border border-[#CBB7F6]/50 rounded-xl p-3 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                >
                   <span className="text-[#A88BD4] text-lg">🔥</span>
                   <div className="text-left">
                     <p className="text-[#A88BD4] text-xs font-bold uppercase tracking-wide">Imperdível</p>
                     <p className="text-gray-700 font-medium text-sm leading-tight">{viral.title}</p>
                   </div>
                </a>
              ))}
            </div>
          </section>

          {/* 6. DEPOIMENTOS (Carrossel) */}
          <section className="w-full mt-10 animate-fade-in-up delay-300 overflow-hidden">
            <h3 className="text-[#A88BD4] font-bold text-sm text-center mb-4 uppercase tracking-widest">O que dizem as alunas</h3>
            <div className="flex overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 w-[calc(100%+2rem)]">
              {TESTIMONIALS.map((t) => (
                <TestimonialCard key={t.id} text={t.text} />
              ))}
            </div>
          </section>

          {/* 9. FRASE DE IMPACTO (Original - mantida como fechamento) */}
          <section className="mt-4 px-6 animate-fade-in-up delay-300">
            <blockquote className="text-center">
              <p className="text-xl lg:text-2xl font-bold text-[#A88BD4] leading-snug">
                “Saúde não é sobre caber nos padrões. É sobre caber na sua vida. 💜”
              </p>
            </blockquote>
          </section>

          {/* 11. RODAPÉ */}
          <footer className="mt-12 mb-6 animate-fade-in-up delay-300 text-center">
            <p className="text-sm font-medium text-[#A88BD4]">
              Feito com 💜 por Raquel Rosa
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Todos os Direitos Reservados ~ 2025/2026 ~ Raquel Rosa
            </p>
          </footer>

        </div>
      </main>
    </div>
  );
};

export default App;