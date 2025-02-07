

const Companies = () => {
    return (
        <div className=" inline-flex w-full justify-center ">
            <div className="max-h-[314.3px] h-[40vh] w-[90vw] rounded-xl bg-black shadow flex justify-center items-center">
                <div className="text-white">
                    <p className="font-medium text-center">Thousands of world’s leading companies trust Space</p>
                    {/* companies */}
                    <div className="flex justify-between items-center h-fit w-[60vw] mt-[50px] ">
                        <img src="/amazon-white.svg" alt="amazon" className="max-w-[84px] max-h-[26px] h-[15vh] w-[30vh]" />
                        <img src="/amd-white.svg" alt="amazon" className="max-w-[84px] max-h-[26px] h-[15vh] w-[30vh]" />
                        <img src="/cisco-white.svg" alt="amazon" className="max-w-[84px] max-h-[26px] h-[15vh] w-[30vh]" />
                        <img src="/dropcam-white.svg" alt="amazon" className="max-w-[84px] max-h-[26px] h-[15vh] w-[30vh]" />
                        <img src="/logitech-white.svg" alt="amazon" className="max-w-[84px] max-h-[26px] h-[15vh] w-[30vh]" />
                        <img src="/spotify-white.svg" alt="amazon" className="max-w-[84px] max-h-[26px] h-[15vh] w-[30vh]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Companies
