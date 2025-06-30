import React from 'react'
import { Play } from '../../../public/RootIcon/Tetrisly Icon Library/icons'

function SlideTextButton({UpperText, DownText, color } : {
    UpperText: String,
    DownText: String,
    color?: String
}) {
  return (
    <button className={`w-full relative overflow-hidden bg-purple-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:bg-purple-700 group`}>
      <span className="flex items-center justify-center relative h-5">
        {/* First text slides up on hover */}
        <span className="absolute left-1/2 -translate-x-1/2 transition-transform duration-300 group-hover:-translate-y-7">
         {UpperText}
        </span>
        {/* Second text slides in from below on hover */}
        <span className=" flex-nowrap text-nowrap absolute left-1/2 -translate-x-1/2 transition-transform duration-300 translate-y-7 group-hover:translate-y-0 flex items-center">
          <Play className="mr-2 h-5 w-5" />
          {DownText}
        </span>
      </span>
    </button>
  )
}

export default SlideTextButton