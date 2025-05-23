import React from 'react'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
         <header className=" px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3GLoNxqeN1h1e4EKQAxAF4LOpqvWknajQMA&s" alt="Acme E-commerce" width={24} height={24} className="h-6 w-6" />
          <span className="sr-only">Acme E-commerce</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Shop
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
    </div>
  )
}

export default Header
