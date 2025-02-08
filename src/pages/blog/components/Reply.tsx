import { motion } from "framer-motion"

const Reply = () => {
    return (
        <div className='bg-white inline-block rounded-2xl p-[25px] w-full shadow my-[50px]'>
            <h4 className='font-semibold capitalize text-[30px]'>leave a reply</h4>
            <p className="text-[#969696]">Your email will not be published</p>
            <textarea id="description-lock_device_input" rows={10} className="block p-2.5 mt-[45px] w-full text-sm text-gray-900 bg-gray-200 rounded-lg border
                    border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="Comment..." />
            <div className="mt-[25px]">
                <input type="text" id="notification-title" className="bg-gray-50 border-[1px] border-slate-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-0 focus:outline-none w-[273px] md:w-[40%] p-2.5  placeholder-gray-400 mr-[15px]" placeholder="Name" required />
                <input type="email" id="notification-title" className="bg-gray-50 border-[1px] border-slate-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-0 focus:outline-none w-[273px] md:w-[40%] p-2.5  placeholder-gray-400" placeholder="Email" required />
            </div>
            {/* checkbox */}
            <div className="flex items-center mt-[25px]">
                <input type="checkbox" name="assign-select" id="assign-select" className="h-[16px] w-[16px] cursor-pointer mr-[10px]" />
                <p className="text-[#969696]">Save my name, email, and website in this browser for the next time I comment.</p>
            </div>
            <motion.button whileTap={{ scale: .95 }} className='uppercase bg-primary rounded-md w-full min-h-[50px] mt-[15px]'>
                leave a reply
            </motion.button>
        </div>
    )
}

export default Reply
