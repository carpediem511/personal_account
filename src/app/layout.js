import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
	default: "Цифровой помощник", 
	template: "%s | Momentum"
},
  description: "Momentum – универсальный цифровой помощник для управления финансами, планирования дел и организации досуга. Легко управляйте своим временем, ставьте цели и достигайте их. Все необходимые инструменты в одном месте для вашей продуктивности и комфорта.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
		<div className="content">
		<Navbar />
		{children}
		<Footer />
		</div>
		</body>
    </html>
  );
}
