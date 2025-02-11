// src/components/Header.js
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="bg-blue-500 text-white py-4 border-radius 9px"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-3xl text-center">The Weather App</h1>
    </motion.header>
  );
};

export default Header;
