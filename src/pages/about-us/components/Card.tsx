

const Card = ({ title, description, img_src, alt }: { title: string, description: string, img_src: string, alt: string }) => {
    return (
        <div className='bg-white inline-flex items-center rounded-2xl px-[25px] lg:py-0 py-[20px] w-full md:w-[35vw] lg:max-w-[465px] lg:max-h-[450px] lg:w-[30vw] lg:h-[45vh] shadow text-center'>
            <div>
                <div className="flex justify-center">
                    <img src={img_src} alt={alt} className="h-[50px] w-[50px] md:h-[75px] md:w-[75px] mb-[15px]" />
                </div>
                <h5 className='text-primary text-[20px] lg:text-[25px] uppercase'>{title}</h5>
                <p className="text-[14px] lg:text-[16px]">{description}</p>
            </div>
        </div>
    )
}

export default Card
