import { useState, useEffect } from 'react'

// components
import Banner from './components/Banner'
import PropertyCard from '../../global/components/Property'
import ContactUs from '../../global/components/ContactUs'

// api
import { fetchProperties } from '../../api/properties'

// custom types
import type { Property } from '../../custom-types/properties'

const Index = () => {
    const [properties, setProperties] = useState<Property[]>([])

    useEffect(() => {
        fetchProperties().then((response) => {
            setProperties(response)
        })
    }, [])
    return (
        <>
            <Banner />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[10vw] lg:px-[2.5vw] gap-10 py-[50px] bg-[#E9E9E9]">
                {
                    properties.map((property, index) => (
                        <PropertyCard key={index} property={property} />
                    ))
                }
            </div>

            <ContactUs />
        </>
    )
}

export default Index
