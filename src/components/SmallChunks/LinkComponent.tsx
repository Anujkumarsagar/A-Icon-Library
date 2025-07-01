
import Link from 'next/link'
import React from 'react'

function LinkComponent({ objOfLinks }: { objOfLinks : String[] }) {
  return (
    <>
      {objOfLinks.map((obj, idx) => (
        <Link
          key={idx}
          className="block px-4 py-2 text-gray-700 hover:bg-cyan-100 rounded-t-lg  items-center gap-2"
          href={`/icons/${obj}`}
        >
          {obj}
        </Link>
      ))}
    </>
  )
}


export default LinkComponent