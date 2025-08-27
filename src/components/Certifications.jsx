import React from "react";
import { motion } from "framer-motion";
import data from "../data";

export default function Certifications() {
    const certs = data.certifications || [];

    return (
        <section id="certifications" className="py-16 bg-gray-900/80">
            <div className="container mx-auto px-4">
                <motion.h2 className="text-3xl md:text-4xl font-bold mb-8" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
                    Certifications
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {certs.map((c, i) => (
                        <motion.div key={(c.name || c.title) + i} className="bg-gray-800/60 p-6 rounded-xl" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
                            <h3 className="text-lg font-semibold">{c.title || c.name}</h3>
                            <p className="text-sm text-gray-400">{c.issuer || c.issuerName} {c.issued ? `· ${c.issued}` : c.year ? `· ${c.year}` : ""}</p>
                            {c.details && <p className="text-gray-300 mt-2">{c.details}</p>}
                            {c.credentialId && <p className="text-xs text-gray-500 mt-2">Credential ID: {c.credentialId}</p>}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
