export default function MainHeroGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 hero-bottom-glow">
      <div className="main-red-lightband absolute bottom-[-120px] left-[60%] h-64 w-[1200px] opacity-90 z-0 md:h-70 md:w-[1200px]" />

      <div className="main-orange-lightband absolute top-[50%] right-[50%] h-64 w-[900px] opacity-90 z-0 md:h-80 md:w-[1200px]" />

      <div className="main-orange-lightband absolute top-[35%] right-[80%] h-64 w-[900px] opacity-100 z-0 md:h-80 md:w-[1200px]" />

      <div className="main-cyan-lightband absolute top-[35%] left-[0%] h-64 w-[900px] opacity-60 z-0 md:h-80 md:w-[1200px]" />

      <div className="main-orange-lightband absolute bottom-[60%] left-[30%] h-64 w-[900px] opacity-60 z-0 md:h-80 md:w-[1200px]" />

      <div className="main-red-lightband absolute top-[20px] right-[20%] h-64 w-[1200px] opacity-50 z-0 md:h-80 md:w-[800px]" />
    </div>
  );
}
