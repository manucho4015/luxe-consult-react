

const Card = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className='bg-white inline-flex items-center rounded-2xl px-[25px] lg:py-0 py-[10px] w-full md:w-[35vw] lg:max-w-[465px] lg:max-h-[240px] lg:w-[30vw] lg:h-[35vh] shadow text-center'>
            <div>

                <h5 className='text-primary text-[20px] lg:text-[30px] uppercase'>{title}</h5>
                <p className="text-[16px] lg:text-[20px] lg:mt-[15px]">{description}</p>
            </div>
        </div>
    )
}

export default Card
