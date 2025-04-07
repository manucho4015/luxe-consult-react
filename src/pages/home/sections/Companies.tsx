import { companies } from "../../../data/home"

const Companies = () => {
    return (
        <div className=" inline-flex w-full justify-center">
            <div className="h-fit py-[20px] md:p-0 md:max-h-[314.3px] md:h-[40vh] w-[90vw] rounded-xl bg-white shadow flex justify-center items-center">
                <div className="text-white">
                    <p className="font-medium text-center text-black px-[20px]">Companies we have worked with</p>
                    {/* companies */}
                    <div className="flex flex-wrap md:justify-between md:items-center h-fit w-full md:w-[80vw] lg:w-[90vw] mt-[25px] px-[10vw] md:px-[2.5vw]">
                        {
                            companies.map((company, index) => (
                                <img key={index} src={company.src} alt={company.alt} className={`max-w-[100px] max-h-[75px] ${company.alt === 'Sojitz' && 'max-w-[250px]'} ${company.alt === 'World Bank' && 'max-w-[125px]'} ${company.alt === 'UNICEF' && 'max-w-[125px]'} ${company.alt === 'USAID' && 'max-w-[250px]'} h-[15vh] w-[30vh] md:m-0 mb-[10px] mr-[20px] rounded-lg`} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Companies
