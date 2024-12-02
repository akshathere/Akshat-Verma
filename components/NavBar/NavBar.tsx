import React from "react";
import Image from "next/image";

//Framer Motion
import { AnimateSharedLayout, motion } from "framer-motion";

//Components
import SocialButton from "../Buttons/SocialButton";

//Data
import { SOCIAL_DATA } from "../../data/socialLinks";
import SocialButtonNormal from "../Buttons/SocialButtonNormal";

//Profile Picture
import guts from "../../public/guts.png";

const NavBar = () => {
  return (
    <AnimateSharedLayout>
      <div
        className={`mt-8 md:mt-12 flex flex-col justify-between max-w-screen-md mx-4 md:mx-auto font-noto`}
      >
        <div className=' flex flex-row justify-between'>
          <div className='flex flex-row gap-4'>
            <div className='rounded-full overflow-hidden'>
              <Image src={guts} alt='' height={56} width={56} />
            </div>
            <div className=''>
              <div className='text-neutral-100 text-3xl font-semibold'>
                Akshat Verma
              </div>
              <div className="text-sm tracking-wider leading-1 font-mono glowing-text">
                Software Engineer{" "}
              </div>
            </div>
          </div>
          {/*----------Social Links for Desktop----------- */}
          <motion.div layout className='hidden md:flex flex-row space-x-2'>
            {SOCIAL_DATA.map((e, i) => {
              return <SocialButton key={i} link={e.link} name={e.name} />;
            })}
          </motion.div>
        </div>

        {/*----------Social Links for Mobile----------- */}
        <motion.div layout className='mt-6 flex md:hidden flex-row space-x-2'>
          {SOCIAL_DATA.map((e, i) => {
            return <SocialButtonNormal key={i} link={e.link} name={e.name} />;
          })}
        </motion.div>
      </div>
    </AnimateSharedLayout>
  );
};

export default NavBar;
