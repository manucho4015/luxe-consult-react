
import { Outlet } from 'react-router'
import { motion } from 'framer-motion'
import { Link, useNavigate } from "react-router"

// data
import { footerQuickLinks } from './data/root'

const Root = () => {
    const navigate = useNavigate()
    return (
        <div className='relative'>
            {/* Navbar */}
            <nav className="top-[25px] absolute inline-flex justify-center w-full z-[20]">
                <div className="h-[82.75px] w-[80%] rounded-[64px] bg-white flex items-center justify-between px-[25px] shadow">
                    <img src="/logo.svg" alt="Logo" className="h-[42.75px] w-[150px]" />
                    <div className="w-[40%] flex justify-between font-light text-[16px]">
                        <Link to={`/`}>Home</Link>
                        <Link to={`/property-search`}>Property Search</Link>
                        <Link to={`/services`}>Our Services</Link>
                        <Link to={`/about-us`}>About Us</Link>
                        <Link to={`/blogs`}>Blogs</Link>
                    </div>
                    <div className="flex items-center justify-between w-[10%]">
                        <img src="/call.svg" alt="Logo" className="h-[20px] w-[20px]" />
                        <p className="text-[16px]">+254712151558</p>
                    </div>
                    <motion.button onClick={() => navigate('/contact-us')} whileTap={{ scale: .95 }} className="border-[1px] border-slate-400 h-[42.5px] w-[148.22px] rounded-4xl">
                        Contact Us
                    </motion.button>
                </div>
            </nav>
            <Outlet />
            <div className='w-full min-h-[75vh] bg-black py-[25px] px-[5vw]'>
                <div className="flex justify-between items-center">
                    {/* logo */}
                    <img src="/logo-white.svg" alt="logo white" className="max-w-[200px] max-h-[56px] h-[20vh] w-[40vh]" />
                    {/* social media */}
                    <div className="max-w-[352px] max-h-[40px] h-[15vh] w-[40vh] flex items-center">
                        <p className='text-white mr-[50px] capitalize'>follow us</p>
                        <img src="/facebook-white.svg" alt="facebook" className="max-w-[9.68px] max-h-[15px] h-[5vh] w-[4.5vh] mr-[15px]" />
                        <img src="/twitter-white.svg" alt="twitter" className="max-w-[13.51px] max-h-[15px] h-[5vh] w-[4.75vh] mr-[15px]" />
                        <img src="/instagram-white.svg" alt="instagram" className="max-w-[12.56px] max-h-[15px] h-[5vh] w-[4.7vh] mr-[15px]" />
                        <img src="/linkedin-white.svg" alt="LinkedIn" className="max-w-[13.48px] max-h-[15px] h-[5vh] w-[4.77vh] mr-[15px]" />
                    </div>
                </div>

                {/* grid */}
                <div className="mt-[100px] grid grid-cols-9 gap-5">
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

                <p className='text-white text-center mt-[25px] text-[12px]'>Copyright &copy; {new Date().getFullYear()}. Luxeconsult</p>
            </div>
        </div>
    )
}

export default Root
