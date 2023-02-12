import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full bg-green-600 text-center sticky font-bold text-lg text-white'>
    <ul>
      <li className='inline-block mt-4'>
        <Link to="/" className='px-6' >Home</Link>
      </li>
      <li className='inline-block my-4'>
        <Link to="/about" className='px-6' > About</Link>
      </li>
      <li className='inline-block my-4'>
        <Link to="/articleslist" className='px-6'> Articles</Link>
      </li>
    </ul>
    </nav>
  )
}

export default Navbar
