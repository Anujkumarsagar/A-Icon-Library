"use client"

import Link from 'next/link'
import React, { useRef, useState, useEffect } from 'react'
import { CloseDuotoneDark, Home2BoldDark, Menu1DuotoneDark, MenuBoldDark, MenuBoldLight, SettingTwocolorsDark, ShieldCheckDuotoneDark, ShieldCheckDuotoneLight, UserBoldDark, VolumeCrossDuotoneDark, WorkDuotoneLight } from '../../../public/RootIcon/COCO/icons'
import LinkComponent from '../SmallChunks/LinkComponent'
import { Menu } from '../../../public/RootIcon/Tetrisly Icon Library/icons'

import Dropdown from '../SmallChunks/Dropdown'
import SidebarDrawer from '../SmallChunks/Dropdown'
import LogoSvg from '../SmallChunks/LogoSvg'

function DesktopNavbar() {

    let LinksofRemixIcons = ["All", "Arrows", "Buildings", "Bussiness", "Communication", "Design", "Developement", "Device", "Document", "Editor", "Finance", "Health", "Logos", "Map", "Media", "Others", "System", "Users", "Weather",]
    let LinksofCocoIcons = ["All", "BoldDark", "BoldLight", "DuotoneDark", "DuotoneLight", "LightDark", "LightLight", "TwocolorsDark", "TwocolorsLight"]
    const [isOpen, setIsOpen] = useState(false);
    const [drawer, setDrawer] = useState(false)
    const [drawer2, setDrawer2] = useState(false)
    const [drawer3, setDrawer3] = useState(false)
    const drawerRef = useRef<HTMLDivElement>(null)
    const drawerRef2 = useRef<HTMLDivElement>(null)
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
                handleDrawer("remix", "close");
            }
            else if (drawerRef2.current && !drawerRef2.current.contains(event.target as Node)) {
                handleDrawer("coco", "close");
            }
        }
        if (drawer) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [drawer, drawer2, isOpen]);

    const handleDrawer = (drawerName: "remix" | "coco", action: "toggle" | "close" = "toggle") => {
        if (drawerName === "remix") {
            if (action === "toggle") {
                setDrawer(prev => {
                    if (!prev) setDrawer2(false);
                    return !prev;
                });
            } else {
                setDrawer(false);
            }
        }
        if (drawerName === "coco") {
            if (action === "toggle") {
                setDrawer2(prev => {
                    if (!prev) setDrawer(false);
                    return !prev;
                });
            } else {
                setDrawer2(false);
            }
        }
    };

    return (
        <div
            className={`h-screen   bg-gray-800 text-white items-center justify-center p-4 transition-all duration-300 ${isOpen ? "w-64" : "w-20"
                }`}
        >
            <LogoSvg />
        

            {/* Sidebar Items */}
            <div className="">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className=" w-full cursor-pointer flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
                >
                    {isOpen ? <CloseDuotoneDark className="h-5 w-5" /> : <Menu1DuotoneDark className="h-5 w-5" />}
                    {isOpen && <span className='a' >Close</span>}
                </button>

                <Link href="/">
                    <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-700 p-2 rounded">
                        <Home2BoldDark className="w-5 h-5" />
                        {isOpen && <span className='a' >Home</span>}
                    </div>
                </Link>

                <Link href="/profile">
                    <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-700 p-2 rounded">
                        <UserBoldDark className="h-5 w-5" />
                        {isOpen && <span>Profile</span>}
                    </div>
                </Link>

                <SidebarDrawer
                    isOpen={drawer}
                    setIsOpen={(open) => {
                        setDrawer(open);
                        if (open) {
                            setDrawer2(false);
                            setDrawer3(false);
                        } // close other drawer
                    }}
                    iconClosed={<ShieldCheckDuotoneDark className="h-5 w-5" />}
                    iconOpen={<ShieldCheckDuotoneLight className="h-5 w-5" />}
                    label="RemixIcons"
                    sidebarExpanded={isOpen}
                >
                    <LinkComponent objOfLinks={LinksofRemixIcons} onClick={() => setDrawer(false)} />
                </SidebarDrawer>
                <SidebarDrawer
                    isOpen={drawer3}
                    setIsOpen={(open) => {
                        setDrawer3(open);
                        if (open) {
                            setDrawer(false);
                            setDrawer2(false);
                        }
                    }}
                    iconClosed={<ShieldCheckDuotoneDark className="h-5 w-5" />}
                    iconOpen={<ShieldCheckDuotoneLight className="h-5 w-5" />}
                    label="SmoothIcons"
                    sidebarExpanded={isOpen}
                >
                    <LinkComponent objOfLinks={LinksofRemixIcons} onClick={() => setDrawer(false)} />
                </SidebarDrawer>
                <SidebarDrawer
                    isOpen={drawer2}
                    setIsOpen={(open) => {
                        setDrawer2(open);
                        if (open) {
                            setDrawer(false);
                            setDrawer3(false);
                        }
                    }}
                    iconClosed={<ShieldCheckDuotoneDark className="h-5 w-5" />}
                    iconOpen={<ShieldCheckDuotoneLight className="h-5 w-5" />}
                    label="CocoIcons"
                    sidebarExpanded={isOpen}
                >
                    <LinkComponent objOfLinks={LinksofCocoIcons} onClick={() => setDrawer2(false)} />
                </SidebarDrawer>

                {/* <Link href="/settings">
                    <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-700 p-2 rounded">
                        <SettingTwocolorsDark className="h-5 w-5" />
                        {isOpen && <span>Settings</span>}
                    </div>
                </Link> */}
            </div>
        </div>
    );
}

export default DesktopNavbar