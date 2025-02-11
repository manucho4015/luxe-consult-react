

const Testimonials = () => {
    const arr = Array.from(Array(3).keys())
    return (
        <div className='inline-flex w-full mt-[50px] justify-center'>
            <div className="inline-flex items-center rounded-2xl bg-white shadow w-[90vw] px-[5vw] max-h-[835.48px] h-[75vh]">
                <div className="w-full">
                    <h5 className='font-semibold text-[30px]'>What our customers are <br /> saying about us?</h5>
                    <div className="flex w-full justify-between max-h-[351.48px] h-[40vh] mt-[15px]">
                        {/* testimonial */}
                        {
                            arr.map((item) => (
                                <div key={item} className="bg-[#EAEAEA] h-full rounded-2xl w-[25vw] max-w-[447px] px-[25px] flex items-center">
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
