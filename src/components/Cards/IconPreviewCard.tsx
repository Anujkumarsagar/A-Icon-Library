"use client"

import React from "react"

import { useState, useRef, FC } from "react"
import { Heart, Download, Copy, Check, Eye, Bookmark, MoreHorizontal } from "lucide-react"
import { TextBoldLight } from "../../../public/RootIcon/COCO/icons"
import MorphingButton from "../Buttons/MorphingButton"
import { Card } from '@/components/Cards/card'
import { tetrislyIcon } from '../../../public/RootIcon/Tetrisly Icon Library/icons'

interface PreviewCardProps {
    title: string
    author: string
  
    previewImage?: string
    svgContent?: FC
    colors: {
        primary: string
        secondary: string
        accent: string
    }
}

const ICONS = Object.values(tetrislyIcon);


export function IconPreviewCard({
    title = "Animated Heart Icon",
    author = "Sarah Chen",
    svgContent = TextBoldLight,
    colors = { primary: "#ef4444", secondary: "#f87171", accent: "#fca5a5" },
}: PreviewCardProps) {
    const [isLiked, setIsLiked] = useState(false)
    const [isBookmarked, setIsBookmarked] = useState(false)
    const [isCopied, setIsCopied] = useState(false)
    const [isDownloading, setIsDownloading] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovered, setIsHovered] = useState(false)
    const cardRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePosition({ x, y })
    }

    const handleLike = () => {
        setIsLiked(!isLiked)
    }

    const handleBookmark = () => {
        setIsBookmarked(!isBookmarked)
    }

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(svgContent.toString())
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000)
        } catch (err) {
            console.error("Failed to copy:", err)
        }
    }

    const handleDownload = async () => {
        setIsDownloading(true)
        // Simulate download process
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setIsDownloading(false)
    }

    return (
        <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative w-full max-w-md bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
                style={{
                    background: isHovered
                        ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)`
                        : undefined,
                }}
            >
                <div className="absolute inset-0  bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute m-auto  inset-0 overflow-hidden">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
                            style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + (i % 3) * 20}%`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: `${3 + i * 0.5}s`,
                            }}
                        />
                    ))}
                </div>

                {/* Header */}
                <div className="relative p-6 pb-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <img
                                src={"/placeholder.svg"}
                                alt={author}
                                className="w-10 h-10 rounded-full border-2 border-white/20 transition-transform duration-300 group-hover:scale-110"
                            />
                            <div>
                                <p className="text-stone-700 font-medium text-sm">{author}</p>
                            </div>
                        </div>
                        <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                            <MoreHorizontal className="w-4 h-4 text-stone-700/70" />
                        </button>
                    </div>

                    {/* Preview Area */}
                    <div className="relative mb-6">
                        <div
                            className="w-full h-48 rounded-2xl flex items-center justify-center relative overflow-hidden transition-all scale-95 duration-500 group-hover:scale-105"
                            style={{
                                background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20, ${colors.accent}20)`,
                            }}
                        >
                            {/* Animated SVG */}

                            <div
                                className="w-24 h-24 flex justify-center items-center scale-200 transition-all duration-500 group-hover:scale-225 group-hover:rotate-12"
                                style={{ color: colors.primary }}
                                
                            > 
                            {svgContent && React.createElement(svgContent)}
                            </div>
                            {/* Sparkle Effects */}
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                            </div>
                            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
                            </div>
                        </div>


                        {/* Content */}
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-stone-700 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                                {title}
                            </h3>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-between">
                            <div className="flex space-x-2">
                                {/* Like Button */}
                                <button
                                    onClick={handleLike}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${isLiked
                                        ? "bg-red-500 text-stone-700 shadow-lg shadow-red-500/25"
                                        : "bg-white/10 hover:bg-white/20 text-stone-700/80"
                                        }`}
                                >
                                    <Heart
                                        className={`w-4 h-4 transition-all duration-300 ${isLiked ? "fill-current scale-110" : "group-hover:scale-110"
                                            }`}
                                    />
                                </button>

                                {/* Bookmark Button */}
                                <button
                                    onClick={handleBookmark}
                                    className={`p-2 rounded-xl transition-all duration-300 ${isBookmarked
                                        ? "bg-yellow-500 text-stone-700 shadow-lg shadow-yellow-500/25"
                                        : "bg-white/10 hover:bg-white/20 text-stone-700/80"
                                        }`}
                                >
                                    <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
                                </button>
                            </div>

                            <div className="flex space-x-2">
                                {/* Copy Button */}
                                <button
                                    onClick={handleCopy}
                                    className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-stone-700/80 rounded-xl transition-all duration-300 hover:scale-105"
                                >
                                    {isCopied ? (
                                        <>
                                            <Check className="w-4 h-4 text-green-400" />
                                            <span className="text-sm text-green-400">Copied!</span>
                                        </>
                                    ) : (
                                        <span className="outline-black outline-1 flex p-3x">
                                            <Copy className="w-4 h-4" />
                                            <span className="text-sm">Copy</span>
                                        </span>
                                    )}
                                </button>

                                {/* Download Button */}
                               <MorphingButton />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Glow Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
            </div>
    )
};


