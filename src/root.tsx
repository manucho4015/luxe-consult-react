import { useState } from 'react'
import { Outlet } from 'react-router'
import { motion } from 'framer-motion'
import { Link, useNavigate } from "react-router"
import { ToastContainer } from "react-toastify";

// scroll to top
import ScrollToTop from './scrollToTop'

// data
import { navbarLinks, footerQuickLinks, footerDiscoveryTowns } from './data/root'


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
            <ToastContainer />

            {/* Navbar  */}
            <nav className="md:top-[25px] top-0 sticky md:absolute inline-flex md:justify-center w-full z-[20]">
                <motion.div className="md:h-[82.75px] w-full md:w-[90%] lg:w-[80%] md:rounded-[64px] bg-white flex flex-col md:flex-row md:items-center md:justify-between px-[10vw] md:px-[25px] md:py-0 py-[15px] shadow">
                    <div className="flex items-center justify-between md:m-0 mb-[10px]">
                        <img src="/luxe-logo-2.png" alt="Logo" className="h-[75px] w-[125px] cursor-pointer"
                            onClick={() => navigate('/')} />
                        <button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden outline-none ring-2 hover:bg-gray-700 ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>

                    </div>
                    {/* navbar (medium screens and bigger) - links */}
                    <div className="w-[50%] lg:w-[40%] hidden md:flex flex-wrap md:flex-row flex-col justify-between font-light text-[16px]">
                        {
                            navbarLinks.map((link, index) => (
                                <Link key={index} to={link.url} className='capitalize md:m-0 mb-[10px]'>{link.label}</Link>
                            ))
                        }
                    </div>
                    {/* navbar (mobile screens) - links */}
                    {
                        isMobileNavOpen && (
                            <motion.div variants={container} initial="hidden" animate="show" exit="exit" className="w-[50%] lg:w-[40%] flex flex-wrap md:flex-row flex-col justify-between font-light text-[16px]">
                                {
                                    navbarLinks.map((link, index) => (
                                        <motion.span variants={listItem} className='md:m-0 mb-[10px]' onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}><Link key={index} to={link.url} className='capitalize'>{link.label}</Link></motion.span>

                                    ))
                                }
                            </motion.div>
                        )
                    }

                    <div className="hidden lg:flex items-center w-[15%] min-w-fit">
                        <img src="/call.svg" alt="Logo" className="h-[20px] w-[20px] mr-[5px] " />
                        <p className="text-[16px]">+2547 68 096 084</p>
                    </div>
                    <motion.button onClick={() => navigate('/contact-us')} whileTap={{ scale: .95 }} className="hidden md:inline-block border-[1px] border-slate-400 h-[42.5px] w-[148.22px] rounded-4xl">
                        Contact Us
                    </motion.button>
                </motion.div>
            </nav>

            {/* Whatsapp Integration */}
            <a href="https://wa.me/message/HRKPX6SM6FPPK1" target='_blank' rel="noopener noreferrer">
                <motion.img drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} dragTransition={{ bounceStiffness: 250, bounceDamping: 10 }} dragElastic={0.5} whileDrag={{ cursor: "grabbing" }}
                    src="/whatsapp-logo.png" alt="whatsapp" className='fixed bottom-[5vh] right-[5vw] md:bottom-[5vh] md:right-[5vw] inline-block h-305px] md:h-[50px] w-[30px] md:w-[50px] z-[20]' />
            </a>

            <Outlet />
            <ScrollToTop />

            {/* Footer */}
            <div className='w-full bg-black py-[25px]'>
                <div className="flex flex-wrap md:justify-between items-center px-[5vw]">
                    {/* logo */}
                    <img src="/luxe-consult-logo-footer.png" alt="logo white" className="max-w-[100px] max-h-[95px] h-[35vh] w-[37.5vh]" />
                    {/* social media */}
                    <div className="max-w-[352px] max-h-[40px] h-[15vh] w-[40vh] flex items-center md:m-0 mt-[20px]">
                        <p className='text-white mr-[50px] capitalize'>follow us</p>
                        {/* Facebook */}
                        <a href="https://www.facebook.com/share/16G8qa8oxD/" target="_blank" rel="noopener noreferrer">
                            <img src="/facebook-white.svg" alt="facebook" className="h-[20px] w-[20px] md:max-w-[9.68px] md:max-h-[15px] md:h-[5vh] md:w-[4.5vh] mr-[15px]" />
                        </a>
                        {/* Twitter */}
                        <a href="https://x.com/LuxeConsult?t=GjE4pvoY3ndYuoBx5DCneQ&s=09" target="_blank" rel="noopener noreferrer">
                            <img src="/twitter-white.svg" alt="twitter" className="h-[20px] w-[20px] md:max-w-[13.51px] md:max-h-[15px] md:h-[5vh] md:w-[4.75vh] mr-[15px]" />
                        </a>

                        {/* instagram */}
                        <a href="https://www.instagram.com/luxeconsult_ke?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                            <img src="/instagram-white.svg" alt="instagram" className="h-[20px] w-[20px] md:max-w-[12.56px] md:max-h-[15px] md:h-[5vh] md:w-[4.7vh] mr-[15px]" />
                        </a>

                        {/* Tiktok */}
                        <a href="https://www.tiktok.com/@luxe.consult?_t=ZM-8u0qipgX7mI&_r=1" target="_blank" rel="noopener noreferrer">
                            <img src="/tiktok_white.png" alt="TikTok" className="h-[20px] w-[20px] md:max-w-[13.48px] md:max-h-[15px] md:h-[5vh] md:w-[4.77vh] mr-[15px]" />
                        </a>


                    </div>
                </div>

                {/* grid */}
                <div className="mt-[50px] md:mt-[75px] grid grid-cols-2 md:grid-cols-6 gap-5 px-[5vw]">
                    {/* subscribe */}
                    {/* <div className="col-span-3">
                        <h4 className='text-[#FFFFFF75] text-[19px] mb-[20px]'>Newsletter</h4>
                        <div className="flex items-center">
                            <input type="text" name="message" id="message" className=' h-[38px] w-[50%] bg-transparent border-b-[1.65px] border-slate-300 px-[20px] text-sm text-[#797E82] outline-none focus:border-primary focus:border-b-[1.65px] ease-in-out duration-200 mr-[10px]' placeholder='Your Email' />
                            <motion.button whileTap={{ scale: .95 }} className='capitalize bg-[#FFFFFF14] rounded-4xl w-[117.92px] h-[42.5px] flex items-center justify-center text-[16px] text-white'>
                                send <img src="/right-white.svg" alt="download" className="ml-[10px] max-w-[30px] max-h-[20px] h-[15vh] w-[30vh]" />
                            </motion.button>
                        </div>
                        <p className='mt-[15px] text-white'>Subscribe to our newsletter to receive our weekly feed.</p>
                    </div> */}

                    {/* discover */}
                    <div className="col-span-1">
                        <h4 className='text-[#FFFFFF75] text-[19px] mb-[20px]'>Discover</h4>
                        <ul className='text-white'>
                            {
                                footerDiscoveryTowns.map((town, index) => (
                                    <li key={index} className='mb-[15px]'>{town}</li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* quick links */}
                    <div className="col-span-1">
                        <h4 className='text-[#FFFFFF75] text-[19px] mb-[20px]'>Quick Links</h4>
                        <ul className='text-white'>
                            {
                                footerQuickLinks.map((link, index) => (
                                    <motion.li key={index} whileHover={{ translateX: '10px' }} className='mb-[15px] cursor-pointer      capitalize'>
                                        <Link to={link.url}>{link.label}</Link>
                                    </motion.li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* contact us */}
                    <div className="col-span-2">
                        <h4 className='text-[#FFFFFF75] text-[19px] mb-[20px]'>Contact Us</h4>
                        <p className='text-white'>hello@luxe-consult.com</p>
                        <p className='text-white'>+2547 68 096 084</p>
                    </div>
                    {/* address */}
                    <div className="col-span-2">
                        <h4 className='text-[#FFFFFF75] text-[19px] mb-[20px]'>Our Address</h4>
                        <p className='text-white'>Riverside Square, Riverside drive</p>
                        <p className='text-white'>Nairobi, Kenya</p>
                    </div>
                </div>

                <p className='text-white text-center mt-[25px] text-[12px] border-t-[1px] border-white pt-[10px]'>Copyright &copy; {new Date().getFullYear()}. Luxeconsult</p>
            </div>
        </div>
    )
}

export default Root
