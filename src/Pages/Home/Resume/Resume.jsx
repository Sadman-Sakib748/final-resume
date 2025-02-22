import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const fadeIn = (direction = "up", delay = 0) => ({
  initial: { opacity: 0, y: direction === "up" ? 40 : -40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

const Resume = () => {
  return (
    <div className="bg-black min-h-screen p-6 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Experience Section */}
        <motion.div {...fadeIn("left", 0.2)} className="space-y-6">
          <motion.div className="flex items-center gap-3">
            <motion.div 
              className="w-8 h-8 rounded-full bg-[#A48AFF]/10 flex items-center justify-center"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowUpRight className="w-5 h-5 text-[#A48AFF]" />
            </motion.div>
            <h2 className="text-[#A48AFF] text-2xl font-bold">My Experience</h2>
          </motion.div>

          <motion.div className="space-y-4">
            {[ 
              { year: "2022 - Present", title: "PROGRAMMING COURSE", place: "Blockdots, London" },
              { year: "2021 - 2022", title: "CMS COURSE", place: "Parsons, The New School" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#1C1B1F] rounded-xl p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-[#A48AFF] font-medium">{item.year}</div>
                <h3 className="text-white text-xl font-bold mt-2">{item.title}</h3>
                <p className="text-gray-400 mt-1">{item.place}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div {...fadeIn("right", 0.2)} className="space-y-6">
          <motion.div className="flex items-center gap-3">
            <motion.div 
              className="w-8 h-8 rounded-full bg-[#A48AFF]/10 flex items-center justify-center"
              whileHover={{ scale: 1.2, rotate: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowUpRight className="w-5 h-5 text-[#A48AFF]" />
            </motion.div>
            <h2 className="text-[#A48AFF] text-2xl font-bold">My Education</h2>
          </motion.div>

          <motion.div className="space-y-4">
            {[ 
              { year: "2020 - 2023", title: "BLOCKDOTS", place: "Harvard University" },
              { year: "2016 - 2020", title: "PARSONS, THE NEW SCHOOL", place: "University of Denmark" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#1C1B1F] rounded-xl p-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-[#A48AFF] font-medium">{item.year}</div>
                <h3 className="text-white text-xl font-bold mt-2">{item.title}</h3>
                <p className="text-gray-400 mt-1">{item.place}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
