import { Link } from "react-router"

// custom types
import type { Property } from "../../../../../custom-types/properties"

const Property = ({ property }: { property: Property }) => {

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
    return (
        <div className='bg-[#1F4B3F05] inline-block rounded-2xl p-[15px] w-full md:max-w-[465px] md:w-[30vw] shadow'>
            {/* image */}
            <Link to={`/property/${property.id}`} className="relative inline-block rounded-2xl max-h-[296.27px] w-full h-[55vh]">
                <div className="flex absolute top-[10px] left-[10px]">
                    <div
                        className={`h-[33px] px-[10px] cursor-default text-white bg-black text-[13px] flex items-center justify-center  rounded-[40px] uppercase mr-[15px]`}>
                        {property.status[0]}
                    </div>
                </div>
                <img src={property.images[0] ? property.images[0].image : './property-img-1.jpg'} className={`rounded-2xl h-full w-full `} />
            </Link>
            <div className="inline-flex mt-[45px] justify-between items-center w-full">
                <p className="text-[19px] capitalize">{property.title.length > 25 ? `${property.title.slice(0, 25)}...` : property.title}</p>
                <p className="text-[21px] font-medium text-primary">Ksh. {commafy(parseInt(property.price))}</p>
            </div>


            {/* location */}
            <div className="inline-flex mt-[10px] items-center w-full">
                <img src="/location.svg" alt="location" className="max-w-[17.33px] max-h-[20px] h-[5vh] w-[10vh] mr-[15px]" />
                <p className="text-[16px]">{`${property?.location.street_address}, ${property?.location.city}, ${property?.location.county}.`}</p>
            </div>

            {/* features */}
            <div className="inline-flex mt-[10px] justify-between items-center">
                <div className="flex items-center pr-[10px] border-r-[1px] border-slate-300">
                    <img src="/bed.svg" alt="location" className="max-w-[20px] max-h-[20px] h-[5vh] w-[10vh] mr-[7.5px]" />
                    <p className="text-[14px] capitalize">{property.bedrooms}</p>
                </div>
                <div className="flex items-center pr-[10px] border-r-[1px] border-slate-300 ml-[10px]">
                    <img src="/hot-tub.svg" alt="location" className="max-w-[20px] max-h-[20px] h-[5vh] w-[10vh] mr-[7.5px]" />
                    <p className="text-[14px] capitalize">{property.bathrooms}</p>
                </div>
                <div className="flex items-center ml-[10px]">
                    <img src="/measurement.svg" alt="location" className="max-w-[20px] max-h-[20px] h-[5vh] w-[10vh] mr-[7.5px]" />
                    <p className="text-[14px] capitalize">{property.sqft} sqft</p>
                </div>
            </div>
            <div className="inline-flex justify-end mt-[10px] items-center w-full">
                <p className="mr-[3px]">Listed:</p>
                <p className="italic font-light text-[14px]">{new Date(property.listed_date).toDateString()}</p>
            </div>
        </div>
    )
}

export default Property
