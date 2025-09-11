import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Certifications from "../components/Certifications";


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
      </div>
      <Footer/>
    </div>
  );
}
