import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// components
import PropertyCard from './components/Property'

// api
import { fetchProperties } from '../../../../api/properties'
import { fetchPropertyTypes } from '../../../../api/property-types'

// custom types
import type { Property } from '../../../../custom-types/properties'
import type { PropertyType } from '../../../../custom-types/property-types'

const Properties = () => {
    const [isActive, setIsActive] = useState('')
    const [propertyTypes, setPropertyTypes] = useState<PropertyType[]>([])
    const [properties, setProperties] = useState<Property[]>([])
    const [filterProperties, setFilterProperties] = useState<Property[]>([])


    const handleFilter = (type: string) => {
        if (isActive === type) {
            setIsActive('')
            setFilterProperties(properties)
        } else {

            setIsActive(type)
            setFilterProperties(properties.filter((property) => property.property_type.name === type))
        }
    }

    useEffect(() => {
        fetchProperties().then((response) => {
            setProperties(response.filter((property) => property.category.toUpperCase() === 'FEATURED'))
            setFilterProperties(response.filter((property) => property.category.toUpperCase() === 'FEATURED'))
        })
        fetchPropertyTypes().then((response) => {
            setPropertyTypes(response)
        })
    }, [])
    return (
        <div className='min-h-[50vh] inline-block w-full'>
            <h2 className="font-bold text-[40px] mt-[100px] text-center">Featured Properties</h2>
            <p className=" text-[17px] text-center">Partner With Us for Seamless Real Estate Success</p>
            <div className="inline-flex mt-[25px] justify-center w-full">
                {/* select toggle */}
                <div className="flex flex-wrap gap-2  w-[90vw]">
                    {
                        propertyTypes.map((type, index) => (
                            <motion.div key={index} animate={{ backgroundColor: isActive == type.name ? '#000' : '#E9E9E9', color: isActive == type.name ? '#fff' : '#000' }}
                                className={`min-h-[53px] min-w-[141px] px-[15px] mr-[10px] mb-[10px] lg:mr-0 cursor-default text-[18px] flex items-center justify-center  rounded-xl capitalize `}
                                onClick={() => handleFilter(type.name)}>
                                {type.name}
                            </motion.div>
                        ))
                    }
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 px-[5vw] md:px-[2.5vw] gap-10 mt-[50px]">
                {
                    filterProperties.map((property, index) => (
                        <PropertyCard key={index} property={property} />
                    ))
                }
            </div>
        </div>
    )
}

export default Properties
