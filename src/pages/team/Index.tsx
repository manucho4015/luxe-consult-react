
// components
import TeamMember from "./components/TeamMember"

const Index = () => {
    const arr = Array.from(Array(6).keys())
    return (
        <div className="min-h-[100vh] w-full bg-linear-to-b from-[#F7E5D4] to-[#E9E9E9] inline-block">
            <h3 className="mt-[175px] text-center text-[30px] uppercase">our team</h3>
            <h4 className="uppercase text-center text-[60px] text-[#A37A52] font-bold">meet our leadership team</h4>
            <p className="text-center capitalize">innovative minds, collaborative hearts</p>
            <div className="grid grid-cols-4 px-[2.5vw] gap-10 mt-[50px] mb-[50px]">
                {
                    arr.map((item) => (
                        <TeamMember key={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Index
