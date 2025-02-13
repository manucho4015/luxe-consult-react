

// components
import ImagesGrid from "./components/ImagesGrid"
import Filter from "./components/Filter"
import Description from "./components/Description"
import Property from "../../global/components/Property"
import ContactUs from "../../global/components/ContactUs"

const Index = () => {
    const arr = Array.from(Array(6).keys())
    return (
        <>
            <div className="relative">
                <div className="inline-block min-h-[40vh] bg-red-300 w-full" />
                <ImagesGrid />
                <Filter />
            </div>
            <Description />
            <h4 className="font-medium mt-[25px] text-[30px] px-[2.5vw]">Similar Listings</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[10vw] lg:px-[2.5vw] gap-10 mt-[25px] mb-[50px] bg-transparent">
                {
                    arr.map((item) => (
                        <Property key={item} />
                    ))
                }
            </div>
            <ContactUs />
        </>
    )
}

export default Index
