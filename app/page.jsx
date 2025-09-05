import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col">
      <Header/>
      <div className=" bg-black-500">
        <Hero/>
        <Skills/>
        <Projects/>
      </div>
      <Footer/>
    </div>
  );
}
