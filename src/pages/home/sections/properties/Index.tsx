import { useState } from 'react'
import { motion } from 'framer-motion'

// components
import Property from './components/Property'

// data
import { selectToggles } from '../../../../data/home'

const Properties = () => {
    const [isActive, setIsActive] = useState('')
    return (
        <div className='min-h-[50vh] inline-block w-full'>
            <h2 className="font-bold text-[40px] mt-[100px] text-center">Featured Properties</h2>
            <p className=" text-[17px] text-center">Partner With Us for Seamless Real Estate Success</p>
            <div className="inline-flex mt-[25px] justify-center w-full">
                {/* select toggle */}
                <div className="flex justify-between  w-[90vw]">
                    {
                        selectToggles.map((toggle) => (
                            <motion.div animate={{ backgroundColor: isActive == toggle.value ? '#1F4B43' : '#E9E9E9', color: isActive == toggle.value ? '#fff' : '#1F4B43' }}
                                className={`min-h-[53px] min-w-[141px] px-[15px] cursor-default text-[18px] flex items-center justify-center  rounded-xl capitalize `}
                                onClick={() => setIsActive(toggle.value)}>
                                {toggle.label}
                            </motion.div>
                        ))
                    }
                </div>

            </div>
            <div className="grid grid-cols-3 px-[2.5vw] gap-10 mt-[50px]">
                <Property />
                <Property />
                <Property />
                <Property />
                <Property />
                <Property />
            </div>
        </div>
    )
}

export default Properties
