import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  return (
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Flavours By Sahiba</div>
        <ul className="flex space-x-6 text-sm uppercase tracking-widest">
          {[["1","Home", "home", "/"],
            ["2","Menu", "menu", "#explore-menu"],
            ["3","Mobile App", "mobile-app", "#app-download"],
            ["4","Contact Us", "contact-us", "#footer"],
          ].map(([id,title,menuKey,link])=>(
          <Link key={id} to={link} onClick={()=>setMenu(menuKey)} className={`${menu === menuKey ? "text-amber-300" : ""} cursor-pointer !text-white`}>{title}</Link>
       ))}

        </ul>
        </div>
    </nav>
  )
}

export default Navbar