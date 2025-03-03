import { useState } from 'react'

import { motion } from "framer-motion"

// data
import { propertyTypes, bedrooms } from '../../../data/home'

const Banner = () => {
    const [isActive, setIsActive] = useState('buy')
    const [propertyType, setPropertyType] = useState('bungalow')
    const [showPropertyDropdown, setShowPropertyDropdown] = useState(false)
    const [bedroomState, setBedroomState] = useState('1 bedroom')
    const [showBedroomsDropdown, setShowBedroomsDropdown] = useState(false)
    const [budget, setBudget] = useState('Max ')
    return (
        <div className="min-h-[100vh] bg-[url(/beautiful-architecture-building.jpg)] bg-cover bg-center bg-blend-color bg-[#00000050] relative">

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
                {/* filter */}
                <div className="w-full md:w-[90%] lg:w-[60%] min-w-[236px] h-fit min-h-[80px] pr-[20px] pl-[40px] py-[10px] bg-white shadow flex flex-wrap items-center justify-between md:rounded-[100px] mt-[15px]">

                    {/* location */}
                    <div className="h-[50px] min-w-[150px] md:min-w-[49px] w-[15%] mb-[25px] md:mb-0 flex flex-col justify-between">
                        <p className='text-[16px] font-medium'>Search location</p>
                        <input type="text" name="message" id="message" className=' h-[38px] w-[90%] bg-transparent border-b-[1.65px] border-slate-300 px-[20px] text-sm text-[#797E82] outline-none focus:border-primary focus:border-b-[1.65px] ease-in-out duration-200' />
                    </div>

                    {/* property type */}
                    <div className="h-[50px] min-w-[150px] md:min-w-[49px] w-[15%] mb-[25px] md:mb-0 flex flex-col justify-between">
                        <p className='text-[16px] font-medium capitalize'>property type</p>
                        <div onClick={() => setShowPropertyDropdown(!showPropertyDropdown)} className=" h-[38px] w-[90%] bg-transparent border-b-[1.65px] border-slate-300 px-[10px] text-sm text-[#797E82] flex items-center justify-between cursor-default relative">
                            <p className='capitalize'>{propertyType}</p>
                            <motion.img animate={{ rotate: showPropertyDropdown ? 180 : 0 }} src="/chevron-down-black.svg" alt="chevron down" className='w-[8px] h-[5px]' />

                            {/* dropdown */}
                            {
                                showPropertyDropdown && (
                                    <div className="w-[125px] md:w-[10vw] rounded-lg bg-white shadow absolute top-[30px] left-[15px]">
                                        <ul>
                                            {
                                                propertyTypes.map((type, index) => (
                                                    <li key={index} className={`hover:bg-slate-200 ease-in-out duration-100 capitalize h-[25px] px-[5px] ${index === 0 && 'rounded-t-lg'} ${index === propertyTypes.length - 1 && 'rounded-b-lg'}`} onClick={() => setPropertyType(type)}>{type}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                    {/* bedrooms */}
                    <div className="h-[50px] min-w-[150px] md:min-w-[49px] w-[15%] mb-[25px] md:mb-0 flex flex-col justify-between">
                        <p className='text-[16px] font-medium capitalize'>bedrooms</p>
                        <div onClick={() => setShowBedroomsDropdown(!showBedroomsDropdown)} className=" h-[38px] w-[90%] bg-transparent border-b-[1.65px] border-slate-300 px-[10px] text-sm text-[#797E82] flex items-center justify-between cursor-default relative">
                            <p className='capitalize'>{bedroomState}</p>
                            <motion.img animate={{ rotate: showBedroomsDropdown ? 180 : 0 }} src="/chevron-down-black.svg" alt="chevron down" className='w-[8px] h-[5px]' />

                            {/* dropdown */}
                            {
                                showBedroomsDropdown && (
                                    <div className="w-[125px] md:w-[10vw] rounded-lg bg-white shadow absolute top-[30px] left-[15px]">
                                        <ul>
                                            {
                                                bedrooms.map((bedroom, index) => (
                                                    <li key={index} className={`hover:bg-slate-200 ease-in-out duration-100 capitalize h-[25px] px-[5px] ${index === 0 && 'rounded-t-lg'} ${index === bedrooms.length - 1 && 'rounded-b-lg'}`} onClick={() => setBedroomState(bedroom)}>{bedroom}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )
                            }

                        </div>
                    </div>

                    {/* budget */}
                    <div className="h-[50px] min-w-[150px] md:min-w-[49px] w-[15%] mb-[25px] md:mb-0 flex flex-col justify-between">
                        <p className='text-[16px] font-medium'>Enter Budget</p>
                        <input type="text" name="message" id="message" className=' h-[38px] w-[90%] bg-transparent border-b-[1.65px] border-slate-300 px-[20px] text-sm text-[#797E82] outline-none focus:border-primary focus:border-b-[1.65px] ease-in-out duration-200' value={budget} onChange={(e) => setBudget(`Max ${e.target.value.split(' ')[1]}`)} />
                    </div>
                    <motion.div whileTap={{ scale: .95 }}
                        className={`h-[53px] w-[80vw] md:w-[98px] text-[18px] font-medium cursor-default flex items-center justify-center bg-primary rounded-[40px]`}>
                        Search
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Banner
