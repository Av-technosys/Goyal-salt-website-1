"use client";

import { usePathname } from "next/navigation";

import Footer from "@/src/component/Footer";
import Navbar from "@/src/component/Header";
import WhatsAppButton from "@/src/component/WhatsAppButton";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <SmoothScrollProvider />
      {children}
      <Footer />
      <WhatsAppButton />
    </>
  );
}
