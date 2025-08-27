import React from "react";
import { motion } from "framer-motion";
import data from "../data";

// Import images using ES6 imports
import foggyForest from "../assets/foggy_forest.jpg";
import profile from "../assets/profile.jpg";

export default function Hero() {
    return (
        <header
            className="h-[80vh] flex items-center pt-16 bg-cover bg-center bg-fixed"
            // Use the imported image variable
            style={{ backgroundImage: `url(${foggyForest})` }}
        >
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2">
                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-6xl font-extrabold leading-tight"
                    >
                        {data.name}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25, duration: 0.6 }}
                        className="mt-4 text-lg text-gray-300 max-w-2xl"
                    >
                        {data.title} — {data.location}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 flex gap-4"
                    >
                        <a href="#projects" className="px-5 py-3 bg-white text-gray-900 rounded-md font-semibold hover:bg-gray-200 transition">View Projects</a>
                        <a href={data.github || "#"} target="_blank" rel="noreferrer" className="px-5 py-3 border rounded-md hover:bg-white/10 transition">GitHub</a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="md:w-1/3 mt-8 md:mt-0"
                >
                    {/* Use the imported image variable */}
                    <img
                        src={profile}
                        alt="Profile Photo"
                        className="rounded-full w-64 h-64 object-cover shadow-xl border-4 border-white mx-auto"
                    />
                </motion.div>
            </div>
        </header>
    );
}