import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Skills from "../components/Skills";


export default function Home() {
  return (
    <div className="">
      <Header/>
      <div className=" ">
        <Hero/>
        <Skills/>
      </div>
      <Footer/>
    </div>
  );
}
