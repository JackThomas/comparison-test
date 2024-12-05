const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/components/**/*.{ts,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gray: "#ecedf0",
                header: "#191e2b",
                content: "#3f4656",
                added: "#5c9465",
                removed: "#bd5343",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
