

const Banner = () => {
    return (
        <div className="min-h-[100vh] w-full bg-linear-to-b from-[#F7E5D4] to-[#E9E9E9] inline-flex items-center justify-center">
            <div className="h-[50vh] w-[90vw] lg:w-[75vw]">
                <h4 className="uppercase text-center text-[20px] md:text-[30px]">we'd love to hear from you</h4>
                <h4 className="uppercase text-center text-[40px] md:text-[60px] text-[#A37A52] font-bold">contact us</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-[50px]">
                    <div className="text-center">
                        <h5 className="uppercase mb-[25px] text-[30px]">find us here</h5>
                        <p className="text-[#6D6D6D] text-[20px]">6th Floor, Western Towers</p>
                        <p className="text-[#6D6D6D] text-[20px]">Muthithi Road Off Mpesi Lane</p>
                    </div>
                    <div className="text-center">
                        <h5 className="uppercase mb-[25px] text-[30px]">get in touch</h5>
                        <p className="text-[#6D6D6D] text-[20px]">Customer@Luxeconsult.com</p>
                        <p className="text-[#6D6D6D] text-[20px]">Hello@Luxeconsult.com</p>
                        <p className="text-[#6D6D6D] text-[20px]">+254712435678</p>
                    </div>
                    <div className="text-center">
                        <h5 className="uppercase mb-[25px] text-[30px]">working hours</h5>
                        <p className="text-[#6D6D6D] text-[20px]">Mon- Fri 8:00AM -5:00PM</p>
                        <p className="text-[#6D6D6D] text-[20px]">Saturday 8:00AM -1:00PM</p>
                    </div>
                </div>
                <div className="inline-flex w-full justify-center">
                    <div className="h-[2.5px] w-[40vw] bg-linear-to-r from-[#E7C873] to-[#000] rounded-md mt-[50px]" />
                </div>
            </div>
        </div>
    )
}

export default Banner
