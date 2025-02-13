
// components
import Blog from "./components/Blog"
import ContactUs from "../../global/components/ContactUs"

const Index = () => {
    const arr = Array.from(Array(6).keys())
    return (
        <div className="min-h-[100vh] w-full bg-linear-to-b from-[#F7E5D4] to-[#E9E9E9] inline-block">
            <h3 className="mt-[175px] text-center text-[20px] md:text-[30px] uppercase">blogs</h3>
            <h4 className="uppercase text-center text-[40px] md:text-[60px] text-[#A37A52] font-bold">latest insights</h4>
            <p className="text-center md:p-0 px-[10vw]">Property Insights offer invaluable knowledge and expertise to guide clients through the dynamic real estate landscape</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-[10vw] lg:px-[2.5vw] gap-10 mt-[50px] mb-[50px]">
                {
                    arr.map((item) => (
                        <Blog key={item} />
                    ))
                }
            </div>
            <ContactUs />
        </div>
    )
}

export default Index
