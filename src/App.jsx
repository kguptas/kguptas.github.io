import React from 'react' //got from rafce because of react snippets plugin
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";
// import Clients from "./sections/Clients.jsx";

const App = () => {
    return (
        <main className={"max-w-7xl mx-auto"}>
            <Navbar/>
            <Hero/>
            <About/>
            <Projects/>
            {/*<Clients/>*/}
            <Experience/>
            <Contact/>
            <Footer/>
        </main>
    )
}
export default App
