

const Card = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className='bg-white inline-flex items-center rounded-2xl px-[25px] max-w-[465px] max-h-[240px] w-[30vw] h-[35vh] shadow text-center'>
            <div>

                <h5 className='text-primary text-[30px] uppercase'>{title}</h5>
                <p className="text-[20px] mt-[15px]">{description}</p>
            </div>
        </div>
    )
}

export default Card
