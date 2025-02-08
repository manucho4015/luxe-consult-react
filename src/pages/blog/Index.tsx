
// components
import Blog from "./components/Blog"
import Reply from "./components/Reply"
import ContactUs from "../../global/components/ContactUs"


const Index = () => {
    return (
        <div className="min-h-[100vh] w-full bg-linear-to-b from-[#F7E5D4] to-[#E9E9E9]">
            <div className="inline-flex justify-center w-full">
                <div className="w-[85%]">
                    <h3 className="mt-[175px] text-[25px] uppercase">why westlands is a prime investment destination in nairobi</h3>
                    <div className="flex justify-between items-center mt-[25px] max-w-[691px] w-[42.5vw]">
                        <p className="text-[#969696] capitalize text-[16px]">home</p>
                        <img src="/chevron-right-grey.svg" alt="chevron right grey" className="max-w-[6.17px] max-h-[10px] h-[5vh] w-[5vh]" />
                        <p className="text-[#969696] capitalize text-[16px]">blogs</p>
                        <img src="/chevron-right-grey.svg" alt="chevron right grey" className="max-w-[6.17px] max-h-[10px] h-[5vh] w-[5vh]" />
                        <p className="text-[#969696] uppercase text-[16px]">why westlands is a prime investment destination in nairobi</p>
                    </div>
                    <Blog />
                    <Reply />
                </div>
            </div>
            <ContactUs />
        </div>
    )
}

export default Index
