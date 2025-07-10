import "./globals.css";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Service and Protocol | Relaciones Públicas y Eventos",
  description: "Relaciones públicas, eventos, protocolo y promociones publicitarias",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
