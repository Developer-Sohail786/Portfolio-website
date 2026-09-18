import { Navbar } from "@/components/layout/navbar";
import AskSohail from "@/components/sections/ask-sohail";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { CLI } from "@/components/cli/cli";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AskSohail />
        <Experience />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />

      <CLI />
    </>
  );
}
