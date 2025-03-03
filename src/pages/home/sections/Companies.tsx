import { companies } from "../../../data/home"

const Companies = () => {
    return (
        <div className=" inline-flex w-full justify-center">
            <div className="h-fit p-[20px] md:p-0 md:max-h-[314.3px] md:h-[40vh] w-[90vw] rounded-xl bg-black shadow flex justify-center items-center">
                <div className="text-white">
                    <p className="font-medium text-center">Thousands of world’s leading companies trust Space</p>
                    {/* companies */}
                    <div className="flex flex-wrap md:justify-between items-center h-fit w-full md:w-[80vw] lg:w-[90vw] mt-[25px] px-[5vw]">
                        {
                            companies.map((company, index) => (
                                <img key={index} src={company.src} alt={company.alt} className={`${index === 0 || index === 6 ? 'max-w-[150px]' : 'max-w-[100px]'} max-h-[75px] h-[15vh] w-[30vh] md:m-0 mb-[10px] mr-[20px] rounded-lg`} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Companies
