import React, { useState } from 'react'
import { Heart } from '../../../public/RootIcon/COCO/icons'

function PulseHeartButton() {
     const [likedButtons, setLikedButtons] = useState<Set<string>>(new Set())

  const handleLike = (buttonId: string) => {
    const newLiked = new Set(likedButtons)
    if (newLiked.has(buttonId)) {
      newLiked.delete(buttonId)
    } else {
      newLiked.add(buttonId)
    }
    setLikedButtons(newLiked)
  }
  return (
    <div>
         <button
              onClick={() => handleLike("heart")}
              className={` cursor-pointer w-full py-3 px-6 outline-1 outline-black rounded-xl font-semibold transition-all duration-300 ${
                likedButtons.has("heart")
                  ? "bg-red-500 text-white animate-pulse"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <div className="flex items-center justify-center">
                <Heart className={`mr-2 h-5 w-5 ${likedButtons.has("heart") ? "fill-current animate-bounce" : ""}`} />
                {likedButtons.has("heart") ? "Loved!" : "Love It"}
              </div>
            </button>
    </div>
  )
}

export default PulseHeartButton