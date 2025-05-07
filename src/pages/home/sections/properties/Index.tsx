import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// components
import PropertyCard from './components/Property'

// data
import { selectToggles } from '../../../../data/home'

// api
import { fetchProperties } from '../../../../api/properties'

// custom types
import type { Property } from '../../../../custom-types/properties'

const Properties = () => {
    const [isActive, setIsActive] = useState('')
    const [properties, setProperties] = useState<Property[]>([])

    useEffect(() => {
        fetchProperties().then((response) => {
            setProperties(response.slice(0, 6))
        })
    }, [])
    return (
        <div className='min-h-[50vh] inline-block w-full'>
            <h2 className="font-bold text-[40px] mt-[100px] text-center">Featured Properties</h2>
            <p className=" text-[17px] text-center">Partner With Us for Seamless Real Estate Success</p>
            <div className="inline-flex mt-[25px] justify-center w-full">
                {/* select toggle */}
                <div className="flex flex-wrap lg:justify-between w-[90vw]">
                    {
                        selectToggles.map((toggle) => (
                            <motion.div animate={{ backgroundColor: isActive == toggle.value ? '#000' : '#E9E9E9', color: isActive == toggle.value ? '#fff' : '#000' }}
                                className={`min-h-[53px] min-w-[141px] px-[15px] mr-[10px] mb-[10px] lg:mr-0 cursor-default text-[18px] flex items-center justify-center  rounded-xl capitalize `}
                                onClick={() => setIsActive(toggle.value)}>
                                {toggle.label}
                            </motion.div>
                        ))
                    }
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 px-[5vw] md:px-[2.5vw] gap-10 mt-[50px]">
                {
                    properties.map((property, index) => (
                        <PropertyCard key={index} property={property} />
                    ))
                }
            </div>
        </div>
    )
}

export default Properties
