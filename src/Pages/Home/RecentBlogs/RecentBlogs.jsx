import { motion } from "framer-motion"

const RecentBlogs = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
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
    
      const services = [
        {
          title: "Understand the Client's Industry and Audience",
          description:
            "Gain a deep understanding of the client's industry, target audience, and competitors. Identify gaps in their online presence or services.",
        },
        {
          title: "Leverage Technology Trends:",
          description:
            "Stay updated on web development and technology trends and capture emerging technologies that can enhance the user experience or automate processes.",
        },
        {
          title: "User-Centric Design:",
          description:
            "Prioritize user experience and design thinking to create a website or web application that addresses real user needs and challenges.",
        },
        {
          title: "Customization and Personalization:",
          description:
            "Offer personalized web experiences through recommendation engines, user preferences, and dynamic content that adapts to individual users.",
        },
      ]
    

    return (
        <div className="min-h-screen bg-[#0a0a20] text-white font-sans p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Top line with focus statement */}
          <div className="flex justify-end mb-16 relative">
            <motion.div
              className="text-right"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-sm md:text-base">
                I focus on <span className="text-blue-400">helping your brand grow</span>
                <br />
                and move forward
              </p>
            </motion.div>
            <motion.div
              className="absolute right-0 top-1/2 flex items-center"
              initial={{ width: 0 }}
              animate={{ width: "50%" }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                className="h-2 w-2 rounded-full bg-white mr-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              />
              <div className="h-[1px] bg-white flex-grow" />
            </motion.div>
          </div>
  
          {/* Main heading section */}
          <div className="mb-20 flex flex-col md:flex-row items-center justify-between">
            <motion.div
              className="flex items-center mb-6 md:mb-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative overflow-hidden rounded-full w-24 h-24 mr-4">
                <img
                  src="/placeholder.svg?height=96&width=96"
                  alt="Office space"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <motion.h1
                className="text-4xl md:text-6xl font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Unique <span className="font-extralight">Ideas</span>
              </motion.h1>
            </motion.div>
  
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-red-500 text-white font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                WHAT I DO?
              </motion.button>
            </motion.div>
          </div>
  
          <motion.h2
            className="text-5xl md:text-7xl font-light mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            For Your <span className="font-extralight">Business.</span>
          </motion.h2>
  
          {/* Services grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {services.map((service, index) => (
              <motion.div key={index} className="border border-gray-800 p-6 flex flex-col h-full" variants={item}>
                <h3 className="text-lg font-medium mb-4">{service.title}</h3>
                <p className="text-sm text-gray-400 mb-6 flex-grow">{service.description}</p>
                <motion.button
                  className="px-6 py-2 rounded-md bg-gradient-to-r from-purple-500 to-red-500 text-white self-start mt-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Go
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    );
};

export default RecentBlogs;
