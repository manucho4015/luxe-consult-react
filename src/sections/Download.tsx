import { motion } from 'framer-motion'

const Download = () => {
    return (
        <div className="mt-[25px] h-[30vh] min-h-[176px] inline-flex w-full justify-center items-center text-white
            bg-linear-to-r from-[#EEC7A2] to-[#000] mb-[25px]">
            <h3 className="uppercase mr-[30px]">download our company profile</h3>
            <motion.button whileTap={{ scale: .95 }} className='uppercase bg-primary rounded-md w-[200px] h-[50px]
                    flex items-center justify-center text-[16px]'>
                download <img src="/download-white.svg" alt="download" className="ml-[10px] max-w-[30px] max-h-[20px] h-[15vh] w-[30vh]" />
            </motion.button>
        </div>
    )
}

export default Download
