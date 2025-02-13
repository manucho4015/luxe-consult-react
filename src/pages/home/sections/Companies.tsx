

const Companies = () => {
    return (
        <div className=" inline-flex w-full justify-center">
            <div className="max-h-[314.3px] h-[40vh] w-[90vw] rounded-xl bg-black shadow flex justify-center items-center">
                <div className="text-white">
                    <p className="font-medium text-center">Thousands of world’s leading companies trust Space</p>
                    {/* companies */}
                    <div className="flex flex-wrap md:justify-between items-center h-fit w-full md:w-[80vw] lg:w-[60vw] mt-[50px] px-[5vw]">
                        <img src="/amazon-white.svg" alt="amazon" className="max-w-[84px] max-h-[26px] h-[15vh] w-[30vh] md:m-0 mb-[10px] mr-[20px]" />
                        <img src="/amd-white.svg" alt="amazon" className="max-w-[84px] max-h-[26px] h-[15vh] w-[30vh] md:m-0 mb-[10px] mr-[20px]" />
                        <img src="/cisco-white.svg" alt="amazon" className="max-w-[84px] max-h-[26px] h-[15vh] w-[30vh] md:m-0 mb-[10px] mr-[20px]" />
                        <img src="/dropcam-white.svg" alt="amazon" className="max-w-[84px] max-h-[26px] h-[15vh] w-[30vh] md:m-0 mb-[10px] mr-[20px]" />
                        <img src="/logitech-white.svg" alt="amazon" className="max-w-[84px] max-h-[26px] h-[15vh] w-[30vh] md:m-0 mb-[10px] mr-[20px]" />
                        <img src="/spotify-white.svg" alt="amazon" className="max-w-[84px] max-h-[26px] h-[15vh] w-[30vh] md:m-0 mb-[10px] mr-[20px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Companies
