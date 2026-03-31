import { useEffect } from 'react';
import Lenis from 'lenis';

// --- IMPORTAÇÕES DE COMPONENTES ---
import ColorBends from './components/ColorBends';
import SplashCursor from './components/SplashCursor';
import FuzzyText from './components/FuzzyText';
import DecryptedText from './components/DecryptedText';
import ProfileCard from './components/ProfileCard';
import TrueFocus from './components/TrueFocus';
import OrbitImages from './components/OrbitImages';
import ScrollStack, { ScrollStackItem } from './components/ScrollStack';
import PixelTrail from './components/PixelTrail';
import Hyperspeed from './components/Hyperspeed';
import GradientText from './components/GradientText';
import FaultyTerminal from './components/FaultyTerminal';
import CardSwap, { Card } from './components/CardSwap';

// Opções de configuração para o efeito Hyperspeed
const hyperspeedConfig = {
  distortion: "turbulentDistortion",
  length: 400,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 3,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 20,
  lightPairsPerRoadWay: 40,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [12, 80],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.8, 0.8],
  carFloorSeparation: [0, 5],
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x000000,
    shoulderLines: 0x131318,
    brokenLines: 0x131318,
    leftCars: [0xa855f7, 0x8b5cf6, 0xd8b4fe],
    rightCars: [0x06b6d4, 0x22d3ee, 0x67e8f9],
    sticks: 0x06b6d4,
  }
};

// Imagens reais de logos para a órbita
const orbitTechLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
];

// Dados para a Seção de Casos de Uso
const techCases = [
  {
    id: 1,
    title: "Arquitetura Escalável & Microserviços",
    desc: "Desenvolvimento de sistemas preparados para alto volume de tráfego, separando responsabilidades para garantir estabilidade e manutenção simplificada.",
    tags: ["Node.js", "Docker", "AWS"],
    color: "#00ffd1"
  },
  {
    id: 2,
    title: "APIs RESTful & GraphQL de Alta Performance",
    desc: "Criação de endpoints otimizados e seguros, reduzindo o tempo de resposta e garantindo integrações perfeitas entre front e back-end.",
    tags: ["TypeScript", "PostgreSQL", "Redis"],
    color: "#8a5cff"
  },
  {
    id: 3,
    title: "Otimização Extrema de Frontend",
    desc: "Implementação de técnicas avançadas de renderização (SSR/SSG), state management eficiente e estratégias de cache para notas máximas no Lighthouse.",
    tags: ["React", "Vite", "Performance"],
    color: "#ff5c7a"
  }
];

