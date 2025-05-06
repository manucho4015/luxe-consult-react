import { useState, useEffect } from "react"



// api
import { fetchProperty } from '../../../api/properties'

// custom types
import type { Property } from '../../../custom-types/properties'

const Description = ({ propertyId }: { propertyId: string | undefined }) => {

    const [property, setProperty] = useState<Property>()

    function commafy(num: number) {
        var str = num.toString().split('.');
        if (str[0].length >= 5) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        if (str[1] && str[1].length >= 5) {
            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
        }
        return str.join('.');
    }

    useEffect(() => {
        if (propertyId) {
            fetchProperty(propertyId).then((response) => {
                setProperty(response)
            })
        }
    }, [propertyId])
    return (
        <div className='mt-[50px] inline-flex w-full justify-center'>
            <div className="rounded-lg shadow-md p-[30px] w-[90vw]">
                {/* <h5 className='capitalize font-medium text-[25px]'>property description</h5> */}
                <h4 className='uppercase text-primary font-medium text-[30px] mt-[5px]'>{property?.title} <sup className=" text-black text-[12px] -top-[15px] font-light">{property?.status_display}</sup></h4>
                <p className='mt-[25px] text-[#6D6D6D]'>{property?.description}</p>

                {/* pricing */}
                <h5 className='capitalize font-medium text-[25px] mt-[50px]'>More Information</h5>
                <div className="flex flex-wrap mt-[10px]">
                    <div className="mr-[10px] col-span-1 font-light">
                        Property type - <span className="font-medium capitalize">{property?.property_type}</span>
                    </div>
                    <div className="mr-[10px] col-span-1 font-light border-l-[1px] border-slate-700 pl-[10px]">
                        Location - <span className="font-medium capitalize">{property?.location}</span>
                    </div>
                    <div className="mr-[10px] col-span-1 font-light border-l-[1px] border-slate-700 pl-[10px]">
                        Price - <span className="font-medium capitalize">Ksh. {property && commafy(parseInt(property.price))}</span>
                    </div>
                    <div className="mr-[10px] col-span-1 font-light border-l-[1px] border-slate-700 pl-[10px]">
                        Bedrooms - <span className="font-medium capitalize">{property?.bedrooms}</span>
                    </div>
                    <div className="mr-[10px] col-span-1 font-light border-l-[1px] border-slate-700 pl-[10px]">
                        Bathrooms - <span className="font-medium capitalize">{property?.bathrooms}</span>
                    </div>
                </div>
                {/* <ul className="list-disc inline-block  mt-[10px] bg-[#E7C87311] rounded-lg pt-[10px]">
                    {
                        pricing.map((price, index) => (
                            <li className="ml-[25px] mb-[5px] mr-[15px]" key={index}>{price}</li>
                        ))
                    }
                </ul> */}

                {/* amenities */}
                <h5 className='capitalize font-medium text-[25px] mt-[50px]'>world-class amenities</h5>
                <ul className="list-disc inline-block  mt-[10px] bg-[#E7C87311] rounded-lg pt-[10px]">
                    {
                        property?.amenities.map((amenity, index) => (
                            <li className="ml-[25px] mb-[5px] mr-[15px]" key={index}>{amenity}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Description
