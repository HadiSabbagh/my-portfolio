"use client";
import { useRef } from "react";
import Threads from "@/components/Threads";
import ScrollArrow from "@/components/ScrollArrow";
import AboutMe from "@/components/AboutMe";
import ProjectsSection from "@/components/ProjectsSection";
import { Hinge, Slide } from "react-awesome-reveal";
import RevealOnScroll from "@/components/RevealOnScroll";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  const scrollRef = useRef(null);

  function handleScrollDown() {
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "center" });

    const aboutSection = document.getElementById("about-section");
    const timer = setTimeout(() => {
      const aboutSection = document.getElementById("about-section");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 1400);
  }

  return (
    <>
      <div className="flex flex-col  ">
        <div className="relative w-screen min-h-screen overflow-hidden">
          <section className="absolute inset-0 -z-10">
            <Threads
              amplitude={3}
              distance={0.2}
              enableMouseInteraction={true}
            />
          </section>

          {/* Centered text container */}
          <section className="absolute inset-0 flex flex-col items-center justify-center text-white text-center space-y-2 z-10">
            <RevealOnScroll delay={0.9}>
              <h2 className="text-sm sm:text-base md:text-lg font-normal tracking-widest font-inriaSans">
              SOFTWARE ENGINEER
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3} direction="right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest font-inriaSans">
                Abdulhady Sabbagh
              </h2>
            </RevealOnScroll>

            {/* <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest font-inriaSans">
              Abdulhady Sabbagh
            </p> */}

            <Hinge delay={3000} triggerOnce>
              <RevealOnScroll delay={0.6} direction="down">
                <h2
                  className="text-xs sm:text-sm md:text-sm font-light
              tracking-widest font-robotoMono"
                >
                  Fixing the code.
                </h2>
              </RevealOnScroll>
            </Hinge>
            {/* <p className="text-xs sm:text-sm md:text-sm font-light tracking-widest font-robotoMono ">
              Building things that matter, one line at a time.
            </p> */}
          </section>
          <ScrollArrow
            className="animate-bounce absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 "
            onScroll={handleScrollDown}
            direction="down"
          ></ScrollArrow>
        </div>
        <div
          ref={scrollRef}
          className="relative w-screen min-h-screen inset-0 flex flex-col items-center justify-center text-white text-center text-2xl sm:text-3xl md:text-4xl "
        >
          <Slide triggerOnce>Let me tell you about myself &#128075;</Slide>
        </div>

        <div className="flex flex-col gap-[30vw]">
          <AboutMe></AboutMe>

          <ProjectsSection></ProjectsSection>

          <ContactMe></ContactMe>
        </div>
      </div>
    </>
  );
}
