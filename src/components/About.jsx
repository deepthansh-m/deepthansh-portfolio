import React from "react";
import { motion } from "framer-motion";
import data from "../data";

export default function About() {
    return (
        <section id="about" className="py-16">
            <div className="container mx-auto px-4">
                <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
                    About
                </motion.h2>
                <motion.div className="bg-gray-800/60 p-6 rounded-xl" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
                    <p className="text-gray-300">{data.about}</p>
                    <p className="text-sm text-gray-400 mt-4">Location: {data.location} · <a href={data.linkedin} className="text-indigo-400" target="https://www.linkedin.com/in/deepthansh-m-9b1b13260/" rel="noreferrer">LinkedIn</a></p>
                </motion.div>
            </div>
        </section>
    );
}
