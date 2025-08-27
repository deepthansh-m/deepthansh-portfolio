import React from "react";
import { motion } from "framer-motion";
import data from "../data";

export default function Experience() {
    const exp = data.experience || [];

    return (
        <section id="experience" className="py-16 bg-gray-900/80">
            <div className="container mx-auto px-4">
                <motion.h2 className="text-3xl md:text-4xl font-bold mb-8" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
                    Experience
                </motion.h2>

                <div className="space-y-4">
                    {exp.map((e, i) => (
                        <motion.div key={e.company + i} className="bg-gray-800/60 p-6 rounded-xl" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
                            <h3 className="text-lg font-semibold">{e.role || e.title} · {e.company}</h3>
                            <p className="text-sm text-gray-400">{e.start || e.duration || ""} {e.end ? `— ${e.end}` : ""}</p>
                            {e.details && <p className="text-gray-300 mt-2">{Array.isArray(e.details) ? e.details.join(" ") : e.details}</p>}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
