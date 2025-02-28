import { Link } from "react-router"

const Property = () => {
    return (
        <div className='bg-[#1F4B3F05] inline-block rounded-2xl p-[15px] w-full md:max-w-[465px] max-h-[520.67px] md:w-[30vw] h-[75vh] shadow'>
            {/* image */}
            <Link to={`/property-search/1`}>
                <div className="bg-red-200 rounded-2xl p-[10px]  max-h-[296.27px] w-full h-[55vh]">
                    <div className="flex">
                        <div
                            className={`h-[33px] w-[92px] cursor-default text-white bg-black text-[13px] flex items-center justify-center  rounded-[40px] uppercase mr-[15px]`}>
                            for sale
                        </div>
                        <div
                            className={`h-[33px] w-[92px] cursor-default text-white bg-primary text-[13px] flex items-center justify-center  rounded-[40px] uppercase`}>
                            featured
                        </div>
                    </div>
                </div>
            </Link>
            <div className="inline-flex mt-[45px] justify-between items-center w-full">
                <p className="text-[19px]">Luxury Family Home</p>
                <p className="text-[21px] font-medium text-primary">Ksh.3,995,000</p>
            </div>

            {/* location */}
            <div className="inline-flex mt-[10px] items-center w-full">
                <img src="/location.svg" alt="location" className="max-w-[17.33px] max-h-[20px] h-[5vh] w-[10vh] mr-[15px]" />
                <p className="text-[16px]">Nairobi, Kenya</p>
            </div>

            {/* features */}
            <div className="inline-flex mt-[10px] justify-between items-center">
                <div className="flex items-center pr-[10px] border-r-[1px] border-slate-300">
                    <img src="/bed.svg" alt="location" className="max-w-[20px] max-h-[20px] h-[5vh] w-[10vh] mr-[7.5px]" />
                    <p className="text-[14px] capitalize">4 beds</p>
                </div>
                <div className="flex items-center pr-[10px] border-r-[1px] border-slate-300 ml-[10px]">
                    <img src="/hot-tub.svg" alt="location" className="max-w-[20px] max-h-[20px] h-[5vh] w-[10vh] mr-[7.5px]" />
                    <p className="text-[14px] capitalize">1 bath</p>
                </div>
                <div className="flex items-center ml-[10px]">
                    <img src="/measurement.svg" alt="location" className="max-w-[20px] max-h-[20px] h-[5vh] w-[10vh] mr-[7.5px]" />
                    <p className="text-[14px] capitalize">400 sqft</p>
                </div>
            </div>
            <div className="inline-flex justify-end mt-[10px] items-center w-full">
                <p className="mr-[3px]">Listed:</p>
                <p className="italic font-light text-[14px]">12/01/2025</p>
            </div>
        </div>
    )
}

export default Property
