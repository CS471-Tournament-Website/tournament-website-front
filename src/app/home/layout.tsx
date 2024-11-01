"use client"

import NavBar from "@/components/NavBar";
import React from 'react';

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <div className="absolute w-full bg-white">
        <NavBar />
      </div>
        {children}
    </div>
  );
}
