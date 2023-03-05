import Sidebar from "@/components/blocks/client/Sidebar.block";
import React from "react";

export default function ClientPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid" style={{ gridTemplateColumns: "16rem 1fr" }}>
      <Sidebar />

      <div>
        <nav className="w-full h-16 bg-white shadow mb-8"></nav>
        <main className="px-4">{children}</main>
      </div>
    </div>
  );
}
