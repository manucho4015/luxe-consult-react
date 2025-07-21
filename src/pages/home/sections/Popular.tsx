import { Link } from "react-router"

// custom types
import type { Property } from "../../../custom-types/properties"

const Categories = ({ properties }: { properties: Property[] }) => {

    const grouped: Record<string, number> = {}

    properties.forEach(property => {
        const key = property.location.city
        grouped[key] = (grouped[key] || 0) + 1
    })
    let popularPlaces = Object.entries(grouped).map(([city, count]) => (
        { city, count }
    ))

    popularPlaces = popularPlaces.sort((a, b) => b.count - a.count).slice(0, 5)

    return (
        <div className='min-h-[50vh] inline-block w-full'>
            <h2 className="font-bold text-[40px] mt-[100px] text-center capitalize">most popular places</h2>
            <div className="flex flex-wrap gap-8 px-[10vw] mt-[25px]">
                {
                    popularPlaces.map((place, index) => (
                        <Link to={`property-search?location=${place.city}`}>
                            <div key={index} className={`bg-[url(/modern-residential-building.jpg)] max-w-[256px] max-h-[338.11px] h-[50vh] w-[30vh] bg-blend-color bg-[#00000060] rounded-md p-[20px] shadow text-white lg:mb-0 lg:mr-0 mb-[20px] mr-[20px] bg-center bg-cover`}>
                                <div className="inline-flex w-full justify-center">
                                    <div className=" rounded-2xl border-primary border-[1px] min-w-[50%] p-[10px] bg-[#E5AC7410]">
                                        <h4 className="font-medium text-[19px]">{place.city}</h4>
                                        <p className="font-light text-[15px]">{place.count} {place.count == 1 ? 'property' : 'properties'}</p>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories
