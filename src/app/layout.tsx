import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "ViteCamion - Réservation de Camion pour Collecte d’Encombrants en France",
  description:
    "Réservez un camion facilement avec ViteCamion pour la collecte rapide de vos encombrants. Libérez de l’espace chez vous en toute simplicité, avec un service efficace et éco-responsable partout en Ile-De-France",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#e3f2fd]">{children}</body>
    </html>
  );
}
