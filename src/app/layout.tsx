import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title:
    "Vite Camion - Réservation de Camion pour Collecte d’Encombrants en France",
  description:
    "Réservez un camion facilement avec Vite Camion pour la collecte rapide de vos encombrants. Libérez de l’espace chez vous en toute simplicité, avec un service efficace et éco-responsable partout en Ile-De-France",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#e3f2fd] roboto-light h-screen grid grid-rows-[auto_1fr_auto]">
        <Header />
        <div className="overflow-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
