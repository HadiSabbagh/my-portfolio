"use client";
import { useRef } from "react";
import Threads from "@/components/Threads";
import ScrollArrow from "@/components/ScrollArrow";
import AboutMe from "@/components/AboutMe";
import BlurText from "@/components/BlurText";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  // const handleAnimationComplete = () => {
  //   console.log("Animation completed!");
  // };
  const myRef = useRef(null);

  function handleScrollDown() {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <div className="flex flex-col gap-y-500">
        <div className="relative w-screen h-screen overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Threads
              amplitude={3}
              distance={0.2}
              enableMouseInteraction={true}
            />
          </div>

          {/* Centered text container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center space-y-2 z-10">
            <BlurText
              text="FULLSTACK ENGINEER"
              delay={150}
              animateBy="words"
              direction="top"
              // onAnimationComplete={handleAnimationComplete}
              className="text-sm sm:text-base md:text-lg font-normal tracking-widest font-inriaSans"
            />
            <BlurText
              text="Abdulhady Sabbagh"
              delay={150}
              animateBy="words"
              direction="top"
              // onAnimationComplete={handleAnimationComplete}
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest font-inriaSans"
            />
            {/* <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest font-inriaSans">
              Abdulhady Sabbagh
            </p> */}
            <BlurText
              text="Building things that matter, one line at a time."
              delay={150}
              animateBy="words"
              direction="top"
              // onAnimationComplete={handleAnimationComplete}
              className="text-xs sm:text-sm md:text-sm font-light tracking-widest font-robotoMono"
            />
            {/* <p className="text-xs sm:text-sm md:text-sm font-light tracking-widest font-robotoMono ">
              Building things that matter, one line at a time.
            </p> */}
          </div>
          <ScrollArrow
            className="animate-bounce absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 "
            onScroll={handleScrollDown}
            direction="down"
          ></ScrollArrow>
        </div>

        <AboutMe id={"about-section"} ref={myRef}></AboutMe>
        <ProjectsSection></ProjectsSection>
      </div>
    </>
  );
}
