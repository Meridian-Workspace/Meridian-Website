import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const teamMembers = [
  {
    name: "Jose Paolo Santos",
    role: "Co-Founder",
    specialty: "CEO | Lead Developer",
    image: "/Pao.jpg",
    bio: "Paolo leads the technical vision of Point of Origin, ensuring every line of code meets our high standards."
  },
  {
    name: "Luis Enrico Granada",
    role: "Co-Founder",
    specialty: "QA Engr. | Developer",
    image: "/Luis.png",
    bio: "Luis is the guardian of quality, blending development skills with a rigorous testing mindset."
  },
  {
    name: "Lourdes Ashley Santos",
    role: "Co-Founder",
    specialty: "Lead UI/UX Designer",
    image: "/Ashley.jpg",
    bio: "Ashley bridges the gap between functionality and aesthetics, crafting world-class user experiences."
  },
  {
    name: "Jasper Lindell Arangali",
    role: "Co-Founder",
    specialty: "UI/UX Designer | Front-end Developer",
    image: "/Jas.jpg",
    bio: "Jasper focuses on the intersection of design and code, bringing static visuals to life with interactive front-ends."
  },
];

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold font-[Epilogue] text-[#01257F] mb-2">
            Point of Origin
          </h2>
          <p className="text-sm font-bold font-[Inter] text-[#01257F] uppercase tracking-widest">
            Meet the Team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {teamMembers.map((member) => (
            <TeamCard 
              key={member.name} 
              member={member} 
              onClick={() => setSelectedMember(member)} 
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMember && (
          <TeamModal 
            member={selectedMember} 
            onClose={() => setSelectedMember(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function TeamCard({ member, onClick }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="cursor-pointer flex flex-col rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100 bg-[#01257F] h-full"
    >
      <div className="relative bg-gray-200 w-full aspect-[4/5] overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="p-6 text-white flex flex-col justify-start flex-grow">
        <h3 className="text-xl font-bold font-[Epilogue] mb-2 leading-tight">
          {member.name}
        </h3>
        <div className="mt-auto space-y-1">
          <p className="text-[10px] font-[Inter] font-bold uppercase tracking-[0.15em] opacity-80">
            {member.role}
          </p>
          <p className="text-xs font-[Inter] leading-relaxed">
            {member.specialty}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function TeamModal({ member, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-[2rem] overflow-hidden max-w-lg md:max-w-3xl w-full max-h-[90vh] md:max-h-[600px] flex flex-col md:flex-row shadow-2xl z-10 relative"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/90 p-2 rounded-full text-gray-500 shadow-sm hover:text-[#01257F] transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left Side: Image */}
        {/* Mobile: Square-ish | Desktop: Portrait sidebar */}
        <div className="w-full md:w-[45%] aspect-square md:aspect-auto bg-gray-100 flex-shrink-0">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover object-top" 
          />
        </div>
        
        {/* Right Side: Content */}
        <div className="p-6 md:p-10 w-full flex flex-col justify-center overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#01257F] mb-1 leading-tight">
              {member.name}
            </h2>
            <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">
              {member.role}
            </p>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <div>
              <h4 className="text-[10px] uppercase font-bold text-gray-300 mb-1">Specialty</h4>
              <p className="text-sm md:text-base text-[#01257F] font-medium">
                {member.specialty}
              </p>
            </div>

            <div>
              <h4 className="text-[10px] uppercase font-bold text-gray-300 mb-1">About</h4>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed italic">
                "{member.bio}"
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="mt-8 bg-[#01257F] text-white py-3 rounded-xl font-bold text-sm transition-transform active:scale-95 shadow-md"
          >
            Close Profile
          </button>
        </div>
      </motion.div>
    </div>
  );
}