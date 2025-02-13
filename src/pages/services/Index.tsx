
// data
import { services } from "../../data/services"

// components
import ContactUs from "../../global/components/ContactUs"

const Index = () => {
    return (
        <>
            <div className="min-h-[100vh] w-full bg-linear-to-b pb-[50px] from-[#F7E5D4] to-[#E9E9E9] inline-block">
                <h3 className="mt-[175px] text-center text-[20px] lg:text-[30px] uppercase">our story</h3>
                <h4 className="uppercase text-center text-[40px] lg:text-[60px] mt-[15px] text-[#A37A52] font-bold">our services</h4>
                <div className="inline-flex w-full justify-center mt-[15px]">

                    <p className="text-center capitalize w-[90%] md:w-[75%] lg:w-[50%]">LUXE CONSULT is a prominent player in the real estate industry, known for its innovation, integrity, and commitment to excellence. Founded in 2024, LUXE CONSULT has rapidly grown into a trusted name in residential real estate markets.</p>
                </div>
                <h5 className="uppercase text-primary text-[30px] px-[5vw] lg:px-[10vw] mt-[30px] md:mt-[50px]">cctv installation</h5>
                <div className="inline-flex w-full flex-col lg:items-center md:flex-row px-[5vw] lg:px-[10vw] justify-between ">
                    <div className="w-full md:w-[45vw]">
                        <img src="/cctv.jpg" alt="cctv" className="md:w-[40vw] md:h-[40vh] lg:-w-[600px] lg:max-h-[600px] lg:w-[60vh] lg:h-[80vh] " />
                    </div>
                    <div className="w-full md:w-[50vw]">
                        <p className="md:m-0 mt-[50px]">
                            Luxe Consult provides professional CCTV installation services to enhance security for residential, commercial, and industrial properties. Our expert team ensures seamless installation, high-definition surveillance, and smart monitoring solutions tailored to your needs. Whether you require real-time remote access, motion detection, or night vision capabilities, we deliver cutting-edge security solutions with reliability and precision.
                        </p>
                        {
                            services.map((service, index) => (
                                <div key={index} className="mt-[15px]">
                                    <h5 className="font-semibold">{service.heading}</h5>
                                    <ul className="list-disc inline-block w-full">
                                        {
                                            service.points.map((point, index) => (
                                                <li className="ml-[25px]" key={index}>{point}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <ContactUs />
        </>
    )
}

export default Index
