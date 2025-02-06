import { useState } from 'react'
import { Link } from "react-router"
import { motion } from "framer-motion"

const Banner = () => {
    const [isActive, setIsActive] = useState('buy')
    return (
        <div className="min-h-[100vh] bg-red-200 relative">
            {/* Navbar */}
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
                    <motion.button className="border-[1px] border-slate-400 h-[42.5px] w-[148.22px] rounded-4xl">
                        Contact Us
                    </motion.button>
                </div>
            </nav>

            <div className="absolute bottom-10 flex flex-col w-full items-center">
                {/* Type search toggle */}
                <div className="w-[236px] h-[73px] bg-white shadow flex items-center justify-center rounded-[40px] ">
                    <motion.div animate={{ backgroundColor: isActive == 'buy' ? '#E5AC74' : '#fff' }}
                        className={`h-[53px] w-[98px] text-[18px] cursor-default flex items-center justify-center rounded-[40px]`}
                        onClick={() => setIsActive('buy')}>
                        Buy
                    </motion.div>
                    <motion.div animate={{ backgroundColor: isActive == 'rent' ? '#E5AC74' : '#fff' }}
                        className={`h-[53px] w-[98px] cursor-default text-[18px] flex items-center justify-center  rounded-[40px]`}
                        onClick={() => setIsActive('rent')}>
                        Rent
                    </motion.div>
                </div>
                <div className="w-[60%] min-w-[236px] h-[80px] px-[40px] bg-white shadow flex items-center justify-between rounded-[100px] mt-[15px]">
                    <div className="h-[50px] min-w-[49px] w-[15%] flex flex-col justify-between">
                        <p className='text-[16px] font-medium'>Search location</p>
                        <input type="text" name="message" id="message" className=' h-[38px] w-[90%] bg-transparent border-b-[1.65px] border-slate-300 px-[20px] text-sm text-[#797E82] outline-none focus:border-primary focus:border-b-[1.65px] ease-in-out duration-200' />
                    </div>
                    <div className="h-[50px] min-w-[49px] w-[15%] flex flex-col justify-between">
                        <p className='text-[16px] font-medium'>Enter Budget</p>
                        <input type="text" name="message" id="message" className=' h-[38px] w-[90%] bg-transparent border-b-[1.65px] border-slate-300 px-[20px] text-sm text-[#797E82] outline-none focus:border-primary focus:border-b-[1.65px] ease-in-out duration-200' />
                    </div>
                    <motion.div whileTap={{ scale: .95 }}
                        className={`h-[53px] w-[98px] text-[18px] font-medium cursor-default flex items-center justify-center bg-primary rounded-[40px]`}>
                        Search
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Banner
