export interface IHotel {
  id: number
  name: string
  description: string
  address: string
  latitude: number
  longitude: number
  star: number
  city: {
    id: number
    name: string
    country: string
  }
  facilities: string[]
  images: string[]
  policy: string
  rooms: {
    id: number
    name: string
    size: number
    facilities: string[]
    images: string[]
    is_breakfast_included: boolean
    guest_capacity: number
    bed_type: string
    price: number
    total_rooms: number
    available_rooms: number
  }[]
}
