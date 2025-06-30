import React, { useState } from 'react'
import { Download } from '../../../public/RootIcon/Tetrisly Icon Library/icons'

function MorphingButton() {
    const [downloadingButtons, setDownloadingButtons] = useState<Set<string>>(new Set())

    const handleDownload = async (buttonId: string) => {
        setDownloadingButtons((prev) => new Set(prev).add(buttonId))
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setDownloadingButtons((prev) => {
            const newSet = new Set(prev)
            newSet.delete(buttonId)
            return newSet
        })
    }

    return (
        <div>
            <button
                onClick={() => handleDownload("morph")}
                disabled={downloadingButtons.has("morph")}
                className=" cursor-pointer w-full relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-500  disabled:opacity-70"
            >
                {downloadingButtons.has("morph") ? (
                    <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Downloading...
                    </div>
                ) : (
                    <div className="flex items-center justify-center">
                        <Download className="mr-2 h-5 w-5" />
                        SVG
                    </div>
                )}
            </button>
        </div>
    )
}

export default MorphingButton