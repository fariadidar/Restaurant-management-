import React from 'react'

const Header = () => {
  return (
      <nav className="fixed top-0 text-dark left-0 w-full z-50 bg-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Flavours By Sahiba</div>
       {[["1","Home", "home", "/"]].map(([id,title,link])=>(
        <Link key={id} to={link} >{title}</Link>
       ))}
        <ul className="flex space-x-6 text-sm uppercase tracking-widest">
            <li><a href="#" class="border-b-2 border-white pb-1">Home</a></li>

            <li><Link>Menu</Link></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Branches</a></li>
            <li><a href="#">Reservation</a></li>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
        </div>
    </nav>
  )
}

export default Header