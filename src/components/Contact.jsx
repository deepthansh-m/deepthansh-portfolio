import React from "react";
import { motion } from "framer-motion";
import data from "../data";

export default function Contact() {
    return (
        <section id="contact" className="py-16 bg-gray-900/80">
            <div className="container mx-auto px-4">
                <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
                    Contact
                </motion.h2>
                <motion.div className="bg-gray-800/60 p-6 rounded-xl" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
                    <p className="text-gray-300">I’m open to internships, collaborations and opportunities. Reach me via:</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                        <a className="px-4 py-2 border rounded" href={data.linkedin} target="https://www.linkedin.com/in/deepthansh-m-9b1b13260/" rel="noreferrer">LinkedIn</a>
                        <a className="px-4 py-2 border rounded" href={data.github} target="https://github.com/deepthansh-m" rel="noreferrer">GitHub</a>
                        <a className="px-4 py-2 border rounded" href={`mailto:${data.email || "deepthanshm@gmail.com.com"}`}>Email</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
