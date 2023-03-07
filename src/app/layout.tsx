/* eslint-disable @next/next/no-page-custom-font */
import "@/style/global.css";

export const metadata = {
  title: "WeCare Health Clinic",
  description: "Prosper in life",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F8FAFA]">
        <main className="text-slate-700">{children}</main>
      </body>
    </html>
  );
}
