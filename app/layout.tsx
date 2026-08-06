import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/src/component/Footer";
import Navbar from "@/src/component/Header";
import type { Metadata } from "next";
import Script from "next/script"; 

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Goyal Salt - Trusted Salt Manufacturers & Suppliers in India",
  description:
    "Goyal Salt Ltd is a leading salt manufacturer, delivering premium-quality salt to distributors and suppliers across India. Call us to become our distributor.",
  icons: {
    icon: "/Images/logo.ico",
  },
  verification: {
    google: "26UyYsp4aUYEYZfP8iwIGJOglj8IRShHDrE54_NfXsw",
  },

  openGraph: {
    title: "Goyal Salt - Trusted Salt Manufacturers & Suppliers in India",
    description:
      "Goyal Salt Ltd is a leading salt manufacturer, delivering premium-quality salt to distributors and suppliers across India. Call us to become our distributor.",
    url: "https://goyalsaltltd.com/",
    siteName: "Goyal Salt Limited",
    images: [
      {
        url: "https://goyalsaltltd.com/_next/image?url=%2FImages%2FUntitled-1-02-1-scaled.jpg",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M7G5DXTW');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>

      <body className={poppins.variable}>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M7G5DXTW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M7G5DXTW');
          `}
        </Script>

        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ESLQDBRFZ4"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ESLQDBRFZ4');
          `}
        </Script>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}