import React from "react";
import { motion } from "framer-motion";
import data from "../data";

export default function Languages() {
    const langs = data.languages || [];

    return (
        <section id="languages" className="py-16">
            <div className="container mx-auto px-4">
                <motion.h2 className="text-3xl md:text-4xl font-bold mb-8" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
                    Languages
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {langs.map((l, i) => (
                        <motion.div key={l.name || l + i} className="bg-gray-800/60 p-6 rounded-xl" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
                            <h3 className="font-semibold">{l.name || l}</h3>
                            <p className="text-sm text-gray-400 mt-1">{l.proficiency || ""}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
