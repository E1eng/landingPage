import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Button = ({ styles }) => {
  const [showAlert, setShowAlert] = useState(false);

  const openAlert = () => {
    setShowAlert(true);
  
    setTimeout(() => {
      closeAlert();
    }, 3000); 
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <div className="relative">
      <button
        onClick={openAlert}
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-[10px] outline-none hover:from-blue-500 hover:to-purple-600 transition-all duration-300 relative ${styles}`}
      >
        Get Started
        <div className="absolute top-0 left-0 w-full h-full opacity-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-[10px] transition-opacity duration-300"></div>
      </button>
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-[200px] flex items-center justify-center z-50"
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 rounded-[15px] shadow-lg text-center w-[350px] mx-auto relative">
              <button
                onClick={closeAlert}
                className="text-gray-400 hover:text-gray-100 absolute top-2 right-2 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <p className="text-2xl font-extrabold mb-2 text-white">Coming Soon</p>
              <p className="text-gray-200 text-lg mb-4">Stay tuned for exciting updates!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Button;
