import React, { useEffect, useState } from "react";

//Framer Motion
import { motion, AnimatePresence } from "framer-motion";

//React Spinner
import PulseLoader from "react-spinners/PulseLoader";
import { BarLoader } from "react-spinners";

//React Icons
import { BsFillLightningChargeFill } from "react-icons/bs";

const LoadingAnimation = () => {

  const [dots, setDots] = useState('');
  // const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length < 3) {
          return prev + '.';
        }
        return '';
      });
    }, 500); // Change the dots every 0.5 seconds

    // Navigate to the next page after 3 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval); // Stop the animation before navigating
      // navigate('/next-page'); // Replace '/next-page' with your target route
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1}}
        className='h-screen flex flex-col justify-center items-center font-noto'
      >
        <div className="flex flex-row items-center italic text-base md:text-xl text-center text-[#c4c4cc] select-none">
      Madness loading{dots}
      </div>
        <div>
          <BarLoader
            height={6}
            width={120}
            className=' rounded-full m-4'
            color='#c4c4cc'
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingAnimation;
