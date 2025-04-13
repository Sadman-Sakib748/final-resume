import { motion } from "framer-motion";
import { Button } from "antd";
import {
  DownloadOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  GithubOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import sad from "./../../../assets/sadman.png";
import { useEffect, useState } from "react";

const Banner = () => {
  const fullText =
    "I break down complex user experience problems to create integrity-focused solutions that connect billions of people.";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const speed = isDeleting ? 30 : 60;

    const typingInterval = setInterval(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex((prev) => prev + 1);

        if (index >= fullText.length) {
          setIsDeleting(true);
          setTimeout(() => {}, 1000); // pause before deleting
        }
      } else {
        setDisplayedText(fullText.slice(0, index - 1));
        setIndex((prev) => prev - 1);

        if (index <= 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [index, isDeleting]);

  return (
    <div className="min-h-screen bg-[#0D0B1F] relative overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#6D28D9 1px, transparent 1px),
          linear-gradient(to right, #6D28D9 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-transparent to-transparent" />

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-white z-20 relative">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center md:text-left"
            >
              {["S", "a", "d", "m", "a", "n", " ", "-", " ", "S", "a", "k", "i", "b"].map((char, index) => (
                <span
                  key={index}
                  className="inline-block bounce-color"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationDuration: "1s",
                    animationIterationCount: "infinite",
                  }}
                >
                  {char}
                </span>
              ))}
              <style>
                {`
                  .bounce-color {
                    color: white;
                    animation-name: bounceColor;
                  }

                  @keyframes bounceColor {
                    0%, 100% {
                      transform: translateY(0);
                      color: white;
                    }
                    50% {
                      transform: translateY(-10px);
                      color: #4195f7;
                    }
                  }
                `}
              </style>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
              className="text-4xl md:text-6xl font-bold"
            >
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
                Next-Level Web Developer.
              </span>
            </motion.h2>

            {/* Repeating Typing Effect */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-gray-300 text-lg md:text-xl max-w-xl whitespace-pre-wrap min-h-[100px]"
            >
              {displayedText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                |
              </motion.span>
            </motion.p>

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

              <div className="flex gap-4">
                {[
                  { icon: TwitterOutlined, href: "https://x.com/home" },
                  { icon: LinkedinOutlined, href: "https://www.linkedin.com/" },
                  { icon: GithubOutlined, href: "https://github.com/" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full border border-purple-500/50 
                    flex items-center justify-center text-purple-400 hover:bg-purple-500 
                    hover:text-white transition-all"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}

                <a
                  href="https://www.facebook.com/profile.php?id=100076267579935"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-purple-500/50 
                  flex items-center justify-center text-purple-400 hover:bg-purple-500 
                  hover:text-white transition-all"
                >
                  <FacebookOutlined className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-3xl opacity-30 animate-pulse" />
              <motion.img
                src={sad}
                alt="Profile"
                className="relative z-10 object-cover w-full h-full transition-all duration-500 ease-in-out transform rounded-full hover:scale-105"
                whileHover={{ scale: 1.1 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
