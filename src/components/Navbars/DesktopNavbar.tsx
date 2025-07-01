import Link from 'next/link'
import React from 'react'
import LinkComponent from '../SmallChunks/LinkComponent'

function DesktopNavbar() {

    let LinksofRemixIcons = [ "Arrows", "Buildings", "Bussiness", "Communication", "Design", "Developement", "Device", "Document", "Editor", "Finance", "Health", "Logos", "Map", "Media", "Others", "System", "Users", "Weather",]
    return (
        <div>
            <aside className="w-64 min-h-screen bg-gradient-to-b from-purple-600 to-cyan-400 shadow-lg flex flex-col justify-between">
                <div>
                    <Link className="block text-2xl font-bold text-white tracking-wide px-6 py-6" href="#">
                        <span className="bg-white/20 px-2 py-1 rounded-lg">Iconsets</span>
                    </Link>
                    <ul className="flex flex-col gap-2 mt-4 px-4">
                        <li>
                            <Link className="block text-white hover:text-black/80 font-semibold transition-colors px-4 py-2 rounded-lg hover:bg-white/20" href="#">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="block text-white hover:text-black/80 font-semibold transition-colors px-4 py-2 rounded-lg hover:bg-white/20" href="#">
                                Link
                            </Link>
                        </li>
                        <li className="relative group ">
                            <button className="w-full text-left text-white hover:text-black/80 font-semibold transition-colors flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-white/20">
                                RemixIcon
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className="absolute left-full -top-50 mt-0 ml-2 w-40 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 cursor-pointer pointer-events-none group-hover:pointer-events-auto transition-opacity z-10">
                                <LinkComponent objOfLinks={LinksofRemixIcons} />
                            </div>
                        </li>
                    </ul>
                </div>
                <form className="flex items-center gap-2 px-6 py-6">
                    <input
                        className="rounded-lg px-3 py-1 border border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        type="text"
                        placeholder="Search"
                    />
                    <button
                        className="bg-white text-cyan-600 font-semibold px-4 py-1 rounded-lg border border-cyan-400 hover:bg-cyan-400 hover:text-white transition-all"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </aside>
        </div>
    )
}

export default DesktopNavbar