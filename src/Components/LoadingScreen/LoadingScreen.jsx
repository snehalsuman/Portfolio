import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ onFinish }) => {
  const [show, setShow] = useState(true);
  const [nameIndex, setNameIndex] = useState(0);
  const fullName = "Snehal Suman";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setNameIndex((prev) => {
        if (prev < fullName.length) {
          return prev + 1;
        } else {
          clearInterval(typingInterval);
          return prev;
        }
      });
    }, 150);

    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 800);
    }, 4000);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center z-50 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Optional subtle star background */}
          <div className="star-bg absolute inset-0 z-0" />

          {/* Animated Glow Background */}
          <motion.div
            className="absolute w-[600px] h-[600px] bg-gradient-to-br from-[#6366f1] to-[#a855f7] rounded-full opacity-25 blur-3xl z-0"
            animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.35, 0.2] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />

          {/* Text Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative text-center z-10"
          >
            <motion.h1
              className="text-white text-5xl md:text-6xl font-semibold mb-3 glow-text"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Welcome to my
            </motion.h1>

            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-5 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 80, delay: 0.3 }}
            >
              Portfolio Website
            </motion.h2>

            <h3 className="text-3xl md:text-4xl font-semibold tracking-wide gradient-name">
              {fullName.slice(0, nameIndex)}
            </h3>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
