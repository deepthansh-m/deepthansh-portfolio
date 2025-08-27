import React from "react";
import { motion } from "framer-motion";
import data from "../data";

export default function Education() {
    const edu = data.education || [];

    return (
        <section id="education" className="py-16">
            <div className="container mx-auto px-4">
                <motion.h2 className="text-3xl md:text-4xl font-bold mb-8" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
                    Education
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {edu.map((e, i) => (
                        <motion.div key={e.school + i} className="bg-gray-800/60 p-6 rounded-xl" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
                            <h3 className="text-lg font-semibold">{e.school}</h3>
                            <p className="text-gray-400">{e.degree || e.field}</p>
                            <p className="text-sm text-gray-500 mt-2">{e.start || e.startDate} {e.end || e.endDate ? `— ${e.end || e.endDate}` : ""}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
