import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function AboutMe({ref}) {
  return (
    <section ref={ref}
      id="about-section"
      className="  min-h-screen max-w-5xl mx-auto px-6 py-16 text-white font-robotoMono"
    >
      <div className="flex flex-col lg:flex-row gap-20 justify-between">
        {/* Left column */}

        <div className="flex flex-col items-start gap-6 lg:w-1/2">
          {/* Image */}
          <RevealOnScroll direction="right">
            <div className="w-48 h-48 rounded-full overflow-hidden">
              <Image
                src="/me.jpg"
                alt="Abdulhady Sabbagh"
                width={192}
                height={192}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </RevealOnScroll>
          {/* About me label */}
          <RevealOnScroll direction="right" delay={0.1}>
            <p className="flex tracking-widest text-sm font-light  text-gray-300">
              About me
            </p>
          </RevealOnScroll>
          {/* Intro */}
          <RevealOnScroll delay={0.2}>
            <h2 className="text-3xl md:text-3xl font-bold">
              Hello There! I'm Abdulhady,
            </h2>
          </RevealOnScroll>
          {/* Main paragraph */}
          <RevealOnScroll direction="down" delay={0.3}>
            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                An aspiring Software Engineer about to graduate with a
                Bachelor's degree in Software Engineering. I have a strong
                passion for Artificial Intelligence and Web Development, with a
                growing focus on full-stack engineering using modern frameworks
                like React, Next.js, Django, and machine learning with Python.
              </p>
              <p>
                My journey with computers started early—I’ve been exploring,
                fixing, and experimenting with technology since I was five. By
                age twelve, I was already solving real-world problems, from
                video game performance issues on my computer to system-level
                errors I had while also trying to play video games 😭.
              </p>
              <p>
                This hands-on curiosity laid the foundation for my
                problem-solving mindset and passion for software development.
                Though I’m just beginning my professional journey, I’ve built a
                solid foundation through academic projects and personal
                exploration.
              </p>
              <p>
                I’m always eager to collaborate on meaningful projects and
                thrive in team environments where learning and innovation are
                valued. My strengths lie in rapidly approaching problems with
                curiosity and logic, strong foundational programming skills, and
                an enthusiasm for staying up-to-date with emerging technologies.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-10 lg:w-1/2">
          {/* Subheading aligned with intro */}
          <RevealOnScroll>
            <div className="pt-14 lg:pt-66">
              <h3 className="text-xl md:text-2xl font-semibold">What I do</h3>
            </div>
          </RevealOnScroll>

          {/* Research */}
          <RevealOnScroll delay={0.5} direction="down">
            <div>
              <h4 className="text-xl font-bold mb-2">Research</h4>
              <p className="text-base leading-relaxed">
                Currently, I'm involved in research exploring the use of large
                language models for grading open-ended student responses—an
                exciting intersection of AI and education.
              </p>
            </div>
          </RevealOnScroll>
          {/* Hobbies */}
          <RevealOnScroll delay={0.8} direction="down">
            <div>
              <h4 className="text-xl font-bold mb-2">Hobbies</h4>
              <p className="text-base leading-relaxed">
                I also enjoy walking, going out with friends, and staying active
                outside of tech. Whether it's exploring new places, trying out
                local food spots, or just having great conversations, I value
                meaningful connections and balance in life. These moments help
                me recharge and bring fresh perspective to the work I do. I’m
                also an avid gamer—playing video games has not only been a
                source of fun but also one of the earliest sparks for my
                interest in computers and problem-solving. It’s where my
                curiosity for tech first took root, and it still helps me unwind
                and stay sharp today.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
