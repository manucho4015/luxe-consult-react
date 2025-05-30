import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// components
import PropertyCard from './components/Property'

// api
import { fetchProperties } from '../../../../api/properties'

// custom types
import type { Property } from '../../../../custom-types/properties'

const Properties = () => {
    const [isActive, setIsActive] = useState('all')
    const [properties, setProperties] = useState<Property[]>([])

    useEffect(() => {
        fetchProperties().then((response) => {
            setProperties(response)
        })
    }, [])
    return (
        <div className='min-h-[50vh] inline-block w-full pb-[100px]'>
            <h2 className="font-bold text-[40px] mt-[100px] text-center">Ongoing Projects</h2>
            <p className=" text-[17px] text-center">Partner With Us for Seamless Real Estate Success</p>
            <div className="inline-flex mt-[25px] justify-center w-full">
                {/* select toggle */}
                <div className="flex flex-wrap md:justify-between max-w-[550px] w-[80vw] md:w-[60vw] lg:w-[40vw]">
                    <motion.div animate={{ backgroundColor: isActive == 'all' ? '#000' : '#fff', color: isActive == 'all' ? '#fff' : '#000', borderColor: isActive == 'all' ? '#fff' : '#000' }}
                        className={`h-[53px] min-w-[141px] cursor-default border-[1px] text-[18px] flex items-center justify-center rounded-[40px] md:m-0 mr-[10px] mb-[10px]`}
                        onClick={() => setIsActive('all')}>
                        All Properties
                    </motion.div>
                    <motion.div animate={{ backgroundColor: isActive == 'rent' ? '#000' : '#fff', color: isActive == 'rent' ? '#fff' : '#000', borderColor: isActive == 'rent' ? '#fff' : '#000' }}
                        className={`h-[53px] min-w-[141px] cursor-default border-[1px] text-[18px] flex items-center justify-center  rounded-[40px] md:m-0 mr-[10px]`}
                        onClick={() => setIsActive('rent')}>
                        For Rent
                    </motion.div>
                    <motion.div animate={{ backgroundColor: isActive == 'sale' ? '#000' : '#fff', color: isActive == 'sale' ? '#fff' : '#000', borderColor: isActive == 'sale' ? '#fff' : '#000' }}
                        className={`h-[53px] min-w-[141px] cursor-default border-[1px] text-[18px] flex items-center justify-center  rounded-[40px] md:m-0 mr-[10px]`}
                        onClick={() => setIsActive('sale')}>
                        For Sale
                    </motion.div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 px-[2.5vw] gap-10 mt-[50px]">
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
