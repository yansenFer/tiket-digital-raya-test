import ListHotelComponent from '@/app/components/Pages/ListHotelComponent'

interface HotelsPageProps {
  searchParams: Promise<{ cityId?: string; tanggal?: string; tamu?: string }>
}

async function getDropdownKota() {
  const res = await fetch('https://ota-gin.onrender.com/api/v1/cities/', {
    cache: 'no-store',
  })
  return res.json()
}
async function getHotel(tanggal: string, cityid?: string, tamu?: string) {
  if (tanggal) {
    const res = await fetch(
      `https://ota-gin.onrender.com/api/v1/hotels/search?date=${tanggal}${
        cityid ? `&city_id=${cityid}` : ''
      }${tamu ? `&adult_guests=${tamu}` : ''}`,
      {
        cache: 'no-store',
      }
    )
    return res.json()
  }
}

export default async function Page({ searchParams }: HotelsPageProps) {
  const { tanggal, cityId, tamu } = await searchParams

  const [dropdownKota, dataHotel] = await Promise.all([
    getDropdownKota(),
    getHotel(tanggal!, cityId, tamu),
  ])

  return (
    <ListHotelComponent
      dropdownKota={dropdownKota.data}
      dataHotel={dataHotel.data.data}
    />
  )
}
