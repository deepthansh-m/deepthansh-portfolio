import React from "react";
import { motion } from "framer-motion";
import data from "../data";

const links = [
    ["#about", "About"],
    ["#skills", "Skills"],
    ["#projects", "Projects"],
    ["#experience", "Experience"],
    ["#education", "Education"],
    ["#certifications", "Certifications"],
    ["#languages", "Languages"],
    ["#contact", "Contact"],
];

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45 }}
            className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur border-b border-white/6"
        >
            <div className="container mx-auto px-4 flex items-center justify-between py-3">
                <a href="#" className="font-semibold text-lg">{data.name}</a>
                <ul className="hidden md:flex gap-6 text-sm text-gray-300">
                    {links.map(([href, label]) => (
                        <li key={href}><a href={href} className="hover:text-white">{label}</a></li>
                    ))}
                </ul>
                <a href="#contact" className="hidden md:inline-block px-3 py-1 border rounded text-sm hover:bg-white/5">Hire me</a>
                <button className="md:hidden px-2 py-1 border rounded text-sm">Menu</button>
            </div>
        </motion.nav>
    );
}
