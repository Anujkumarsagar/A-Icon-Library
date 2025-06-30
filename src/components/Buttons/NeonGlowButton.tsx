"use client"

import { Zap } from 'lucide-react'
import React, { useState } from 'react'

interface ElectrifyButtonProps {
  colorInHex?: string
  text?: string
}

function NeonGlowButton({ colorInHex = "#00ffff", text = "Electrify" }: ElectrifyButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      type="button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: colorInHex,
        color: isHovered ? "#000" : colorInHex,
        backgroundColor: isHovered ? colorInHex : "transparent",
        boxShadow: isHovered ? `0 0 30px 0 ${colorInHex}` : "none",
        transition: "all 0.3s",
      }}
      className=" cursor-pointer w-full border-2 py-3 px-6 rounded-xl font-semibold flex items-center justify-center group"
    >
      <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
      {text}
    </button>
  )
}

export default NeonGlowButton;