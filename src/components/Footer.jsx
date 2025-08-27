import React from "react";

export default function Footer() {
    return (
        <footer className="py-8 text-center text-gray-400">
            © {new Date().getFullYear()} — Built with React, Tailwind & Framer Motion
        </footer>
    );
}
