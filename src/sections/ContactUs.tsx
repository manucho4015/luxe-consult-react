import { motion } from 'framer-motion'

const ContactUs = () => {
    return (
        <div className='inline-flex w-full min-h-[100vh] justify-between items-center px-[10vw] 
            bg-linear-to-b from-[#EEC7A2] to-[#32260480]'>
            <img src="/woman-caller.jpg" alt="woman caller" className='max-w-[777px] max-h-[842px] h-[80vh] w-[70vh]' />
            <div className="w-[40vw] max-w-[572px]">
                <h5 className="text-[#585858]">Fill out this form and our agents will contact you shortly for detailed consultation.</h5>
                <div className="mt-[25px]">
                    <label htmlFor="notification-title" className="block font-semibold mb-2 text-sm  text-gray-900 ">Title</label>
                    <input type="text" id="notification-title" className="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none block w-[273px] md:w-full p-2.5  placeholder-gray-400 " placeholder="Enter Title" required />
                </div>
                <div className="mt-[15px]">
                    <label htmlFor="notification-title" className="block font-semibold mb-2 text-sm  text-gray-900 ">Phone Number</label>
                    <input type="number" id="notification-title" className="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none block w-[273px] md:w-full p-2.5  placeholder-gray-400 " placeholder="Enter Phone Number" required />
                </div>
                <div className="mt-[15px]">
                    <label htmlFor="notification-title" className="block font-semibold mb-2 text-sm  text-gray-900 ">Email</label>
                    <input type="email" id="notification-title" className="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none block w-[273px] md:w-full p-2.5  placeholder-gray-400 " placeholder="Enter Email" required />
                </div>
                <div className='mt-[15px]'>
                    <p className='font-semibold'>Message</p>
                    <textarea id="description-lock_device_input" rows={5} className="block p-2.5 mt-[15px] w-full text-sm text-gray-900 bg-gray-200 rounded-lg border
                    border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                        placeholder="Fill me..." />
                </div>
                <motion.button whileTap={{ scale: .95 }} className='uppercase bg-primary rounded-md w-full min-h-[50px] mt-[15px]'>
                    send message
                </motion.button>
            </div>
        </div>
    )
}

export default ContactUs
