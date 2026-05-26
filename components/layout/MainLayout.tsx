import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

export default function MainLayout({ children, isAuthenticated = false, userName, unreadCount = 0 }: {
  children: ReactNode;
  isAuthenticated?: boolean;
  userName?: string;
  unreadCount?: number;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header isAuthenticated={isAuthenticated} userName={userName} unreadCount={unreadCount} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
