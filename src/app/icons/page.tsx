"use client"

import { Carousel } from "@/components/SmallChunks/Carousel";

export default function page() {
  return (
    <div className="bg-gradient-to-br rounded-lg from-indigo-100 to-pink-100  flex flex-col items-center justify-center">
      
      <div className="flex flex-col w-full ">
        <h1 className="text-2xl font-bold">Tetrisly Icon Library</h1>
        <p className="text-sm text-gray-500">A collection of icons for your next project</p>
      </div>
      
      <Carousel />
    </div>
  );
}