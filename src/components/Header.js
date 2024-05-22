import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
const Header = () => {
  return (
    <>
        <div className="flex justify-between px-32">
          <div className='text-green-500 font-bold hover:text-red-600'>
            <Link to='/'>Home Page</Link>  {/* Wrap the text in Link */}
          </div>
          <div className='text-green-500 font-bold hover:text-red-600'>
            <Link to='/login'>Login Page</Link> 
          </div>
          <div className='text-green-500 font-bold hover:text-red-600'>
            <Link to='/register'>Register Page</Link>
          </div>
        </div>
    </>
  )
}

export default Header