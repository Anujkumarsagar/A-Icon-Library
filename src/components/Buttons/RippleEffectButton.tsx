import { Sparkles } from 'lucide-react'
import React from 'react'

function RippleEffectButton() {
    return (
        <div>
            <button className=" cursor-pointer w-full relative overflow-hidden bg-green-500 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:bg-green-600 group">
                <div className="flex items-center justify-center relative z-10">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Magic
                </div>
                <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500 origin-center"></div>
            </button>
        </div>
    )
}

export default RippleEffectButton