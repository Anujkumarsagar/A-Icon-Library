"use client"

import DesktopNavbar from "@/components/Navbars/DesktopNavbar";
import MobileNavbar from "@/components/Navbars/MobileNavbar";
import React, { useEffect, useState } from "react";

export default function IconsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <html lang="en">
            <body className={`flex ${isMobile && "flex-col" }  min-h-screen`}>
                {
                    isMobile ? <MobileNavbar /> : <DesktopNavbar />
                }
                <main className="flex-1 p-6">
                    {children}
                </main>
            </body>
        </html>
    );
}