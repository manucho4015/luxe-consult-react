

const Testimonials = () => {
    const arr = Array.from(Array(3).keys())
    return (
        <div className='inline-flex w-full mt-[50px] justify-center'>
            <div className="inline-flex items-center md:rounded-2xl bg-white shadow w-full px-[10vw] pt-[10px] md:w-[95vw] md:px-[2.5vw] md:h-[60vh] lg:w-[90vw] lg:px-[5vw] lg:max-h-[835.48px] lg:h-[75vh]">
                <div className="w-full">
                    <h5 className='font-semibold text-[30px]'>What our customers are <br /> saying about us?</h5>
                    <div className="flex md:flex-row flex-col w-full justify-between md:max-h-[351.48px] md:h-[40vh] mt-[15px]">
                        {/* testimonial */}
                        {
                            arr.map((item) => (
                                <div key={item} className="bg-[#EAEAEA] md:h-full h-[350px] rounded-2xl md:w-[27.5vw] px-[15px] lg:w-[25vw] lg:max-w-[447px] lg:px-[25px] flex items-center md:m-0 mb-[15px]">
                                    <div>
                                        <div className="flex justify-between">
                                            <div className='flex'>
                                                <img src="/testimonial-1.jpg" alt="person" className='max-w-[80px] max-h-[80px] h-[10vh] w-[10vh] mr-[15px]' />
                                                <div>
                                                    <h5 className='font-medium capitalize'>cameron wilson</h5>
                                                    <p className='capitalize font-light text-[15px]'>designer</p>
                                                </div>
                                            </div>
                                            <img src="/quote.svg" alt="person" className='max-w-[38px] max-h-[38px] h-[7.5vh] w-[7.5vh] mr-[15px]' />
                                        </div>
                                        <p className='mt-[25px]'>Searches for multiplexes, property comparisons,
                                            and the loan estimator. Works great. Lorem
                                            ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et
                                            dores.
                                        </p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimonials
