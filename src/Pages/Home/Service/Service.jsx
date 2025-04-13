import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Linkedin, Instagram, Facebook, MessageCircle } from "lucide-react"
import image from '../../../assets/Mi.jpg';

const Service = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

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

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  }

  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const skills = [
    "Responsive Web Design",
    "Cross-Browser Compatibility",
    "Web Accessibility (WCAG)",
    "Performance Optimization",
    "Search Engine Optimization (SEO)",
    "Testing and Debugging",
  ]
  return (
    <div className="min-h-screen bg-[#0a0a20] text-white font-sans">
      {/* Social Media Sidebar */}
      <motion.div
        className="fixed left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 p-4"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.a
          href="#"
          whileHover={{ scale: 1.2, color: "#0077b5" }}
          className="text-white hover:text-[#0077b5] transition-colors"
        >
          <Linkedin size={24} />
        </motion.a>
        <motion.a
          href="#"
          whileHover={{ scale: 1.2, color: "#E1306C" }}
          className="text-white hover:text-[#E1306C] transition-colors"
        >
          <Instagram size={24} />
        </motion.a>
        <motion.a
          href="#"
          whileHover={{ scale: 1.2, color: "#25D366" }}
          className="text-white hover:text-[#25D366] transition-colors"
        >
          <MessageCircle size={24} />
        </motion.a>
        <motion.a
          href="#"
          whileHover={{ scale: 1.2, color: "#1877F2" }}
          className="text-white hover:text-[#1877F2] transition-colors"
        >
          <Facebook size={24} />
        </motion.a>
      </motion.div>

      {/* Menu Button */}
      <motion.button
        className="fixed top-8 left-8 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="w-6 h-0.5 bg-white mb-1.5"></div>
        <div className="w-6 h-0.5 bg-white mb-1.5"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </motion.button>

      <div className="container mx-auto px-8 py-16">
        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <motion.h1
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            About me
          </motion.h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isLoaded ? "show" : "hidden"}
            className="space-y-6"
          >
            <motion.p variants={item} className="text-lg">
              Hello, This is Jahid. A passionate web developer. I have strong knowledge of frontend development and have
              basic knowledge of the{" "}
              <motion.span className="text-purple-400" whileHover={{ scale: 1.05 }}>
                backend like RESTful API
              </motion.span>
              . I really enjoy learning new technologies. I have solved several web application problems with{" "}
              <motion.span className="text-green-400" whileHover={{ scale: 1.05 }}>
                React.js, Express.js, and MongoDB
              </motion.span>
              ! I am well-versed in front-end technologies like HTML5, CSS3, and JavaScript, and have hands-on
              experience with popular libraries and frameworks such as Bootstrap and{" "}
              <motion.span className="text-pink-400" whileHover={{ scale: 1.05 }}>
                Tailwind CSS
              </motion.span>
              .
            </motion.p>

            <motion.p variants={item} className="text-lg">
              Throughout my career, I have demonstrated a keen eye for detail,{" "}
              <motion.span className="text-pink-400" whileHover={{ scale: 1.05 }}>
                problem-solving abilities
              </motion.span>
              , and a commitment to delivering{" "}
              <motion.span className="text-pink-400" whileHover={{ scale: 1.05 }}>
                high-quality code
              </motion.span>
              . I enjoy working in a collaborative environment, where I can contribute my skills and learn from
              experienced professionals.
            </motion.p>

            <motion.p variants={item} className="text-lg">
              Thank you for giving me some valuable time.
            </motion.p>

            {/* Skills Section */}
            <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-x-8 gap-y-3 mt-8">
              {skills.slice(0, 3).map((skill, index) => (
                <motion.div key={index} className="flex items-center gap-2" variants={slideIn} custom={index}>
                  <motion.div
                    className="w-2 h-2 rounded-full bg-pink-500"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  />
                  <span>{skill}</span>
                </motion.div>
              ))}
              {skills.slice(3).map((skill, index) => (
                <motion.div key={index + 3} className="flex items-center gap-2" variants={slideIn} custom={index + 3}>
                  <motion.div
                    className="w-2 h-2 rounded-full bg-pink-500"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + (index + 3) * 0.1 }}
                  />
                  <span>{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-75 blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              transition={{ delay: 0.8, duration: 1 }}
            />
            <motion.div
              className="relative overflow-hidden rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >

              <img
                src={image}
                alt="Jahid's profile"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Service;
