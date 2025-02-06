

const WorkWithUs = () => {
    return (
        <div className='min-h-[100vh] py-[50px] px-[5vw]'>
            <h4 className='text-center font-semibold text-[40px]'>Why You Should Work With Us</h4>
            <p className='text-center font-medium text-[17px]'>Partner With Us for Seamless Real Estate Success</p>
            <div className="inline-flex mt-[25px] w-full justify-between">
                <div className="grid grid-cols-2 gap-8 max-w-[45vw] w-fit">
                    <div className="flex flex-col items-center">
                        {/* Image 1 */}
                        <img src="/people-shaking-hands.jpg" alt="people shaking hands"
                            className='max-h-[473px] max-w-[400px] h-[70%] w-[90%]' />
                        {/* Black Card */}
                        <div className="rounded-2xl bg-primary flex justify-center items-center h-[35%] w-[70%] max-h-[270px] max-w-[300px]  mt-8">
                            <div className='flex flex-col items-center'>
                                <div className="rounded-full bg-black flex items-center justify-center h-[4vw] w-[4vw] max-h-[90px] max-w-[90px]">
                                    <img src="/house-white.svg" alt="people shaking hands" className='h-[2vw] w-[2vw] max-h-[38.4px] max-w-[37.9px]' />
                                </div>
                                <p className='text-center mt-[10px] '>10K <br />Customers Served</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">

                        {/* Primary Card */}
                        <div className="rounded-2xl bg-black flex justify-center items-center h-[35%] w-[70%] max-h-[270px] max-w-[300px]">
                            <div className='flex flex-col items-center'>
                                <div className="rounded-full bg-primary flex items-center justify-center h-[4vw] w-[4vw] max-h-[90px] max-w-[90px]">
                                    <img src="/house-white.svg" alt="people shaking hands" className='h-[2vw] w-[2vw] max-h-[38.4px] max-w-[37.9px]' />
                                </div>
                                <p className='text-center mt-[10px] text-white'>10K <br />Customers Served</p>
                            </div>
                        </div>
                        {/* Image 2 */}
                        <img src="/mansion.jpg" alt="mansion" className='max-h-[473px] max-w-[400px] h-[70%] w-[90%] mt-8' />
                    </div>

                </div>
                <div className="max-w-[45vw] w-[647px] max-h-[552px] h-[75vh] flex items-center relative">
                    <div className="bg-[url(/city-skyline-sketch.jpg)] h-[80%] w-full"></div>
                </div>
            </div>
        </div>
    )
}

export default WorkWithUs
