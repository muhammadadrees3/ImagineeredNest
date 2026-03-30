import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://imagineerednest.com'),
  title: {
    default: "Imagineerednest | From Zero to Digital Success",
    template: "%s | Imagineerednest"
  },
  description: "Innovative digital solutions, web development, and creative design to transform your business from zero to digital success.",
  keywords: ["web development", "digital marketing", "UI/UX design", "app development", "SEO", "Pakistan"],
  authors: [{ name: "Imagineerednest Team" }],
  creator: "Imagineerednest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://imagineerednest.com",
    siteName: "Imagineerednest",
    title: "Imagineerednest | From Zero to Digital Success",
    description: "Innovative digital solutions, web development, and creative design.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Imagineerednest Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imagineerednest | From Zero to Digital Success",
    description: "Innovative digital solutions, web development, and creative design.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <head>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if (theme === 'dark' || (!theme && supportDarkMode)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-poppins bg-white text-black antialiased overflow-x-hidden">
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
      </body>
    </html>
  );
}
