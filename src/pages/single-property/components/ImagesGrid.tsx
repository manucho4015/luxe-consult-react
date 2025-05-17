// custom types
import type { PropertyImage } from "../../../custom-types/properties"

const ImagesGrid = ({ images }: { images: PropertyImage[] | undefined }) => {
    return (
        <>
            <div className="grid grid-cols-8 grid-rows-4 gap-4 mt-[25px] px-[5vw]">
                <img src={`${images && images[0] ? images[0].image : '/property-img-1.jpg'}`} alt="image 1" className="row-start-1 row-span-2 col-span-3 h-full rounded-lg" />
                <img src={`${images && images[1] ? images[1].image : '/property-img-2.jpg'}`} alt="image 2" className="row-start-1 row-span-4 col-span-6 h-full rounded-lg" />
                <img src={`${images && images[2] ? images[2].image : '/aerial-view-apartment-buildings.jpg'}`} alt="image 3" className="row-start-3 row-span-2 col-span-3 h-full rounded-lg" />
            </div>
            <div className="grid grid-cols-8 grid-rows-4 gap-4 mt-[25px] px-[5vw]">
                <img src={`${images && images[3] ? images[3].image : '/block-mansion.jpg'}`} alt="image 4" className="row-start-1 row-span-4 col-span-6 h-full rounded-lg" />
                <img src={`${images && images[4] ? images[4].image : '/property-img-1.jpg'}`} alt="image 5" className="row-start-1 row-span-2 col-span-3 h-full rounded-lg" />
                <img src={`${images && images[5] ? images[5].image : '/sky-scrapers.jpg'}`} alt="image 6" className="row-start-3 row-span-2 col-span-3 h-full rounded-lg" />
            </div>
        </>
    )
}

export default ImagesGrid
