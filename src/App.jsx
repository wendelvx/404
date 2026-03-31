import { useEffect, useState } from 'react';
import Lenis from 'lenis';

// --- IMPORTAÇÕES DE COMPONENTES ---
import ColorBends from './components/ColorBends';
import SplashCursor from './components/SplashCursor';
import FuzzyText from './components/FuzzyText';
import DecryptedText from './components/DecryptedText';
import ProfileCard from './components/ProfileCard';
import TrueFocus from './components/TrueFocus';
import OrbitImages from './components/OrbitImages';
import PixelTrail from './components/PixelTrail';
import GradientText from './components/GradientText';
import CardSwap, { Card } from './components/CardSwap';

// --- COMPONENTE TERMINAL NATIVO (Hacker Edition) ---
const TerminalNative = () => {
  const [logs, setLogs] = useState([]);
  const lines = [
    "[ OK ] Booting wendelvxOS kernel_v8.2...",
    "[ OK ] Bypassing security protocols...",
    "[INFO] Initializing neural network...",
    "[ OK ] Decrypting architectural assets...",
    "[INFO] Arsenal loaded successfully.",
    "root@wendelvx:~$ access granted_"
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setLogs(prev => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-xs md:text-sm p-6 space-y-2 text-[#00ff41] drop-shadow-[0_0_8px_rgba(0,255,65,0.8)] tracking-wide">
      {logs.map((line, i) => (
        <p key={i} className={i === logs.length - 1 ? "animate-pulse text-white drop-shadow-[0_0_8px_rgba(255,255,255,1)]" : "opacity-90"}>
          {line}
        </p>
      ))}
    </div>
  );
};

const orbitTechLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
];

const techCases = [
  { id: 1, title: "Arquitetura Escalável", desc: "Desenvolvimento de sistemas preparados para alto volume de tráfego e manutenção simplificada.", tags: ["Node.js", "Docker", "AWS"], color: "#00ffd1" },
  { id: 2, title: "Alta Performance", desc: "Criação de endpoints otimizados e seguros, garantindo integração perfeita entre front e back-end.", tags: ["TypeScript", "PostgreSQL", "Redis"], color: "#8a5cff" },
  { id: 3, title: "Interfaces Imersivas", desc: "Implementação de técnicas avançadas de renderização e animações para experiências ricas.", tags: ["React", "Vite", "GSAP"], color: "#ff5c7a" }
];

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1024);
    window.addEventListener('resize', handleResize);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: false, 
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('resize', handleResize);
      lenis.destroy();
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5588988145310', '_blank');
  };

  return (
    <main className="relative w-full max-w-[100vw] bg-zinc-950 text-white overflow-x-hidden selection:bg-cyan-500/30">
      
      {/* 1. CAMADAS GLOBAIS */}
      {isDesktop && <SplashCursor />}
      
      <div className="fixed inset-0 z-0 pointer-events-none opacity-80">
        {isDesktop ? (
          <ColorBends colors={["#ff5c7a", "#8a5cff", "#00ffd1"]} rotation={0} speed={0.2} scale={1} frequency={1} warpStrength={1} mouseInfluence={1} parallax={0.5} noise={0.1} transparent={true} />
        ) : (
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,#18181b_0%,#09090b_100%)]" />
        )}
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        
        {/* --- SEÇÃO 01: HERO --- */}
        <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center p-6 gap-12 lg:gap-32 max-w-7xl mx-auto">
          
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-20 lg:mt-0 z-10 w-full lg:w-auto flex-shrink-0">
            <div className="w-full flex justify-center lg:justify-start">
              <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={isDesktop} color="#fff" fontSize="clamp(3rem, 10vw, 8rem)" fontWeight={900} className="uppercase leading-none">
                WENDELVX
              </FuzzyText>
            </div>
            
            <div className="mt-2 w-full flex justify-center lg:justify-start pl-1" translate="no">
              <DecryptedText
                text="FULL STACK ARCHITECT" 
                animateOn="view" sequential speed={50}
                className="text-cyan-400 font-mono text-base md:text-xl tracking-[0.3em] md:tracking-[0.45em] font-bold"
                encryptedClassName="text-zinc-500 font-mono text-base md:text-xl tracking-[0.3em] md:tracking-[0.45em]"
              />
            </div>
          </div>

          <div className="z-20 relative w-full flex justify-center" translate="no">
            {isDesktop ? (
              /* Componente 3D para Desktop */
              <div className="scale-100">
                <ProfileCard
                  name="WendelVX"
                  title="Full Stack Engineer"
                  handle="@wendelvx"
                  status="Online"
                  contactText="Ver GitHub"
                  image="/profile.webp" 
                  avatarUrl="/profile.webp"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => window.open('https://github.com/wendelvx', '_blank')}
                  behindGlowColor="rgba(0, 255, 209, 0.4)"
                  behindGlowEnabled={true}
                  innerGradient="linear-gradient(145deg, rgba(138, 92, 255, 0.2) 0%, rgba(0, 255, 209, 0.1) 100%)"
                />
              </div>
            ) : (
              /* COMPONENTE MOBILE NATIVO: Zero sequestro de toque, navegação suave */
              <div className="relative w-full max-w-[320px] h-[400px] rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col justify-end p-6 group cursor-pointer" onClick={() => window.open('https://github.com/wendelvx', '_blank')}>
                {/* Imagem de Fundo (Cobre o cartão inteiro) */}
                <img src="/profile.webp" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Wendel" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/60 to-transparent" />
                
                {/* Conteúdo */}
                <div className="relative z-10 flex flex-col items-start gap-2">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-400 mb-2 shadow-[0_0_15px_rgba(0,255,209,0.5)]">
                    <img src="/profile.webp" className="w-full h-full object-cover" alt="Avatar" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-mono text-green-400 uppercase tracking-widest">Online</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">WendelVX</h2>
                  <p className="text-cyan-400 font-mono text-sm">Full Stack Engineer</p>
                  
                  {/* Botão */}
                  <div className="mt-4 w-full text-center py-3 bg-white/10 backdrop-blur-md rounded-xl font-bold text-white uppercase text-xs tracking-widest border border-white/10 active:bg-white/20 transition-colors">
                    Ver GitHub
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* --- SEÇÃO 02: MANIFESTO --- */}
        <section className="w-full min-h-[60vh] flex items-center justify-center px-6 py-24 bg-zinc-950/40 backdrop-blur-sm border-y border-white/5">
          <div className="max-w-4xl z-10 text-center flex flex-col items-center gap-8">
             <div className="text-4xl md:text-6xl font-black" translate="no">
               <TrueFocus sentence="Experience the Extraordinary" manualMode={false} blurAmount={4} borderColor="#00ffd1" animationDuration={0.8} />
             </div>
             <p className="text-zinc-400 text-xl font-light leading-relaxed max-w-2xl mt-4">
               A tecnologia deve ser invisível. O que importa é a sensação de fluidez, a precisão da lógica e a beleza absoluta do movimento interativo.
             </p>
          </div>
        </section>

        {/* --- SEÇÃO 03: TECH STACK --- */}
        <section className="w-full min-h-[90vh] flex flex-col lg:flex-row items-center justify-center py-24 px-6 gap-16 max-w-7xl mx-auto overflow-hidden">
          <div className="flex-1 flex flex-col items-start gap-6 z-10 text-center lg:text-left w-full">
            <h3 className="text-5xl md:text-6xl font-black tracking-tight leading-none uppercase w-full">
              O Ecossistema<br/><span className="text-purple-500 italic">Técnico</span>
            </h3>
            <p className="text-zinc-400 text-lg max-w-md leading-relaxed mx-auto lg:mx-0">
              As ferramentas gravitam ao redor do problema. Domino tecnologias modernas para garantir harmonia entre performance e escalabilidade.
            </p>
          </div>

          <div className="flex-1 w-full flex items-center justify-center relative min-h-[400px] z-10">
            {isDesktop ? (
              <div className="w-full max-w-[500px] aspect-square relative flex items-center justify-center">
                <div className="absolute w-20 h-20 bg-cyan-500/20 border border-cyan-400 rounded-full shadow-[0_0_50px_rgba(0,255,209,0.5)] animate-pulse" />
                <OrbitImages images={orbitTechLogos} shape="ellipse" radiusX={220} radiusY={90} rotation={-15} duration={30} itemSize={60} responsive={true} baseWidth={500} fill={true} showPath={true} pathColor="rgba(0, 255, 209, 0.2)" />
              </div>
            ) : (
              /* ÓRBITA 100% CSS NATIVA PARA MOBILE */
              <div className="relative w-72 h-72 flex items-center justify-center">
                <div className="absolute inset-0 border border-cyan-500/20 rounded-full pointer-events-none" />
                <div className="absolute w-16 h-16 bg-cyan-500/20 border border-cyan-400 rounded-full shadow-[0_0_30px_rgba(0,255,209,0.5)] animate-pulse" />
                
                <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                  {orbitTechLogos.map((logo, i) => {
                    const angle = (i * 360) / orbitTechLogos.length;
                    return (
                      <div key={i} className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-zinc-900 rounded-full p-2 border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] overflow-hidden">
                          <img src={logo} className="w-full h-full object-contain grayscale opacity-80 animate-[spin_20s_linear_infinite_reverse]" alt="tech" translate="no" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* --- SEÇÃO 04: CASOS DE USO --- */}
        <section className="w-full pt-16 pb-24 px-0 md:px-6 mb-20 bg-zinc-950/60 backdrop-blur-md border-t border-white/5 flex flex-col items-center">
          <div className="max-w-6xl w-full mb-12 px-6">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight uppercase italic w-full md:w-auto" translate="no">Casos De Uso</h3>
              <p className="text-zinc-500 max-w-sm hidden md:block">Foco na arquitetura e resolução de problemas complexos.</p>
            </div>
          </div>

          <div className="w-full flex justify-center">
            {isDesktop ? (
              /* CARD SWAP NO DESKTOP: Lindo e interativo */
              <div className="w-full max-w-[600px] h-[450px] relative px-4">
                <CardSwap cardDistance={40} verticalDistance={50} delay={5000} pauseOnHover={true}>
                  {techCases.map((item) => (
                    <Card key={item.id}>
                      <div className="w-full h-full bg-zinc-900 border border-white/10 rounded-[2.5rem] p-12 flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden group mx-auto">
                        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"><PixelTrail color={item.color} gridSize={30} /></div>
                        <div className="z-10 flex flex-col items-center gap-6">
                          <div className="flex gap-2 flex-wrap justify-center">
                            {item.tags.map(tag => (<span key={tag} className="text-xs font-mono text-zinc-500 border border-zinc-800 bg-black/30 px-2 py-1 rounded" translate="no">{tag}</span>))}
                          </div>
                          <h4 className="text-4xl font-black text-white uppercase leading-tight" translate="no">{item.title}</h4>
                          <p className="text-zinc-400 text-lg leading-relaxed max-w-md">{item.desc}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </CardSwap>
              </div>
            ) : (
              /* SLIDER HORIZONTAL NATIVO NO MOBILE: Perfeito, não vaza tela, 100% liso */
              <div className="flex w-full overflow-x-auto snap-x snap-mandatory px-6 gap-4 pb-8" style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
                {techCases.map((item) => (
                  <div key={item.id} className="snap-center shrink-0 w-[85vw] max-w-[350px] bg-zinc-900 border border-white/10 rounded-[2rem] p-8 flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden">
                    <div className="z-10 flex flex-col items-center gap-4">
                      <div className="flex gap-2 flex-wrap justify-center">
                        {item.tags.map(tag => (<span key={tag} className="text-[10px] font-mono text-zinc-500 border border-zinc-800 bg-black/30 px-2 py-1 rounded" translate="no">{tag}</span>))}
                      </div>
                      <h4 className="text-2xl font-black text-white uppercase leading-tight" translate="no">{item.title}</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* --- SEÇÃO 05: CTA & TERMINAL --- */}
        <section className="w-full py-24 flex items-center justify-center relative overflow-hidden bg-transparent border-t border-purple-500/10">
          <div className="max-w-7xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 p-8 md:p-16 mx-4 md:mx-6 border border-white/5 rounded-[2rem] md:rounded-[3rem]">
            
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8" translate="no">
               <GradientText colors={["#00ffd1", "#8a5cff", "#ff5c7a"]} className="text-5xl md:text-7xl font-black uppercase">Vamos Construir</GradientText>
               <button 
                onClick={handleWhatsAppClick}
                className="px-10 md:px-12 py-4 md:py-5 bg-white text-black font-black text-sm md:text-base uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
               >
                 Entre em Contato
               </button>
            </div>

            <div className="h-[300px] relative rounded-2xl overflow-hidden border border-cyan-500/20 bg-zinc-950/80 backdrop-blur-md w-full shadow-[0_0_50px_rgba(0,255,209,0.05)]">
               <div className="absolute top-0 left-0 w-full h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2 z-20">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 text-[10px] font-mono text-zinc-400 tracking-tighter">root@wendelvx:~# terminal_seguro</span>
               </div>
               <div className="w-full h-full pt-10 overflow-hidden bg-transparent relative">
                  <TerminalNative />
                  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-50" />
               </div>
            </div>
            
          </div>
        </section>

      </div>
    </main>
  );
}

export default App;