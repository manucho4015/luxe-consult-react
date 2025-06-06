
// sections
import Banner from "./sections/Banner"
import WorkWithUs from "./sections/WorkWithUs"
import Companies from "./sections/Companies"
import Popular from "./sections/Popular"
import Featured from "./sections/properties/Index"
// import Ongoing from './sections/ongoing/Index'
import ContactUs from "../../global/components/ContactUs"
import Download from "../../global/components/Download"

function App() {

  return (
    <>
      <Banner />
      <Featured />
      <Popular />
      <WorkWithUs />
      <Companies />
      {/* <Ongoing /> */}
      <ContactUs />
      <Download />
    </>
  )
}

export default App
