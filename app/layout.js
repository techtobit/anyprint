import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});



export const metadata = {
  title: "All print services in United Arab Emirates(UAE)",
  description: "Discover rare collectible new landscape.",
  keywords: ["primeprint, printservices, primeprints, print_services_uae, uae, print services, Business cards, bill books, T-shirts, leaflets, banners, gold foiling, stickers, diaries, boxes, signboards, screen & digital printing, labels, offset and shopping bags printing services in UAE."],
  openGraph: {
    title: "Rare Print Services in UAE",
    description: "An exclusive online portfolio of collectible print services.",
    url: "https://primeprint.ae/",
    siteName: "primeprint",
    images: [
      {
        url: "/icons/primeprint_logo.png",
        width: 1200,
        height: 630,
        alt: "Prime Print Logo",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}  antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
