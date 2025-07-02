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
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
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

    if (!hasMounted) return null;

    return (
        <html lang="en">
            <body className={`flex ${isMobile ? "flex-col" : "flex-row"} relative min-h-screen`}>
                {
                    isMobile ? <MobileNavbar /> : <DesktopNavbar />
                }
                <span className="flex-1 p-6">
                    {children}
                </span> 
            </body>
        </html>
    );
}