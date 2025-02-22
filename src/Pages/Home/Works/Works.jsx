import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "UX/UI", "Branding", "Apps"];

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="w-full min-h-screen bg-[#0D0B0E] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        
        {/* Title & Description */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#A881FC] text-4xl md:text-5xl font-semibold">
            My Recent Works
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
          </p>
        </motion.div>

        {/* Category Buttons */}
        <motion.div
          className="inline-flex bg-black/40 rounded-full p-1.5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-[#A881FC] text-white"
                  : "text-white/70 hover:text-white"
              }`}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
