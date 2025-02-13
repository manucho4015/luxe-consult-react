import { Link } from "react-router"

const Blog = () => {
    return (
        <div className='bg-white inline-block rounded-2xl p-[15px] max-w-[465px] lg:max-h-[520.67px] w-full md:w-[40vw] lg:w-[20vw] h-fit lg:h-[85vh] shadow'>
            {/* image */}
            <div className="bg-red-400 rounded-2xl p-[10px]  max-h-[296.27px] w-full h-[30vh]">
            </div>
            <h5 className="text-[#98730C] text-[20px] uppercase mt-[15px]">why westlands is a prime investment destination in nairobi</h5>
            <p className="text-[#969696]">30th December 2024</p>
            <p className="mt-[20px]">Westlands has evolved into a premier investment destination in Nairobi, drawing in savvy investors from both local...</p>


            <Link to={`1`} className="inline-flex mt-[10px] items-center w-full">
                <p className="mr-[15px] text-[#98730C] capitalize">continue reading</p>
                <img src="/right-primary.svg" alt="Right arrow primary" className="max-w-[16px] max-h-[16px] h-[5vh] w-[5vh]" />

            </Link>
        </div>
    )
}

export default Blog
