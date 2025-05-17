export type PropertyImage = {
    id: number,
    property: string,
    image: string
}

export type Property = {
    id: string,
    title: string,
    description: string,
    location: string,
    property_type: string,
    price: string,
    bedrooms: number,
    bathrooms: number,
    sqft: number,
    status_display: string,
    category: string,
    agent: string,
    listed_date: string,
    amenities: string[],
    images: PropertyImage[]
}