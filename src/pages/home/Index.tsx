import { useState, useEffect } from "react"

// sections
import Banner from "./sections/Banner"
import WorkWithUs from "./sections/WorkWithUs"
import Companies from "./sections/Companies"
import Popular from "./sections/Popular"
import Featured from "./sections/properties/Index"
// import Ongoing from './sections/ongoing/Index'
import ContactUs from "../../global/components/ContactUs"
import Download from "../../global/components/Download"

// api
import { fetchProperties } from "../../api/properties"

// custom types
import type { Property } from "../../custom-types/properties"

function App() {

  const [properties, setProperties] = useState<Property[]>([])
  const [featuredproperties, setFeaturedProperties] = useState<Property[]>([])
  const [filterProperties, setFilterProperties] = useState<Property[]>([])

  useEffect(() => {
    fetchProperties().then((response) => {
      setProperties(response)
      setFeaturedProperties(response.filter((property) => property.category.toUpperCase() === 'FEATURED'))
      setFilterProperties(response.filter((property) => property.category.toUpperCase() === 'FEATURED'))
    })

  }, [])

  return (
    <>
      <Banner />
      <Featured properties={featuredproperties} filterProperties={filterProperties} setFilterProperties={setFilterProperties} />
      <Popular properties={properties} />
      <WorkWithUs />
      <Companies />
      {/* <Ongoing /> */}
      <ContactUs />
      <Download />
    </>
  )
}

export default App
