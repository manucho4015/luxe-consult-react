

const ImagesGrid = () => {
    return (
        <>
            <div className="grid grid-cols-8 grid-rows-4 gap-4 mt-[25px] px-[5vw]">
                <img src="/property-img-1.jpg" alt="image 1" className="row-start-1 row-span-2 col-span-3 h-full" />
                <img src="/property-img-2.jpg" alt="image 2" className="row-start-1 row-span-4 col-span-6 h-full" />
                <img src="/property-img-2.jpg" alt="image 3" className="row-start-3 row-span-2 col-span-3 h-full" />
            </div>
            <div className="grid grid-cols-8 grid-rows-4 gap-4 mt-[25px] px-[5vw]">
                <img src="/block-mansion.jpg" alt="image 4" className="row-start-1 row-span-4 col-span-6 h-full" />
                <img src="/property-img-1.jpg" alt="image 5" className="row-start-1 row-span-2 col-span-3 h-full" />
                <img src="/sky-scrapers.jpg" alt="image 6" className="row-start-3 row-span-2 col-span-3 h-full" />
            </div>
        </>
    )
}

export default ImagesGrid
