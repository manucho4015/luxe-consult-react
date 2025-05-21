import { useState, useEffect } from 'react'
import { useParams } from "react-router"

// components
import ImageCarousel from "./components/ImageCarousel"
// import Filter from "./components/Filter"
import Description from "./components/Description"
import PropertyCard from "../../global/components/Property"
import ContactUs from "../../global/components/ContactUs"

// api
import { fetchProperties, fetchProperty } from '../../api/properties'

// custom types
import type { Property } from '../../custom-types/properties'

// data

const Index = () => {
    const { propertyId } = useParams()
    const [properties, setProperties] = useState<Property[]>([])
    const [property, setProperty] = useState<Property | null>(null)

    const tempImages = ['/property-img-1.jpg', '/property-img-2.jpg', '/aerial-view-apartment-buildings.jpg']


    console.log(property?.images.map((propImg) => propImg.image))
    useEffect(() => {
        fetchProperties().then((response) => {
            setProperties(response.filter((prop) => prop.id !== propertyId))
        })
        if (propertyId) {
            fetchProperty(propertyId).then((response) => {
                setProperty(response)
            })
        }
    }, [propertyId])
    return (
        <>
            <div className="relative mb-[25px] md:mb-[100px] h-fit">
                <div className="hidden md:inline-block min-h-[40vh] bg-[url(/modern-residential-building.jpg)] bg-[#0000007e] bg-center bg-cover bg-blend-overlay w-full" />
                <div className="md:mt-[50px]">
                    <ImageCarousel images={property?.images.map((propImg) => propImg.image) as unknown as string[] || tempImages} />
                </div>
                {/* remove filter for this version of the app */}
                {/* <Filter /> */}
            </div>
            <Description property={property} />
            <h4 className="font-medium mt-[50px] text-[30px] px-[2.5vw]">Similar Listings</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[5vw] lg:px-[2.5vw] gap-10 mt-[15px] mb-[50px] bg-transparent">
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
