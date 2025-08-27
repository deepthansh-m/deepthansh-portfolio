import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Languages from "./components/Languages";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
            <Navbar />
            <Hero />
            <div className="container mx-auto px-6">
                <About />
                <Experience />
                <Education />
                <Projects />
                <Skills />
                <Certifications />
                <Languages />
                <Contact />
            </div>
        </div>
    );
}

export default App;
