/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#4f46e5", // Indigo
                secondary: "#9333ea", // Purple
                dark: "#0f172a"
            }
        }
    },
    plugins: []
};
