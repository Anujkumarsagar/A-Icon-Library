import React, { useState, useRef, useEffect } from 'react'
import { tetrislyIcon } from '../../../public/RootIcon/Tetrisly Icon Library/icons'
import { Card } from '@/components/Cards/card'
import { IconPreviewModal } from './IconPreviewModal';

const ICONS = Object.values(tetrislyIcon);

const VISIBLE_COUNT = 5; // Number of icons visible at once


export function Carousel() {
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const total = ICONS.length;
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [previewIcon, setPreviewIcon] = useState<any | null>(null);
    const [visibleCount, setVisibleCount] = useState(5);
    // Auto-play
    useEffect(() => {
        if (!isHovered) {
            intervalRef.current = setInterval(() => {
                setCurrent((prev) => (prev + 1) % total);
            }, 2500);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isHovered, total]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setVisibleCount(1);
            else if (window.innerWidth < 1024) setVisibleCount(3);
            else setVisibleCount(5);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (itemRefs.current[current]) {
        itemRefs.current[current]?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    }

    const next = () => setCurrent((prev) => (prev + 1) % total);
    const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

    // Get visible icons (circular)
    const getVisibleIcons = () => {
        let icons = [];
        for (let i = 0; i < visibleCount; i++) {
            icons.push(ICONS[(current + i) % total]);
        }
        return icons;
    };

    return (
        <div className="relative w-full  mx-auto py-8 flex items-center justify-center">
            {/* Prev Button */}
            <button
                onClick={prev}
                className="absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow transition"
                aria-label="Previous"
            >
                <svg width="24" height="24" fill="none"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>

            {/* Icons */}
            <div className="flex items-center justify-center gap-6 bg-white rounded-lg shadow p-6 w-full mx-20">
                {getVisibleIcons().map((Icon: any, idx: number) => {
                    // Calculate the actual index in ICONS for ref assignment
                    const iconIndex = (current + idx) % total;
                    return (
                        <Card
                            key={Icon.id}
                            ref={el => { itemRefs.current[iconIndex] = el; }}
                            className="w-24 sm:w-32 md:w-40 flex-shrink-0 p-4 md:p-6 snap-start hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={() => setPreviewIcon({ name: Icon.name, component: Icon })}
                        >
                            <Icon className="w-10 h-10 text-indigo-500" />
                            <span className="text-xs text-gray-700 mt-2 group-hover:text-indigo-500">{Icon.name}</span>
                        </Card>
                    );
                })}
            </div>

            {/* Next Button */}
            <button
                onClick={next}
                className="absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow transition"
                aria-label="Next"
            >
                <svg width="24" height="24" fill="none"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            {/* Preview Modal */}
            <IconPreviewModal
                icon={previewIcon}
                isOpen={!!previewIcon}
                onClose={() => setPreviewIcon(null)}
            />
        </div>
    );
}