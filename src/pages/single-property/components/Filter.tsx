import { motion } from "framer-motion"

const Filter = () => {
    return (
        <div className="absolute -bottom-10 flex flex-col w-full items-center">
            <div className="w-[60%] min-w-[236px] h-[80px] px-[40px] bg-[#00000073] text-white shadow flex items-center justify-between rounded-[100px] mt-[15px]">
                <div className="h-[50px] min-w-[49px] w-[15%] flex flex-col justify-between">
                    <p className='text-[16px] font-medium'>Search location</p>
                    <input type="text" name="message" id="message" className=' h-[38px] w-[90%] bg-transparent border-b-[1.65px] border-slate-300 px-[20px] text-sm text-[#797E82] outline-none focus:border-primary focus:border-b-[1.65px] ease-in-out duration-200' />
                </div>
                <div className="h-[50px] min-w-[49px] w-[15%] flex flex-col justify-between">
                    <p className='text-[16px] font-medium'>Enter Budget</p>
                    <input type="text" name="message" id="message" className=' h-[38px] w-[90%] bg-transparent border-b-[1.65px] border-slate-300 px-[20px] text-sm text-[#797E82] outline-none focus:border-primary focus:border-b-[1.65px] ease-in-out duration-200' />
                </div>
                <motion.div whileTap={{ scale: .95 }}
                    className={`h-[53px] w-[98px] text-[18px] font-medium cursor-default flex items-center justify-center bg-primary rounded-[40px]`}>
                    Search
                </motion.div>
            </div>
        </div>
    )
}

export default Filter
