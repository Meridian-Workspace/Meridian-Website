export default function MainHeroGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 hero-bottom-glow">
      <div className="lightband main-red-lightband-y absolute bottom-[-20px] left-[60%] w-[1200px] h-64 opacity-40 md:h-70 md:w-[1000px]" />

      <div className="lightband main-orange-lightband-x absolute top-[50%] right-[50%] w-[1200px] h-64 opacity-90 md:h-80 md:w-[1200px]" />

      <div className="lightband main-orange-lightband-y absolute top-[35%] right-[80%] w-[900px] h-64 opacity-100 md:h-80 md:w-[1200px]" />

      <div className="lightband main-cyan-lightband-x absolute top-[35%] left-[0%] w-[900px] h-64 opacity-60 md:h-80 md:w-[1200px]" />

      <div className="lightband main-cyan-lightband-y absolute top-[35%] left-[0%] w-[600px] h-80 opacity-50 md:h-80 md:w-[1200px]" />

      <div className="lightband main-orange-lightband-y absolute bottom-[60%] left-[40%] w-[700px] h-64 opacity-70 md:h-80 md:w-[1200px]" />

      <div className="lightband main-red-lightband-x absolute top-[20px] right-[20%] w-[1200px] h-64 opacity-50 md:h-80 md:w-[800px]" />

      <div className="lightband main-cyan-lightband-y absolute top-[50%] left-[70%] w-[900px] h-64 opacity-60 md:h-40 md:w-[800px]" />

      <div className="lightband main-orange-lightband-x absolute bottom-[20%] left-[40%] w-[700px] h-64 opacity-40 md:h-80 md:w-[1200px]" />
    </div>
  );
}
