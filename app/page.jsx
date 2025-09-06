import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col">
      <Header/>
      <div className=" ">
        <Hero/>
      </div>
      <Footer/>
    </div>
  );
}
