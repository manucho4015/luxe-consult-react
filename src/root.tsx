import { useState } from 'react'
import { Outlet } from 'react-router'
import { motion } from 'framer-motion'
import { Link, useNavigate } from "react-router"

// data
import { navbarLinks, footerQuickLinks } from './data/root'

const Root = () => {
    const navigate = useNavigate()
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

    // framer motion stagger
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25
            }
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.25
            }
        }
    };
    const listItem = {
        hidden: { opacity: 0, translateX: '-50px' },
        show: { opacity: 1, translateX: 0 },
        exit: { opacity: 0, translateX: '-50px' }
    };
    return (
        <div className='relative'>
            {/* Navbar */}
            <nav className="md:top-[25px] top-0 absolute inline-flex md:justify-center w-full z-[20]">
                <motion.div className="md:h-[82.75px] w-full md:w-[90%] lg:w-[80%] md:rounded-[64px] bg-white flex flex-col md:flex-row md:items-center md:justify-between px-[10vw] md:px-[25px] md:py-0 py-[25px] shadow">
                    <div className="flex justify-between md:m-0 mb-[10px]">
                        <img src="/logo.svg" alt="Logo" className="h-[42.75px] w-[150px] cursor-pointer"
                            onClick={() => navigate('/')} />
                        <button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden outline-none ring-2 hover:bg-gray-700 ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>

                    </div>
                    <div className="w-[50%] lg:w-[40%] hidden md:flex flex-wrap md:flex-row flex-col justify-between font-light text-[16px]">
                        {
                            navbarLinks.map((link, index) => (
                                <Link key={index} to={link.url} className='capitalize md:m-0 mb-[10px]'>{link.label}</Link>
                            ))
                        }
                    </div>
                    {
                        isMobileNavOpen && (
                            <motion.div variants={container} initial="hidden" animate="show" exit="exit" className="w-[50%] lg:w-[40%] flex flex-wrap md:flex-row flex-col justify-between font-light text-[16px]">
                                {
                                    navbarLinks.map((link, index) => (
                                        <motion.span variants={listItem} className='md:m-0 mb-[10px]'><Link key={index} to={link.url} className='capitalize'>{link.label}</Link></motion.span>

                                    ))
                                }
                            </motion.div>
                        )
                    }

                    <div className="hidden lg:flex items-center justify-between w-[10%]">
                        <img src="/call.svg" alt="Logo" className="h-[20px] w-[20px]" />
                        <p className="text-[16px]">+254712151558</p>
                    </div>
                    <motion.button onClick={() => navigate('/contact-us')} whileTap={{ scale: .95 }} className="hidden md:inline-block border-[1px] border-slate-400 h-[42.5px] w-[148.22px] rounded-4xl">
                        Contact Us
                    </motion.button>
                </motion.div>
            </nav>

            <Outlet />

            {/* Footer */}
            <div className='w-full bg-black py-[25px]'>
                <div className="flex flex-wrap md:justify-between items-center px-[5vw]">
                    {/* logo */}
                    <img src="/logo-white.svg" alt="logo white" className="max-w-[200px] max-h-[56px] h-[20vh] w-[40vh]" />
                    {/* social media */}
                    <div className="max-w-[352px] max-h-[40px] h-[15vh] w-[40vh] flex items-center md:m-0 mt-[20px]">
                        <p className='text-white mr-[50px] capitalize'>follow us</p>
                        <img src="/facebook-white.svg" alt="facebook" className="h-[20px] w-[20px] md:max-w-[9.68px] md:max-h-[15px] md:h-[5vh] md:w-[4.5vh] mr-[15px]" />
                        <img src="/twitter-white.svg" alt="twitter" className=" h-[20px] w-[20px] md:max-w-[13.51px] md:max-h-[15px] md:h-[5vh] md:w-[4.75vh] mr-[15px]" />
                        <img src="/instagram-white.svg" alt="instagram" className="h-[20px] w-[20px] md:max-w-[12.56px] md:max-h-[15px] md:h-[5vh] md:w-[4.7vh] mr-[15px]" />
                        <img src="/linkedin-white.svg" alt="LinkedIn" className="h-[20px] w-[20px] md:max-w-[13.48px] md:max-h-[15px] md:h-[5vh] md:w-[4.77vh] mr-[15px]" />
                    </div>
                </div>

                {/* grid */}
                <div className="mt-[50px] md:mt-[100px] grid grid-cols-2 md:grid-cols-9 gap-5 px-[5vw]">
                    {/* subscribe */}
                    <div className="col-span-3">
                        <h4 className='text-[#FFFFFF75] text-[19px] mb-[20px]'>Subscribe</h4>
                        <div className="flex items-center">
                            <input type="text" name="message" id="message" className=' h-[38px] w-[50%] bg-transparent border-b-[1.65px] border-slate-300 px-[20px] text-sm text-[#797E82] outline-none focus:border-primary focus:border-b-[1.65px] ease-in-out duration-200 mr-[10px]' placeholder='Your Email' />
                            <motion.button whileTap={{ scale: .95 }} className='capitalize bg-[#FFFFFF14] rounded-4xl w-[117.92px] h-[42.5px] flex items-center justify-center text-[16px] text-white'>
                                send <img src="/right-white.svg" alt="download" className="ml-[10px] max-w-[30px] max-h-[20px] h-[15vh] w-[30vh]" />
                            </motion.button>
                        </div>
                        <p className='mt-[15px] text-white'>Subscribe to our newsletter to receive our weekly feed.</p>
                    </div>

                    {/* discover */}
                    <div className="col-span-1">
                        <h4 className='text-[#FFFFFF75] text-[19px] mb-[20px]'>Discover</h4>
                        <ul className='text-white'>
                            <li className='mb-[15px]'>Nairobi</li>
                            <li className='mb-[15px]'>Eldoret</li>
                            <li className='mb-[15px]'>Kisumu</li>
                            <li className='mb-[15px]'>Mombasa</li>
                            <li className='mb-[15px]'>Kiambu</li>
                            <li className='mb-[15px]'>Nyahururu</li>
                        </ul>
                    </div>

                    {/* quick links */}
                    <div className="col-span-1">
                        <h4 className='text-[#FFFFFF75] text-[19px] mb-[20px]'>Quick Links</h4>
                        <ul className='text-white'>
                            {
                                footerQuickLinks.map((link, index) => (
                                    <motion.li key={index} whileHover={{ translateX: '10px' }} className='mb-[15px] cursor-pointer capitalize'>
                                        <Link to={link.url}>{link.label}</Link>
                                    </motion.li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* contact us */}
                    <div className="col-span-2">
                        <h4 className='text-[#FFFFFF75] text-[19px] mb-[20px]'>Contact Us</h4>
                        <p className='text-white'>hello@luxeconsult.com</p>
                        <p className='text-white'>(123) 456-789</p>
                    </div>
                    {/* address */}
                    <div className="col-span-2">
                        <h4 className='text-[#FFFFFF75] text-[19px] mb-[20px]'>Our Address</h4>
                        <p className='text-white'>99 Fifth Avenue, 3rd Floor</p>
                        <p className='text-white'>Nairobi, Kenya CA 1980</p>
                    </div>
                </div>

                <p className='text-white text-center mt-[25px] text-[12px] border-t-[1px] border-white pt-[10px]'>Copyright &copy; {new Date().getFullYear()}. Luxeconsult</p>
            </div>
        </div>
    )
}

export default Root
