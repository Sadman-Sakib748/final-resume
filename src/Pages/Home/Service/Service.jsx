import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Service = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="min-h-screen bg-black p-6 md:p-8 lg:p-12">
      <div className="w-full">
        <motion.h2
          className="text-white text-center text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Quality Services
        </motion.h2>
        <motion.p
          className="text-zinc-400 text-center text-lg w-full mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </motion.p>
      </div>

      {/* Service List */}
      <div className="max-w-6xl mx-auto space-y-4">
        {category.map((service, index) => (
          <motion.div
            key={service.number}
            className={`relative overflow-hidden transition-all duration-300 ${
              index === 4 ? "" : "hover:bg-purple-900 text-black"
            } rounded-lg`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-[#8B5CF6] text-sm font-medium">
                      {service.number}
                    </span>
                    <h2 className="text-white text-2xl md:text-3xl font-semibold">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-purple-800 max-w-2xl">{service.description}</p>
                </div>
                <div className="shrink-0">
                  <ArrowUpRight
                    className={`w-5 h-5 transform rotate-45 transition-transform duration-300 ${
                      index === 1 ? "text-white" : "text-[#8B5CF6]"
                    } group-hover:rotate-0`}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Service;
