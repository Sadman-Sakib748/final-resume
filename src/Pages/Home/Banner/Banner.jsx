import { motion } from "framer-motion";
import { Button } from "antd";
import { DownloadOutlined, TwitterOutlined, LinkedinOutlined, GithubOutlined, FacebookOutlined } from "@ant-design/icons";
import sad from './../../../assets/sadman.png';
import { useEffect, useState } from "react";

const Banner = () => {
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
            {/* Name Animation */}
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4  text-center md:text-left"
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
                      color: #4195f7; /* Gradient's color */
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
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
              className="text-gray-300 text-lg md:text-xl max-w-xl"
            >
              I break down complex user experience problems to create integrity-focused 
              solutions that connect billions of people.
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

              {/* Social Media Icons */}
              <div className="flex gap-4">
                {[ 
                  { icon: TwitterOutlined, href: "https://x.com/home" }, 
                  { icon: LinkedinOutlined, href: "https://www.facebook.com/profile.php?id=100076267579935" },
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

                {/* Facebook Icon (No animation) */}
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

      {/* Developer Section */}
      <div className="bg-[#0F0A1F] py-12 px-4 md:py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Developer Title */}
            <motion.h3
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
              className="text-3xl text-center text-white font-semibold mb-8"
            >
              Developer Stats
            </motion.h3>

            {/* Stats */}
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
