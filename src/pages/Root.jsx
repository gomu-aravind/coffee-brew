import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import FeaturedIn from "../components/FeaturedIn";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Subscribe from "../components/Subscibe";
import Testimonials from "../components/Testimonials";

export default function RootLayout(){
    return <>
    <Header/>
    <main data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
    <Home/>
    <FeaturedIn/>
    <About/>
    <Menu/>
    <Testimonials/>
    <Subscribe/>
    </main>
    <Footer/>
    </>
}