import React from 'react'

function LogoSvg() {
  return (
    <div className='flex justify-center items-center cursor-pointer p-2 rounded hover:bg-gray-700'>
                <div className="flex justify-center items-center cursor-pointer p-2 rounded">
                    <svg width="100" viewBox="0 0 250 120" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="ailGradient" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stop-color="#6366f1" />
                                <stop offset="100%" stop-color="#ec4899" />
                            </linearGradient>
                            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* <rect width="100%" fill="#0f172a" rx="20" /> */}
                        <text
                            x="50%"
                            y="65%"
                            font-family="Segoe UI, sans-serif"
                            font-size="64"
                            font-weight="bold"
                            fill="url(#ailGradient)"
                            text-anchor="middle"
                            letter-spacing="8"
                            filter="url(#glow)"
                        >
                            AIL
                        </text>
                    </svg>

                </div>
            </div>
  )
}

export default LogoSvg