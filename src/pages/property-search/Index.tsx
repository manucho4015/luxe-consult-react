

// components
import Banner from './components/Banner'
import Property from '../../global/components/Property'
import ContactUs from '../../global/components/ContactUs'

const Index = () => {
    const arr = Array.from(Array(6).keys())
    return (
        <>
            <Banner />
            <div className="grid grid-cols-3 px-[2.5vw] gap-10 py-[50px] bg-[#E9E9E9]">
                {
                    arr.map((item) => (
                        <Property key={item} />
                    ))
                }
            </div>

            <ContactUs />
        </>
    )
}

export default Index
