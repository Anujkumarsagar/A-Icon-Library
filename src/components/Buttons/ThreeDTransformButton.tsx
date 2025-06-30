import { Rocket } from 'lucide-react'
import React from 'react'

function ThreeDTransformButton({text = "Rocket"}: {text : String}) {
    return (
        <div>
            <button className=" cursor-pointer w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-110 hover:rotate-2 hover:shadow-2xl transform-gpu">
                <div className="flex items-center justify-center">
                    <Rocket className="mr-2 h-5 w-5" />
                    {text}
                </div>
            </button>
        </div>
    )
}

export default ThreeDTransformButton