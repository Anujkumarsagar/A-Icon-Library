import React from 'react'

function MobileNavbar() {
    return (
        <div>
            <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-600 to-cyan-400 shadow-lg">
                <a className="text-2xl font-bold text-white tracking-wide" href="#">
                    <span className="bg-white/20 px-2 py-1 rounded-lg">Iconsets</span>
                </a>
                <ul className="flex gap-6 items-center">
                    <li>
                        <a className="text-white hover:text-black/80 font-semibold transition-colors" href="#">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="text-white hover:text-black/80 font-semibold transition-colors" href="#">
                            Link
                        </a>
                    </li>
                    <li className="relative group">
                        <button className="text-white hover:text-black/80 font-semibold transition-colors flex items-center gap-1">
                            Dropdown
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-10">
                            <a className="block px-4 py-2 text-gray-700 hover:bg-cyan-100 rounded-t-lg" href="#">Action 1</a>
                            <a className="block px-4 py-2 text-gray-700 hover:bg-cyan-100 rounded-b-lg" href="#">Action 2</a>
                        </div>
                    </li>
                </ul>
                <form className="flex items-center gap-2">
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
            </nav>
        </div>
    )
}

export default MobileNavbar