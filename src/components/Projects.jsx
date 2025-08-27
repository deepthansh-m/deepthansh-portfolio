import React from "react";
import { motion } from "framer-motion";
import data from "../data";

export default function Projects() {
    const projects = data.projects || [];

    return (
        <section id="projects" className="py-16">
            <div className="container mx-auto px-4">
                <motion.h2 className="text-3xl md:text-4xl font-bold mb-8" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
                    Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((p, i) => (
                        <motion.a
                            key={p.name + i}
                            className="block bg-gray-800/60 p-6 rounded-xl"
                            whileHover={{ scale: 1.02 }}
                            href={p.link || "#"}
                            target={p.link ? "_blank" : "_self"}
                            rel="noreferrer"
                        >
                            <h3 className="text-xl font-semibold">{p.name}</h3>
                            {p.description && <p className="text-gray-300 mt-2">{p.description}</p>}
                            {p.tech && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {p.tech.map((t) => <span key={t} className="text-xs px-2 py-1 bg-white/6 rounded">{t}</span>)}
                                </div>
                            )}
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
