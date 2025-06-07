import type { PropertyLocation } from "./property-location"
import type { PropertyType } from "./property-types"
export interface PropertyImage {
    id: number,
    property: string,
    image: string
}

export interface Property {
    id: string,
    title: string,
    description: string,
    location: PropertyLocation,
    property_type: PropertyType,
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
    whatsapp_link: string
}