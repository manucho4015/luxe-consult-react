import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router'

// components
import Banner from './components/Banner'
import PropertyCard from '../../global/components/Property'
import ContactUs from '../../global/components/ContactUs'

// api
import { fetchProperties } from '../../api/properties'

// custom types
import type { Property } from '../../custom-types/properties'

const Index = () => {
    const [searchParams] = useSearchParams();
    const [properties, setProperties] = useState<Property[]>([])

    // Get a query parameter
    const locationParam = searchParams.get('location');
    const typeParam = searchParams.get('type');
    const bedroomsParam = searchParams.get('bedrooms');
    let statusParam = searchParams.get('status');
    const maxPriceParam = searchParams.get('maxPrice');

    if (statusParam == 'buy') {
        statusParam = 'FOR SALE'
    } else if (statusParam == 'rent') {
        statusParam = 'FOR RENT'
    }

    useEffect(() => {
        console.log(statusParam)
        fetchProperties().then((response) => {
            const filterArray = response.filter((property) =>
                (locationParam ? property.location.toUpperCase().includes(locationParam?.toUpperCase()) : property) &&
                (typeParam ? property.property_type === typeParam : property) &&
                (bedroomsParam ? property.bedrooms === parseInt(bedroomsParam) : property) &&
                (statusParam ? property.status_display.toUpperCase() === statusParam : property) &&
                (maxPriceParam ? parseFloat(property.price) <= parseFloat(maxPriceParam) : property)
            )
            setProperties(filterArray)
        })
    }, [locationParam, typeParam, bedroomsParam, statusParam, maxPriceParam])
    return (
        <>
            <Banner />
            {
                properties.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[10vw] lg:px-[2.5vw] gap-10 py-[50px] bg-[#E9E9E9]">
                        {
                            properties.map((property, index) => (
                                <PropertyCard key={index} property={property} />
                            ))
                        }
                    </div>
                ) : (
                    <div className="bg-[#E9E9E9] h-[50vh] flex items-center justify-center">
                        <p className='text-[24px] text-slate-500 uppercase text-center'>No property found</p>
                    </div>
                )
            }


            <ContactUs />
        </>
    )
}

export default Index
