"use client";
import Threads from "@/components/Threads";
import ScrollDown from "@/components/ScrollDown";
import AboutMe from "@/components/AboutMe";
import StarBorder from "@/components/StarBorder";
import BlurText from "@/components/BlurText";

export default function Home() {
  // const handleAnimationComplete = () => {
  //   console.log("Animation completed!");
  // };
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
          <ScrollDown
            direction="down"
            nextSectionId="about-section"
          ></ScrollDown>
        </div>

        <AboutMe id={"about-section"}></AboutMe>
        <div>
          <StarBorder
            as="button"
            className="custom-class"
            color="red"
            speed="5s"
          ></StarBorder>
        </div>
      </div>
    </>
  );
}
