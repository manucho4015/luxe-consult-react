import { useState } from 'react'
import { motion } from 'framer-motion'

// components
import Property from './components/Property'

const Properties = () => {
    const [isActive, setIsActive] = useState('all')
    const arr = Array.from(Array(6).keys())
    return (
        <div className='min-h-[50vh] inline-block w-full pb-[100px]'>
            <h2 className="font-bold text-[40px] mt-[100px] text-center">Ongoing Projects</h2>
            <p className=" text-[17px] text-center">Partner With Us for Seamless Real Estate Success</p>
            <div className="inline-flex mt-[25px] justify-center w-full">
                {/* select toggle */}
                <div className="flex justify-between max-w-[550px] w-[40vw]">
                    <motion.div animate={{ backgroundColor: isActive == 'all' ? '#1F4B43' : '#fff', color: isActive == 'all' ? '#fff' : '#000', borderColor: isActive == 'all' ? '#fff' : '#1F4B43' }}
                        className={`h-[53px] w-[141px] cursor-default border-[1px] text-[18px] flex items-center justify-center  rounded-[40px]`}
                        onClick={() => setIsActive('all')}>
                        All Properties
                    </motion.div>
                    <motion.div animate={{ backgroundColor: isActive == 'rent' ? '#1F4B43' : '#fff', color: isActive == 'rent' ? '#fff' : '#000', borderColor: isActive == 'rent' ? '#fff' : '#1F4B43' }}
                        className={`h-[53px] w-[141px] cursor-default border-[1px] text-[18px] flex items-center justify-center  rounded-[40px]`}
                        onClick={() => setIsActive('rent')}>
                        For Rent
                    </motion.div>
                    <motion.div animate={{ backgroundColor: isActive == 'sale' ? '#1F4B43' : '#fff', color: isActive == 'sale' ? '#fff' : '#000', borderColor: isActive == 'sale' ? '#fff' : '#1F4B43' }}
                        className={`h-[53px] w-[141px] cursor-default border-[1px] text-[18px] flex items-center justify-center  rounded-[40px]`}
                        onClick={() => setIsActive('sale')}>
                        For Sale
                    </motion.div>
                </div>
            </div>
            <div className="grid grid-cols-3 px-[2.5vw] gap-10 mt-[50px]">
                {
                    arr.map((item) => (
                        <Property key={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Properties
