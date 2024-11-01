"use client"

import NavBar from "@/components/NavBar";
import React from 'react';

interface BaseLayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
  className?: string;
}

export default function BaseLayout({ 
  children
}: BaseLayoutProps) {
  return (
    <div className="min-h-screen">
      <div className="absolute w-full bg-white">
        <NavBar />
      </div>
        {children}
    </div>
  );
}
