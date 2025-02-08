
import { categories } from "../../../data/categories"

const Categories = () => {

    return (
        <div className='min-h-[50vh] inline-block w-full'>
            <h2 className="font-bold text-[40px] mt-[100px] text-center">Featured Categories</h2>
            <p className="text-[17px] text-center">Lorem ipsum dolor sit amet</p>
            <div className="flex flex-wrap justify-between px-[10vw] mt-[25px]">
                {
                    categories.map((category, index) => (
                        <div key={index} className="bg-[url(/city.jpg)] max-w-[256px] max-h-[338.11px] h-[50vh] w-[30vh] bg-blend-color bg-[#0005] rounded-md p-[20px] shadow text-white">
                            <h4 className="font-medium text-[19px]">{category.title}</h4>
                            <p className="font-light text-[15px]">{category.paragraph}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories
