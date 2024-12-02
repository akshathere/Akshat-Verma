import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

//Components
import Container from "../layouts/Container";
import Navigation from "../components/Navigations/Navigation";
import LoadingAnimation from "../components/LoadingAnimation/LoadingAnimation";
import MainScreens from "../components/MainScreens/MainScreens";

const Home: NextPage = () => {
  const [showAnimation, setShowAnimation] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setShowAnimation(false);
    }, 2000);
  }, []);

  if (showAnimation) {
    
    return (
      <div className={``}>
        <Head>
        <title>Akshat Verma</title>
        <link rel='icon' href='/favicon.ico' />
        {/* <meta name="description" content="Pavitra's portfolio showcasing his development skills and projects."></meta> */}
        <meta name="author" content="Akshat Verma"></meta>
        <meta name="keywords" content="Akshat,just_akshat,akshat.ts,Development,Web Development, portfolio,TailwindCSS,React.js,react,github, Next.js,Redux, projects, skills"></meta>
        </Head>
        <LoadingAnimation />
      </div>
    );
  } else {
    return (
      <Container>
        <div className='min-h-screen h-full max-w-screen-md mx-4 md:mx-auto flex flex-col flex-grow '>
          <Navigation/>
          <MainScreens/>
        </div>
      </Container>
    );
  }
};

export default Home;
