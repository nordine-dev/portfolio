import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Blog from "../components/Blog";
import Contact from "../components/Contact";


export default function Home() {
  return (
    <div className="">
      <Header/>
      <div className=" ">
        <Hero/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Education/>
        <Certifications/>
        <Blog/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}
