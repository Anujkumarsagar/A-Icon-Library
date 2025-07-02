import React from 'react'
import { ArrowRight } from '../../../public/RootIcon/Tetrisly Icon Library/icons'

function GradientButton({ text, options }: {
    text: String,
    options: String
}) {
    return (
        <div>
            <button className={` cursor-pointer w-full relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white  rounded-xl font-semibold transition-all duration-300  hover:shadow-lg group ${options} `} >
                <span className="relative z-10 flex items-center justify-center ">
                    {text}
                    <ArrowRight className=" h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
        </div >
    )
}

export default GradientButton