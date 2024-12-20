import React from "react";
import Badge from "./Badge";

//Icons --> Language's
import ts from "../../public/img/languages/ts.png";
import js from "../../public/img/languages/js.png";
import cpp from "../../public/img/languages/c++.png";
//Icons --> Frameworks / Tech's
import next from "../../public/img/frameworks/next.png";
import rj from "../../public/img/frameworks/rj.png";
import ex from "../../public/img/frameworks/ex.png";
import nj from "../../public/img/frameworks/nj.png";
import mb from "../../public/img/frameworks/mb.png";
import postgres from "../../public/img/frameworks/postgres.png";
import tc from "../../public/img/frameworks/tc.png";
import prisma from "../../public/img/frameworks/prisma.png";
import fb from "../../public/img/frameworks/fb.png";
//Icons --> Developer Tool's
import canva from "../../public/img/tools/canva.png";
import figma from "../../public/img/tools/figma.png";
import git from "../../public/img/tools/git.png";
import github from "../../public/img/tools/github.png";
import postman from "../../public/img/tools/postman.png";
import vsc from "../../public/img/tools/vsc.png";
import vercel from "../../public/img/tools/vercel.png";
import ec2 from "../../public/img/tools/ec2.svg";

const TechStack = () => {
  return (
    <div className='mt-8 font-noto duration-150 ease-linear'>
      <div className='font-noto font-semibold px-1 py-2 text-xl md:text-2xl text-slate-100 select-none'>
        Tech Stack
      </div>
      <div className='flex flex-col bg-[#27272a]/40 hover:bg-[#27272a]/50 p-3 md:p-4 rounded-lg text-neutral-400/70  text-noto text-base tracking-wide  ease-linear duration-100'>
        <div className='text-[#7d7d85]'>Language's</div>
        <div className='flex flex-row flex-wrap pt-1 pb-3'>
          <Badge link={ts} text='Typescript' />
          <Badge link={js} text='Javascript' />
          <Badge link={cpp} text='C++' />
        </div>
        <div className='text-[#7d7d85]'>Frameworks / Librarie's</div>
        <div className='flex flex-row flex-wrap pt-1 pb-3'>
          <Badge link={next} text='Next.js' />
          <Badge link={rj} text='React.js' />
          <Badge link={ex} text='Express.js' />
          <Badge link={nj} text='Node.js' />
          <Badge link={tc} text='Tailwind Css' />
          <Badge link={prisma} text='Prisma' />

        </div>
        <div className='text-[#7d7d85]'>Database's</div>
        <div className='flex flex-row flex-wrap pt-1 pb-3'>
          <Badge link={mb} text='MongoDB' />
          <Badge link={postgres} text='PostgreSQL' />
        </div>
        <div className='text-[#7d7d85]'>Cloud / Deployment</div>
        <div className='flex flex-row flex-wrap pt-1 pb-3'>
          <Badge link={ec2} text='AWS EC2' />
          <Badge link={vercel} text='Vercel' />
          <Badge link={fb} text='Firebase' />
        </div>
        <div className='text-[#7d7d85]'>Developer Tool's</div>
        <div className='flex flex-row flex-wrap pt-1 pb-3'>
          <Badge link={git} text='Git' />
          <Badge link={github} text='GitHub' />
          <Badge link={vsc} text='VsCode' />
          <Badge link={postman} text='Postman' />
          <Badge link={figma} text='Figma' />
          <Badge link={canva} text='Canva' />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
