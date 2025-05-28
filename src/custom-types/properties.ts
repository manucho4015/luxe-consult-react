export interface PropertyImage {
    id: number,
    property: string,
    image: string
}

export interface Property {
    id: string,
    title: string,
    description: string,
    location: string,
    property_type: string,
    price: string,
    bedrooms: number,
    bathrooms: number,
    sqft: number,
    status: string[],
    category: string,
    agent: string,
    listed_date: string,
    amenities: string[],
    images: PropertyImage[]
}