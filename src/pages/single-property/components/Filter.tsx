import { useState } from 'react'
import { motion } from "framer-motion"

// data
import { propertyTypes, bedrooms, bathrooms } from '../../../data/home'

const Filter = () => {
    const [propertyType, setPropertyType] = useState('bungalow')
    const [showPropertyDropdown, setShowPropertyDropdown] = useState(false)
    const [bedroomState, setBedroomState] = useState('1 bedroom')
    const [showBedroomsDropdown, setShowBedroomsDropdown] = useState(false)
    const [bathroomState, setBathroomState] = useState('1 barthroom')
    const [showBathroomsDropdown, setShowBathroomsDropdown] = useState(false)

    return (
        <div className="absolute -bottom-[300px] md:-bottom-10 flex flex-col w-full items-center">
            <div className="w-full h-fit md:w-[85%] md:min-w-[236px] md:h-[80px] pl-[40px] pr-[15px] py-[10px] md:px-[40px] bg-[#00000095] text-white shadow flex flex-wrap items-center justify-between md:rounded-[100px] mt-[15px]">

                {/* location */}
                <div className="h-[50px] min-w-[150px] md:min-w-[49px] w-[10%] mb-[25px] md:mb-0 flex flex-col justify-between">
                    <p className='text-[16px] font-medium'>Search location</p>
                    <input type="text" name="message" id="message" className=' h-[38px] w-[90%] bg-transparent border-b-[1.65px] border-slate-300 px-[20px] text-sm outline-none focus:border-primary focus:border-b-[1.65px] ease-in-out duration-200' />
                </div>

                {/* property type */}
                <div className="h-[50px] min-w-[150px] md:min-w-[49px] w-[12.5%] mb-[25px] md:mb-0 flex flex-col justify-between">
                    <p className='text-[16px] font-medium capitalize'>property type</p>
                    <div onClick={() => setShowPropertyDropdown(!showPropertyDropdown)} className=" h-[38px] w-[90%] bg-transparent border-b-[1.65px] border-slate-300 px-[10px] text-sm flex items-center justify-between cursor-default relative">
                        <p className='capitalize'>{propertyType}</p>
                        <motion.img animate={{ rotate: showPropertyDropdown ? 180 : 0 }} src="/chevron-down-black.svg" alt="chevron down" className='w-[8px] h-[5px]' />

                        {/* dropdown */}
                        {
                            showPropertyDropdown && (
                                <div className="w-[125px] md:w-[10vw] rounded-lg bg-black text-white shadow absolute z-[10] top-[30px] left-[15px]">
                                    <ul>
                                        {
                                            propertyTypes.map((type, index) => (
                                                <li key={index} className={`hover:bg-slate-200 hover:text-black ease-in-out duration-100 capitalize h-[25px] px-[5px] ${index === 0 && 'rounded-t-lg'} ${index === propertyTypes.length - 1 && 'rounded-b-lg'}`} onClick={() => setPropertyType(type)}>{type}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }

                    </div>
                </div>

                {/* bedrooms */}
                <div className="h-[50px] min-w-[150px] md:min-w-[49px] w-[12.5%] mb-[25px] md:mb-0 flex flex-col justify-between">
                    <p className='text-[16px] font-medium capitalize'>bedrooms</p>
                    <div onClick={() => setShowBedroomsDropdown(!showBedroomsDropdown)} className=" h-[38px] w-[90%] bg-transparent border-b-[1.65px] border-slate-300 px-[10px] text-sm text-[#BACBC8
                    ] flex items-center justify-between cursor-default relative">
                        <p className='capitalize'>{bedroomState}</p>
                        <motion.img animate={{ rotate: showBedroomsDropdown ? 180 : 0 }} src="/chevron-down-black.svg" alt="chevron down" className='w-[8px] h-[5px]' />

                        {/* dropdown */}
                        {
                            showBedroomsDropdown && (
                                <div className="w-[125px] md:w-[10vw] rounded-lg bg-black text-white shadow absolute top-[30px] left-[15px]">
                                    <ul>
                                        {
                                            bedrooms.map((bedroom, index) => (
                                                <li key={index} className={`hover:bg-slate-200 hover:text-black ease-in-out duration-100 capitalize h-[25px] px-[5px] ${index === 0 && 'rounded-t-lg'} ${index === bedrooms.length - 1 && 'rounded-b-lg'}`} onClick={() => setBedroomState(bedroom)}>{bedroom}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }

                    </div>
                </div>

                {/* bathrooms */}
                <div className="h-[50px] min-w-[150px] md:min-w-[49px] w-[12.5%] mb-[25px] md:mb-0 flex flex-col justify-between">
                    <p className='text-[16px] font-medium capitalize'>bathrooms</p>
                    <div onClick={() => setShowBathroomsDropdown(!showBathroomsDropdown)} className=" h-[38px] w-[90%] bg-transparent border-b-[1.65px] border-slate-300 px-[10px] text-sm text-[#BACBC8
                    ] flex items-center justify-between cursor-default relative">
                        <p className='capitalize'>{bathroomState}</p>
                        <motion.img animate={{ rotate: showBathroomsDropdown ? 180 : 0 }} src="/chevron-down-black.svg" alt="chevron down" className='w-[8px] h-[5px]' />

                        {/* dropdown */}
                        {
                            showBathroomsDropdown && (
                                <div className="w-[125px] md:w-[10vw] rounded-lg bg-black text-white shadow absolute top-[30px] left-[15px]">
                                    <ul>
                                        {
                                            bathrooms.map((bathroom, index) => (
                                                <li key={index} className={`hover:bg-slate-200 hover:text-black ease-in-out duration-100 capitalize h-[25px] px-[5px] ${index === 0 && 'rounded-t-lg'} ${index === bathrooms.length - 1 && 'rounded-b-lg'}`} onClick={() => setBathroomState(bathroom)}>{bathroom}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }

                    </div>
                </div>

                {/* budget */}
                <div className="h-[50px] min-w-[150px] md:min-w-[49px] w-[10%] mb-[25px] md:mb-0 flex flex-col justify-between">
                    <p className='text-[16px] font-medium'>Enter Budget</p>
                    <input type="text" name="message" id="message" className=' h-[38px] w-[90%] bg-transparent border-b-[1.65px] border-slate-300 px-[20px] text-sm text-[#797E82] outline-none focus:border-primary focus:border-b-[1.65px] ease-in-out duration-200' />
                </div>

                {/* square feet */}
                <div className="h-[50px] min-w-[150px] md:min-w-[49px] w-[10%] mb-[25px] md:mb-0 flex flex-col justify-between">
                    <p className='text-[16px] font-medium'>Sqft</p>
                    <input type="text" name="message" id="message" className=' h-[38px] w-[90%] bg-transparent border-b-[1.65px] border-slate-300 px-[20px] text-sm text-[#797E82] outline-none focus:border-primary focus:border-b-[1.65px] ease-in-out duration-200' />
                </div>
                <motion.div whileTap={{ scale: .95 }}
                    className={`h-[53px] w-[80vw] md:w-[98px] text-[18px] font-medium cursor-default flex items-center justify-center bg-primary rounded-[40px]`}>
                    Search
                </motion.div>
            </div>
        </div>
    )
}

export default Filter
