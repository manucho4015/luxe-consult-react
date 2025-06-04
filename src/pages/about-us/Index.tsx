
//components
import Card from "./components/Card"
import Testimonials from "./components/Testimonials"
import Download from "../../global/components/Download"
import ContactUs from "../../global/components/ContactUs"

// data
import { elements } from "../../data/about-us"

const Index = () => {

    return (
        <>
            <div className="min-h-[100vh] w-full bg-linear-to-b from-[#F7E5D4] to-[#E9E9E9] inline-block">
                <h3 className="mt-[175px] text-center text-[20px] lg:text-[30px] uppercase">our story</h3>
                <h4 className="uppercase text-center text-[40px] lg:text-[60px] mt-[15px] text-[#A37A52] font-bold">About Us</h4>
                <div className="inline-flex w-full justify-center mt-[15px]">
                    <p className="text-center capitalize w-[75%] lg:w-[50%]">
                        Luxe Consult is a leading  luxury real estate firm specializing in high end properties and executive developments. Established in 2024, Luxe Consult has quickly emerged as a trusted name, delivering tailored property solutions and setting new benchmarks in the industry.
                    </p>
                </div>
                <div className="inline-flex w-full justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 px-[10vw] md:px-[2.5vw] gap-10 mt-[50px] mb-[50px] w-[75%]">
                        {
                            elements.map((element, index) => (
                                <Card {...element} key={index} />
                            ))
                        }
                    </div>
                </div>
                <Testimonials />
                <div className="mb-[15px]">
                    <Download />
                </div>
            </div>
            <ContactUs />

        </>
    )
}

export default Index
