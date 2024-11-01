import NavBar from "@/components/NavBar";
import React from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen relative">
      <div className="fixed w-full bg-white">
        <NavBar />
      </div>
      <div className="pt-[height-of-navbar]">
        {children}
      </div>
    </div>
  );
}
