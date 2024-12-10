/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#FFC107", // Jaune doré pour une touche vibrante
                    dark: "#FFB300", // Ton plus sombre du jaune
                    light: "#FFD54F", // Ton plus clair du jaune
                },
                secondary: {
                    DEFAULT: "#212121", // Noir profond pour un contraste
                    dark: "#000000", // Ton encore plus foncé
                    light: "#484848", // Gris anthracite
                },
                accent: {
                    DEFAULT: "#FF5722", // Orange pour un élément accrocheur
                    light: "#FF8A50", // Orange clair
                    dark: "#E64A19", // Orange foncé
                },
                neutral: {
                    DEFAULT: "#F5F5F5", // Gris clair pour le fond
                    dark: "#E0E0E0", // Ton légèrement plus sombre
                    light: "#FFFFFF", // Blanc pur
                },
                warning: "#FFC107", // Même jaune que le primaire
                success: "#4CAF50", // Vert pour indiquer une action réussie
                error: "#F44336", // Rouge pour les erreurs
            },
        },
    },
    plugins: [],
};
