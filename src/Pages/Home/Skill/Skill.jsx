import React, { useEffect, useState } from 'react';

const Skill = () => {
    const [category, setCategory] = useState([]);
    
      useEffect(() => {
        fetch("/skills.json")
          .then((res) => res.json())
          .then((data) => setCategory(data))
          .catch((error) => console.error("Error fetching data:", error));
      }, []);
    return (
        <section className="bg-[#0D0A14] px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Skills</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
          I am proficient in a variety of full-stack development technologies, from front-end design to back-end
          server management.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {category.map((skill) => (
            <div
              key={skill.name}
              className="relative group bg-[#1A1625] p-6 rounded-2xl transition-all duration-300 hover:bg-[#231E32]"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-500/30 transition-all duration-300" />
                  <img src={skill.icon || "/placeholder.svg"} alt="" className="relative w-12 h-12 object-contain" />
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-white">{skill.percentage}%</div>
                  <div className="text-purple-400">{skill.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Skill;