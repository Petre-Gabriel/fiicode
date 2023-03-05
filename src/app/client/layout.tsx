import Sidebar from "@/components/blocks/client/Sidebar.block";
import React from "react";

export default function ClientPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="grid gap-x-4"
      style={{ gridTemplateColumns: "16rem 1fr 1fr" }}
    >
      <div>
        <Sidebar />
      </div>
      <div>{children}</div>
    </div>
  );
}
