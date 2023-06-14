"use client"
import About from "@/components/About/About";
import ContactMe from "@/components/ContactMe/ContactMe";
import Projects from "@/components/Projects/Projects";
import ScrollTo from "@/components/ScrollTo/ScrollTo";
import Skills from "@/components/Skills/Skills";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div
      id="home"
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-proximity overflow-y-auto overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      {/* <Header /> */}

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="workExperience" className="snap-start">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      {/* <footer className="sticky bottom-5 w-full cursor-pointer"> */}
      {/* <ScrollTo /> */}
      {/* </footer> */}
    </div>
  );
}
