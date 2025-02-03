// import { useState } from 'react'
import { Link } from "react-router"
import { motion } from "framer-motion"

function App() {

  return (
    <>
      <div className="h-[100vh] bg-red-200">
          <nav className="mt-[25px] inline-flex justify-center w-full">
            <div className="h-[82.75px] w-[80%] rounded-[64px] bg-white flex items-center justify-between px-[25px] shadow">
                <img src="/logo.svg" alt="Logo" className="h-[42.75px] w-[150px]" />
                <div className="w-[40%] flex justify-between font-light text-[16px]">
                  <Link to={`/`}>Home</Link>
                  <Link to={`/`}>Property Search</Link>
                  <Link to={`/`}>Our Services</Link>
                  <Link to={`/`}>About Us</Link>
                  <Link to={`/`}>Blogs</Link>
                </div>
                <div className="flex items-center justify-between w-[10%]">
                  <img src="/call.svg" alt="Logo" className="h-[20px] w-[20px]" />
                  <p className="text-[16px]">+254712151558</p>
                </div>
                <motion.button className="border-[1px] border-slate-400 h-[42.5px] w-[148.22px]">Contact Us</motion.button>
            </div>
          </nav>
      </div>
    </>
  )
}

export default App
