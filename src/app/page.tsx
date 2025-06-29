import About from "@/component/About";
import Contact from "@/component/Contact";
import Experience from "@/component/Experience";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Hero from "@/component/Hero";
import Projects from "@/component/Project";
import Skills from "@/component/Skills";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
