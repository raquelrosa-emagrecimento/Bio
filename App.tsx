
import React from 'react';
import { Link } from './types';
import { LINKS } from './constants';

interface LinkButtonProps {
  link: Link;
  index: number;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link, index }) => {
  // Stagger animation delay based on index for a cascading effect
  const animationDelay = `${(index + 3) * 100}ms`;

  const pulseClass = link.pulse
    ? 'animate-heartbeat'
    : 'hover:shadow-lg hover:shadow-[#CBB7F6]/40 hover:-translate-y-1';

  return (
    // Wrapper div handles entrance animation (opacity/fade)
    <div className="w-full animate-fade-in-up" style={{ animationDelay }}>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        // Anchor tag handles interaction animations (pulse/hover)
        className={`block group relative rounded-2xl transition-all duration-300 ease-out ${pulseClass}`}
        aria-label={`Visite nosso ${link.url.includes('youtube') ? 'YouTube' : link.url.includes('tiktok') ? 'TikTok' : 'Instagram'}`}
      >
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={link.imageUrl}
            alt=""
            className="w-full h-auto object-cover rounded-2xl border-4 transition-transform duration-500 group-hover:scale-105"
            style={{ borderColor: link.borderColor }}
          />
          {/* Shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </a>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden font-poppins text-gray-800">
      
      {/* --- Background Layers (Fixed & Optimized) --- */}
      
      {/* 1. Base Image */}
      <div
        className="fixed inset-0 bg-[url('https://i.imgur.com/h8erhP5.png')] bg-cover bg-center bg-no-repeat -z-30 transform scale-105"
        aria-hidden="true"
      ></div>
      
      {/* 2. Light Overlay & Blur (Glass Base) */}
      <div
        className="fixed inset-0 bg-white/40 backdrop-blur-xl -z-20"
        aria-hidden="true"
      ></div>

      {/* 3. Aesthetic Gradient Overlay */}
      <div
        className="fixed inset-0 bg-gradient-to-b from-[#CBB7F6]/30 via-transparent to-[#A88BD4]/10 -z-10 mix-blend-soft-light"
        aria-hidden="true"
      ></div>

      {/* --- Main Content --- */}
      <main className="relative z-10 flex flex-col items-center min-h-screen w-full px-4 py-8 lg:py-12 selection:bg-[#CBB7F6] selection:text-white">
        <div className="w-full max-w-[400px] flex flex-col items-center text-center">
          
          {/* Header Section */}
          <header className="mt-4 mb-6 animate-fade-in-up">
            <h1
              className="text-3xl lg:text-4xl font-extrabold tracking-tight text-[#8B6CB5]"
              style={{ textShadow: '0 2px 10px rgba(168, 139, 212, 0.2)' }}
            >
              Ei, que bom ver você aqui! Eu sou a Raquel
            </h1>
          </header>

          {/* Profile Picture */}
          <div className="mb-10 animate-fade-in-up delay-100">
            <div className="relative group cursor-pointer">
              {/* Animated Glow behind profile */}
              <div className="absolute inset-0 rounded-full bg-[#CBB7F6] blur-xl opacity-40 animate-pulse"></div>
              
              <div
                className="relative p-[4px] bg-[conic-gradient(from_0deg,_#FF8FD7,_#A88BD4,_#CBB7F6,_#FF8FD7)] rounded-full shadow-xl shadow-[#A88BD4]/30 transition-transform duration-500 ease-out group-hover:scale-105"
              >
                <div className="bg-white p-[3px] rounded-full overflow-hidden">
                  <img
                    src="https://i.imgur.com/hMoNv0v.png"
                    alt="Raquel Rosa"
                    className="w-40 h-40 rounded-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Links Section Card */}
          <section className="w-full p-6 lg:p-8 bg-white/30 backdrop-blur-2xl rounded-[2rem] border border-white/60 shadow-2xl shadow-[#A88BD4]/10 animate-fade-in-up delay-200">
            <div className="flex flex-col items-center gap-5">
              {LINKS.map((link, index) => (
                <LinkButton key={link.id} link={link} index={index} />
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-12 lg:mt-16 animate-fade-in-up delay-300 pb-6">
            <p className="text-xs lg:text-sm font-medium text-gray-600/80 hover:text-[#A88BD4] transition-colors duration-300">
              Todos os Direitos Reservados ~ 2025/2026 ~ Raquel Rosa
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;
