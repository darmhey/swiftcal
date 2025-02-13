"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideHeaderRoutes = [
    "/schedule",
    "/schedule/availability",
    "/schedule/profile",
    "/schedule/bookings",
    "/schedule/profile",
    "/schedule/scheduleLinks",
    "/schedule/settings",
  ];

  return (
    <div className="relative">
      {!hideHeaderRoutes.includes(pathname) && <Header />}
      {children}
    </div>
  );
}
