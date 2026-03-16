import React from "react";

const teamMembers = [
  {
    name: "Jose Paolo Santos",
    role: "Co-Founder",
    specialty: "CEO | Lead Developer",
    image: "/Pao.jpg",
  },
  {
    name: "Luis Enrico Granada",
    role: "Co-Founder",
    specialty: "QA Engr. | Developer",
    image: "/Luis.png",
  },
  {
    name: "Lourdes Ashley Santos",
    role: "Co-Founder",
    specialty: "Lead UI/UX Designer",
    image: "/Ashley.jpg",
  },
  {
    name: "Jasper Lindell Arangali",
    role: "Co-Founder",
    specialty: "UI/UX Designer | Front-end Developer",
    image: "/Jas.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full py-20 bg-white">
      {/* Increased max-width to 1400px to ensure 4 cards have enough room 
        to breathe without looking cramped.
      */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold font-[Epilogue] text-[#01257F] mb-2">
            Point of Origin
          </h2>
          <p className="text-sm font-bold font-[Inter] text-[#01257F] uppercase tracking-widest">
            Meet the Team
          </p>
        </div>

        {/* GRID UPDATE:
          - grid-cols-1: Single column on mobile.
          - md:grid-cols-2: Two columns on tablets.
          - lg:grid-cols-4: All four cards in one row on desktop.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ name, role, specialty, image }) {
  return (
    <div className="flex flex-col rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-2 w-full bg-[#01257F] h-full">
      
      {/* Image Container - Aspect ratio keeps it consistent across devices */}
      <div className="relative bg-gray-200 w-full aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Info Section - flex-grow ensures the blue fills the bottom even if text is short */}
      <div className="p-6 md:p-8 text-white flex flex-col justify-start flex-grow">
        <h3 className="text-xl md:text-2xl font-bold font-[Epilogue] mb-3 leading-tight">
          {name}
        </h3>
        
        <div className="mt-auto space-y-1">
          <p className="text-[10px] md:text-xs font-[Inter] font-bold uppercase tracking-[0.15em] opacity-80">
            {role}
          </p>
          <p className="text-xs md:text-sm font-[Inter] leading-relaxed">
            {specialty}
          </p>
        </div>
      </div>
    </div>
  );
}