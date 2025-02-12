
// data
import { pricing } from "../../../data/single-property"

const Description = () => {
    const arr = Array.from(Array(15).keys())
    return (
        <div className='mt-[75px] inline-flex w-full justify-center'>
            <div className="rounded-lg shadow-md p-[30px] w-[90vw]">
                <h5 className='capitalize font-medium text-[25px]'>property description</h5>
                <h4 className='uppercase text-primary font-medium text-[30px] mt-[5px]'>discover diamond bay residence</h4>
                <p className='mt-[25px] text-[#6D6D6D]'>Diamond Bay Residence an exclusive high-rise development in the heart of Westlands, along Westlands Road. This architectural marvel features 1 and 2-bedroom all en-suite apartments across two 23-story towers, with each floor comprising 7 thoughtfully designed units and 3 basement levels for parking.</p>

                {/* pricing */}
                <h5 className='capitalize font-medium text-[25px] mt-[75px]'>available units & pricing</h5>
                <ul className="list-disc inline-block  mt-[10px] bg-[#E7C87311] rounded-lg pt-[10px]">
                    {
                        pricing.map((price, index) => (
                            <li className="ml-[25px] mb-[5px] mr-[15px]" key={index}>{price}</li>
                        ))
                    }
                </ul>

                {/* amenities */}
                <h5 className='capitalize font-medium text-[25px] mt-[75px]'>world-class amenities</h5>
                <ul className="list-disc inline-block  mt-[10px] bg-[#E7C87311] rounded-lg pt-[10px]">
                    {
                        arr.map((int) => (
                            <li className="ml-[25px] mb-[5px] mr-[15px]" key={int}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum pariatur a repudiandae fugit doloremque ipsam.</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Description
