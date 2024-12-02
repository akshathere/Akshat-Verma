import React from "react";
import HighText from "./HighText";

const About = () => {
  return (
    <div className='font-noto'>
      <div className=' font-semibold px-1 py-2 text-xl md:text-2xl text-slate-100 select-none'>
        About
      </div>
      <div className='bg-[#27272a]/40 hover:brightness-110 p-3 md:p-4 rounded-lg text-[#7d7d85]  text-noto text-base  md:text-base tracking-wide  ease-linear duration-100'>
        <div className='pb-2'>
          Hey, I'm <HighText>Akshat Verma  👋</HighText>. I am a passionate{" "}
          <HighText>Developer 👨🏻</HighText> who loves to code{" "}
          <HighText>insane products</HighText>.
        </div>
        <div className='pb-2'>
        I am an Enthusiastic problem solver with excellent <HighText>communication skills</HighText> and a strong ability to <HighText>analyze complex issues</HighText> and
        deliver <HighText>effective solutions</HighText>. Highly skilled web developer with extensive experience in creating <HighText>user-friendly </HighText>
        web applications.
        </div>
        <div className='pb-2'>
          As a final year <HighText>Computer Science & Engineering</HighText>{" "}
          undergraduate student, I'm eagerly seeking{" "}
          <HighText>Full-Time Opportunities</HighText> to apply my knowledge and
          passion in a dynamic environment.
        </div>
      </div>
    </div>
  );
};

export default About;
