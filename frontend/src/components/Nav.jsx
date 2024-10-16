import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav 
    className='flex justify-between p-8 border-b'>
      <Link href='///' className='font-bold text-3xl text-green-800'>Eco-Recyco</Link>


<Link to={'/refurb'} className='text-green-800 border border-green-800 bg-white hover:border-none hover:bg-green-800 hover:text-white py-2 px-4 rounded-full'>Bid</Link>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px"}} className='flex gap-8'>
      <Link to='/sign-in' className='text-grey-800 border-r h-fit px-4 text-green-800'>Sign in</Link>
      <Link to='/registration' className='text-grey-800 h-fit px-3 text-green-800'>registration</Link >
      <div>

      <Link to='/new' className='bg-black transition hover:bg-white text-white hover:text-black hover:border hover:border-black py-3 px-4 rounded-full bg-green-800'>Donate</Link >
      </div>
      </div>
    </nav>
  )
}

export default Nav