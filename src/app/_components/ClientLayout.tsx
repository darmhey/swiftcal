"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideHeaderRoutes = ["/schedule"];

  return (
    <div className="relative">
      {/* Conditionally render the Header */}
      {!hideHeaderRoutes.includes(pathname) && <Header />}
      {children}
    </div>
  );
}
