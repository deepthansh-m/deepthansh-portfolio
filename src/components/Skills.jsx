import React from "react";
import { motion } from "framer-motion";
import data from "../data";

export default function Skills() {
    const skillCategories = data.skills || {};

    return (
        <section id="skills" className="py-16 bg-gray-900/80">
            <div className="container mx-auto px-4">
                <motion.h2 className="text-3xl md:text-4xl font-bold mb-8" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
                    Skills
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {Object.entries(skillCategories).map(([category, list], idx) => (
                        <motion.div key={category} className="bg-gray-800/60 p-6 rounded-xl" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay: idx * 0.12}} viewport={{once:true}}>
                            <h3 className="text-xl font-semibold text-indigo-300 mb-4">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {list.map((s) => (
                                    <span key={s} className="px-3 py-1 bg-white/6 rounded-full text-sm">{s}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
