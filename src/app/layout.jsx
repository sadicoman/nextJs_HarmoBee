import "./globals.css";



export const metadata = {
  title: "HarmoBee",
  description: "HarmoBee, le réseau social des abeilles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-secondary text-neutral-light">
        {children}
      </body>
    </html>
  );
}
