import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

import { motion } from "framer-motion"

// api
import { fetchPropertyTypes } from '../../../api/property-types'
import { fetchPropertyStatuses } from '../../../api/property-statuses'

// data
import { bedrooms } from '../../../data/home'


const Banner = () => {
    const navigate = useNavigate()

    const [searchLocation, setSearchLocation] = useState('')
    const [displayStatus, setDisplayStatus] = useState('')
    const [displayType, setDisplayType] = useState('')
    const [showPropertyStatuses, setShowPropertyStatuses] = useState(false)
    const [propertyStatuses, setPropertyStatuses] = useState<string[]>([])
    const [showPropertyTypes, setShowPropertyTypes] = useState(false)
    const [propertyTypes, setPropertyTypes] = useState<string[]>([])
    const [bedroomState, setBedroomState] = useState('')
    const [showBedroomsDropdown, setShowBedroomsDropdown] = useState(false)
    const [budget, setBudget] = useState('Max ')

    const handleSearch = () => {
        const searchUrl = `/property-search?${displayStatus && `status=${displayStatus}`}${searchLocation && `&location=${searchLocation}`}${displayType && `&type=${displayType}`}${bedroomState && `&bedrooms=${bedroomState.split(' ')[0]}`}`
        navigate(searchUrl)
    }

    useEffect(() => {
        fetchPropertyStatuses().then((response) => {
            const trimmedResponse = response.map((status) => status.name)
            setPropertyStatuses(trimmedResponse)
        })

        fetchPropertyTypes().then((response) => {
            const trimmedResponse = response.map((property) => property.name)
            setPropertyTypes(trimmedResponse)
        })
    }, [])

    return (
        <div className="min-h-[100vh] bg-[url(/beautiful-architecture-building.jpg)] bg-cover bg-center bg-blend-color bg-[#00000070] relative flex items-center justify-center">
            <div className="w-full lg:w-[75%] md:block md:absolute bottom-[250px]">
                <h2 className='capitalize text-primary font-semibold text-[40px] md:text-[90px] text-center'>search. see. love</h2>
                <p className="text-white text-center text-[16px] md:text-[22px] hidden md:block">Our mission is to make your real estate journey seamless, personalized and enjoyable, ensuring our clients achieve their real estate goals with ease and eficiency.</p>
            </div>

            <div className="absolute bottom-0 md:bottom-10 flex flex-col w-full items-center">
                {/* filter */}
                <div className="w-full md:w-[90%] lg:w-[60%] min-w-[236px] h-fit min-h-[80px] pr-[20px] pl-[40px] py-[10px] bg-white shadow flex flex-wrap items-center justify-between md:rounded-[100px] mt-[15px]">

                    {/* location */}
                    <div className="h-[50px] min-w-[150px] md:min-w-[49px] w-[15%] mb-[25px] md:mb-0 flex flex-col justify-between">
                        <p className='text-[16px] font-medium'>Search location</p>
                        <input type="text" name="search-location" id="search-location" className=' h-[38px] w-[90%] bg-transparent border-b-[1.65px] border-slate-300 px-[20px] text-sm text-[#797E82] outline-none focus:border-primary focus:border-b-[1.65px] ease-in-out duration-200' value={searchLocation} onChange={(e) => setSearchLocation(e.target.value)} />
                    </div>

                    {/* property type */}
                    <div className="h-[50px] min-w-[150px] md:min-w-[49px] w-[15%] mb-[25px] md:mb-0 flex flex-col justify-between">
                        <p className='text-[16px] font-medium capitalize'>property type</p>
                        <div onClick={() => setShowPropertyTypes(!showPropertyTypes)} className=" h-[38px] w-[90%] bg-transparent border-b-[1.65px] border-slate-300 px-[10px] text-sm text-[#797E82] flex items-center justify-between cursor-default relative">
                            <p className='capitalize'>{displayType.length > 11 ? `${displayType.slice(0, 11)}...` : displayType}</p>
                            <motion.img animate={{ rotate: showPropertyTypes ? 180 : 0 }} src="/chevron-down-black.svg" alt="chevron down" className='w-[8px] h-[5px]' />

                            {/* dropdown */}
                            {
                                showPropertyTypes && (
                                    <div className="w-[125px] md:w-[10vw] rounded-lg overflow-hidden bg-white shadow absolute top-[30px] left-[15px]">
                                        <ul>
                                            {
                                                propertyTypes.map((type, index) => (
                                                    <li key={index} className={`hover:bg-slate-200 ease-in-out duration-100 capitalize h-fit py-[10px] px-[5px] `} onClick={() => setDisplayType(type)}>{type}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                    {/* property status */}
                    <div className="h-[50px] min-w-[150px] md:min-w-[49px] w-[15%] mb-[25px] md:mb-0 flex flex-col justify-between">
                        <p className='text-[16px] font-medium capitalize'>property status</p>
                        <div onClick={() => setShowPropertyStatuses(!showPropertyStatuses)} className=" h-[38px] w-[90%] bg-transparent border-b-[1.65px] border-slate-300 px-[10px] text-sm text-[#797E82] flex items-center justify-between cursor-default relative">
                            <p className='capitalize'>{displayStatus}</p>
                            <motion.img animate={{ rotate: showPropertyStatuses ? 180 : 0 }} src="/chevron-down-black.svg" alt="chevron down" className='w-[8px] h-[5px]' />

                            {/* dropdown */}
                            {
                                showPropertyStatuses && (
                                    <div className="w-[125px] md:w-[10vw] rounded-lg overflow-hidden bg-white shadow absolute top-[30px] left-[15px]">
                                        <ul>
                                            {
                                                propertyStatuses.map((status, index) => (
                                                    <li key={index} className={`hover:bg-slate-200 ease-in-out duration-100 capitalize h-fit py-[10px] px-[5px] `} onClick={() => setDisplayStatus(status)}>{status}</li>
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
                        <input type="text" name="message" id="message" className=' h-[38px] w-[90%] bg-transparent border-b-[1.65px] border-slate-300 px-[20px] text-sm text-[#797E82] outline-none focus:border-primary focus:border-b-[1.65px] ease-in-out duration-200' value={budget} onChange={(e) => e.target.value !== 'Max' && setBudget(`Max ${e.target.value.split(' ')[1]}`)} />
                    </div>
                    <motion.div whileTap={{ scale: .95 }} onClick={handleSearch}
                        className={`h-[53px] w-[80vw] md:w-[98px] text-[18px] font-medium cursor-default flex items-center justify-center bg-primary rounded-[40px]`}>
                        Search
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Banner
