import Link from 'next/link'
import React from 'react'

function LinkComponent({ objOfLinks, onClick }: { objOfLinks: string[], onClick: ()=>void }) {
  return (
    <div onClick={onClick} className=' shadow-gray-900 shadow-2xl animation-pulse transition-all duration-300  border border-gray-400 p-4 pb-6 text-white rounded-3xl  absolute grid grid-cols-2 gap-2 justify-items-center items-center  bg-black/55 backdrop-blur-sm'>
      {objOfLinks.map((obj, idx) => (
       <div className='text-white   '  >
         <Link

          key={idx}
          className="  px-1 py-2 text-white hover:text-stone-800 hover:bg-cyan-100 rounded-t-lg items-center gap-2"
          href={`/icons/${obj}`}
        >
          {obj}
        </Link>
       </div>
      ))}
    </div>
  )
}

export default LinkComponent