function App() {
  // Inicialização do Smooth Scroll
  useEffect(() => {
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
    return () => lenis.destroy();
  }, []);

  return (
    <main className="relative w-full bg-zinc-950 text-white overflow-x-hidden selection:bg-purple-500/30">
      
      {/* 1. CAMADAS GLOBAIS (Fixas) */}
      <SplashCursor />
      
      <div className="fixed inset-0 z-0 pointer-events-none opacity-80">
        <ColorBends
          colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
          transparent={true}
          autoRotate={0}
        />
      </div>

      {/* 2. CONTEÚDO SCROLLÁVEL */}
      <div className="relative z-10 w-full flex flex-col items-center">
        
        {/* --- SEÇÃO 01: HERO --- */}
        <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center p-6 gap-12 lg:gap-24">
          
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-20 lg:mt-0">
            <FuzzyText 
              baseIntensity={0.2} hoverIntensity={0.5} enableHover={true} color="#fff"
              fontSize="clamp(3rem, 10vw, 8rem)" fontWeight={900} className="uppercase leading-none"
            >
              WENDELVX
            </FuzzyText>
            
            <div className="mt-6" translate="no">
              {/* O atributo translate="no" bloqueia a tradução bizarra do Chrome */}
              <DecryptedText
                text="FULL STACK Engineer" 
                animateOn="view" sequential speed={50}
                className="text-cyan-400 font-mono text-lg md:text-2xl tracking-[0.4em] font-bold"
                encryptedClassName="text-zinc-500 font-mono text-lg md:text-2xl tracking-[0.4em]"
              />
            </div>
          </div>

          {/* Direita: O Profile Card com a imagem consertada */}
          <div className="z-20 scale-90 md:scale-100" translate="no">
            <ProfileCard
              name="WendelVX"
              title="Full Stack Engineer"
              handle="@wendelvx"
              status="Online"
              contactText="Ver GitHub"
              image="/profile.webp" // <-- IMAGEM PRINCIPAL PARA COBRIR O CARD
              avatarUrl="/profile.webp" // <-- MINIATURA LÁ EMBAIXO
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => window.open('https://github.com/wendelvx', '_blank')}
              behindGlowColor="rgba(0, 255, 209, 0.4)"
              behindGlowEnabled={true}
              innerGradient="linear-gradient(145deg, rgba(138, 92, 255, 0.2) 0%, rgba(0, 255, 209, 0.1) 100%)"
            />
          </div>

        </section>

        {/* --- SEÇÃO 02: MANIFESTO --- */}
        <section className="w-full min-h-[70vh] flex items-center justify-center px-6 py-24 bg-zinc-950/40 backdrop-blur-sm border-y border-white/5">
          <div className="max-w-4xl z-10 text-center flex flex-col items-center gap-8">
             <span className="text-purple-400 tracking-[0.2em] uppercase text-xs font-bold border border-purple-500/30 px-4 py-2 rounded-full bg-black/50" translate="no">
               /* Manifesto */
             </span>
             <div className="text-4xl md:text-6xl font-black" translate="no">
               <TrueFocus 
                  sentence="Experiencie O Extraordinário"
                  manualMode={false} blurAmount={4} borderColor="#00ffd1"
                  animationDuration={0.8}
               />
             </div>
             <p className="text-zinc-400 text-xl font-light leading-relaxed max-w-2xl mt-4">
               A tecnologia deve ser invisível. O que importa é a sensação de fluidez, a precisão da lógica e a beleza absoluta do movimento interativo.
             </p>
          </div>
        </section>

        {/* --- SEÇÃO 03: TECH STACK (Orbit Images) --- */}
        <section className="w-full min-h-[90vh] flex flex-col lg:flex-row items-center justify-center py-24 px-6 gap-16 max-w-7xl mx-auto overflow-hidden">
          
          <div className="flex-1 flex flex-col items-start gap-6 z-10 relative text-left">
            <span className="text-cyan-400 tracking-[0.2em] uppercase text-xs font-bold border border-cyan-400/30 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md">
              /* Habilidades */
            </span>
            <h3 className="text-5xl md:text-6xl font-black tracking-tight leading-none">
              O Ecossistema<br/><span className="text-purple-500">Técnico</span>
            </h3>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-md">
              As ferramentas gravitam ao redor do problema. Domino tecnologias modernas de Frontend a Backend para garantir que cada peça da arquitetura funcione em perfeita harmonia.
            </p>
          </div>

          <div className="flex-1 w-full flex items-center justify-center relative min-h-[400px] z-10">
            <div className="absolute w-20 h-20 bg-cyan-500/20 border border-cyan-400 rounded-full shadow-[0_0_50px_rgba(0,255,209,0.5)] z-0 animate-pulse" />
            <div className="w-full max-w-[500px] aspect-square relative flex items-center justify-center scale-75 md:scale-100">
              <OrbitImages
                images={orbitTechLogos}
                shape="ellipse"
                radiusX={220} 
                radiusY={90}
                rotation={-15} 
                duration={30} 
                itemSize={60} 
                responsive={true}
                baseWidth={500} 
                direction="normal"
                fill={true}
                showPath={true} 
                pathColor="rgba(0, 255, 209, 0.2)" 
                paused={false}
              />
            </div>
          </div>
          
        </section>

        {/* --- SEÇÃO 04: CASOS DE USO (Padding reduzido!) --- */}
        {/* Alterado py-32 para py-16 */}
       {/* --- SEÇÃO 04: CASOS DE USO (Refatorada com CardSwap) --- */}
<section className="w-full pt-16 pb-24 px-6 mb-20 bg-zinc-950/60 backdrop-blur-md border-t border-white/5 flex flex-col items-center">
  <div className="max-w-6xl w-full mb-12">
    <div className="flex flex-col md:flex-row justify-between items-end gap-6">
      <div>
        <span className="text-pink-500 tracking-[0.2em] uppercase text-xs font-bold border border-pink-500/30 px-3 py-1 rounded-full mb-4 inline-block" translate="no">
          /* Expertise */
        </span>
        <h3 className="text-4xl md:text-5xl font-bold tracking-tight uppercase italic" translate="no">Casos De Uso</h3>
      </div>
      <p className="text-zinc-500 max-w-sm text-right hidden md:block">
        Foco na arquitetura e resolução de problemas complexos.
      </p>
    </div>
  </div>

  {/* Container da Pilha de Cartas */}
  <div className="w-full max-w-[600px] h-[450px] relative">
    <CardSwap 
      cardDistance={40} 
      verticalDistance={50} 
      delay={5000}
      pauseOnHover={true}
    >
      {techCases.map((item) => (
        <Card key={item.id}>
          <div className="w-full h-full bg-zinc-900 border border-white/10 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-center items-center text-center shadow-2xl relative overflow-hidden group">
            
            {/* Efeito de rastro de pixels ao passar o mouse no card */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
               <PixelTrail color={item.color} gridSize={30} />
            </div>

            <div className="z-10 flex flex-col items-center gap-6">
              <div className="flex gap-2 flex-wrap justify-center">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono text-zinc-500 border border-zinc-800 bg-black/30 px-2 py-1 rounded" translate="no">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h4 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight" translate="no">
                {item.title}
              </h4>
              
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-md">
                {item.desc}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </CardSwap>
  </div>
</section>

        {/* --- SEÇÃO 05: CTA & TERMINAL --- */}
        <section className="w-full h-screen flex items-center justify-center relative overflow-hidden bg-black rounded-t-[4rem] border-t border-purple-500/20">
          <div className="absolute inset-0 z-0">
            <Hyperspeed effectOptions={hyperspeedConfig} />
          </div>
          
          <div className="max-w-7xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 p-8 md:p-16 bg-black/70 backdrop-blur-2xl rounded-[3rem] border border-white/10 mx-6">
            <div className="flex flex-col items-start gap-8" translate="no">
               <GradientText colors={["#00ffd1", "#8a5cff", "#ff5c7a"]} className="text-5xl md:text-7xl font-black">
                 Vamos Construir
               </GradientText>
               <p className="text-zinc-300 text-xl max-w-md bg-black/40 p-4 rounded-xl border border-white/5">
                 Sistemas parados perdem dinheiro. Vamos criar uma solução que domina o mercado.
               </p>
               <button className="px-12 py-5 bg-white text-black font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                 Entre em Contato
               </button>
            </div>
            
            <div className="h-[450px] relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-black w-full" translate="no">
               <div className="absolute top-0 left-0 w-full h-10 bg-zinc-900/90 backdrop-blur-md border-b border-white/10 flex items-center px-4 gap-2 z-20">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-xs font-mono text-zinc-500">root@wendelvx:~# init_connection</span>
               </div>
               <div className="w-full h-full pt-10">
                  <FaultyTerminal tint="#00ffd1" brightness={0.8} curvature={0.15} />
               </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

export default App;