import { motion } from "framer-motion";
import { Button } from "antd";
import { 
  DownloadOutlined, TwitterOutlined, LinkedinOutlined, 
  GithubOutlined, DribbbleOutlined, FacebookOutlined 
} from "@ant-design/icons"; 
import sad from './../../../assets/sadman.png';
import { useEffect, useState } from "react";

const Banner = () => {
  const [showFacebook, setShowFacebook] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFacebook((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0B1F] relative overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#6D28D9 1px, transparent 1px),
          linear-gradient(to right, #6D28D9 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-transparent to-transparent" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text & Buttons */}
          <div className="space-y-8 text-white z-20 relative">
            <h1 className="text-4xl md:text-5xl font-bold">I am Sadman Shakib</h1>
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
                Next-Level Web Developer.
              </span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-xl">
              I break down complex user experience problems to create integrity-focused 
              solutions that connect billions of people.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <Button
                  icon={<DownloadOutlined />}
                  type="primary"
                  className="rounded-full text-white border-none hover:bg-purple-500"
                >
                  Download CV
                </Button>
              </motion.div>

              {/* Social Media Icons */}
              <div className="flex gap-4">
                {[
                  { icon: TwitterOutlined, href: "#twitter" },
                  { icon: DribbbleOutlined, href: "#dribbble" },
                  { icon: LinkedinOutlined, href: "#linkedin" },
                  { icon: GithubOutlined, href: "#github" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full border border-purple-500/50 
                    flex items-center justify-center text-purple-400 hover:bg-purple-500 
                    hover:text-white transition-all"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}

                {/* Facebook Icon with Smooth Fade Toggle */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showFacebook ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {showFacebook && (
                    <motion.a
                      href="#facebook"
                      whileHover={{
                        scale: 1.1,
                        rotate: 10,
                        transition: { type: "spring", stiffness: 200 },
                      }}
                      className="w-10 h-10 rounded-full border border-purple-500/50 
                      flex items-center justify-center text-purple-400 hover:bg-purple-500 
                      hover:text-white transition-all"
                    >
                      <FacebookOutlined className="h-5 w-5" />
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Section - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 
              rounded-3xl blur-3xl opacity-30 animate-pulse" />
              <motion.img
                src={sad}
                alt="Profile"
                className="relative z-10 object-cover w-full h-full transition-all 
                duration-500 ease-in-out transform rounded-full hover:scale-105"
                whileHover={{ scale: 1.1 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Statistics Section */}
      <div className="bg-[#0F0A1F] py-12 px-4 md:py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {[
              { number: "3+", text: "Years of Experience" },
              { number: "50+", text: "Projects Completed" },
              { number: "1.5K", text: "Happy Clients" },
              { number: "20+", text: "Certifications & Awards" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="space-y-2"
              >
                <div className="text-4xl md:text-5xl font-bold text-white">
                  {stat.number}
                </div>
                <p className="text-gray-400 text-sm md:text-base">
                  {stat.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
