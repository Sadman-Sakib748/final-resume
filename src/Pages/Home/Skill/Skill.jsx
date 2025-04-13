import { motion } from "framer-motion"
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiNextdotjs,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiFigma,
  SiPostman,
} from "react-icons/si"

const Skill = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const frontendTech = [
    { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" size={24} /> },
    { name: "CSS", icon: <SiCss3 className="text-[#1572B6]" size={24} /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#38B2AC]" size={24} /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" size={24} /> },
    { name: "Javascript", icon: <SiJavascript className="text-[#F7DF1E]" size={24} /> },
    { name: "React", icon: <SiReact className="text-[#61DAFB]" size={24} /> },
    { name: "React Router", icon: <SiReactrouter className="text-[#CA4245]" size={24} /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" size={24} /> },
  ]

  const backendTech = [
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" size={24} /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" size={24} /> },
    { name: "Express.js", icon: <SiExpress className="text-white" size={24} /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" size={24} /> },
  ]

  const tools = [
    { name: "Git", icon: <SiGit className="text-[#F05032]" size={24} /> },
    { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" size={24} /> },
    { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" size={24} /> },
  ]

  const TechCard = ({ tech }) => (
    <motion.div
      className="bg-[#0f1225] px-6 py-4 rounded-md flex items-center gap-3 min-w-[140px]"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 8px rgba(255, 255, 255, 0.2)",
      }}
      variants={item}
    >
      {tech.icon}
      <span className="text-white">{tech.name}</span>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-[#0a0a20] text-white p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Quote Section */}
        <motion.div
          className="mb-12 flex items-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-2 h-12 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"
            initial={{ height: 0 }}
            animate={{ height: "3rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <div>
            <p className="text-lg">
              I am <span className="font-bold">comfortable</span> with this technology and
              <br />I always like to learn something new
            </p>
          </div>
        </motion.div>

        {/* Frontend Technology */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.h2
            className="text-2xl font-bold mb-6 text-purple-400"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Frontend Technology
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {frontendTech.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </motion.div>
        </motion.div>

        {/* Backend Technology */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.h2
            className="text-2xl font-bold mb-6 text-purple-400"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Backend Technology
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {backendTech.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </motion.div>
        </motion.div>

        {/* Tools */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.h2
            className="text-2xl font-bold mb-6 text-purple-400"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Tools
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {tools.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skill;