import DetailHotelComponent from '@/app/components/Pages/DetailHotelComponent'

interface HotelsPageProps {
  searchParams: Promise<{
    cityId?: string
    tanggal?: string
    tamu?: string
    idHotel: string
  }>
}

async function getDropdownKota() {
  const res = await fetch('https://ota-gin.onrender.com/api/v1/cities/', {
    cache: 'no-store',
  })
  return res.json()
}

async function getHotel(
  tanggal: string,
  idHotel: string,
  cityid?: string,
  tamu?: string
) {
  if (tanggal) {
    const res = await fetch(
      `https://ota-gin.onrender.com/api/v1/hotels/search?date=${tanggal}&hotel_id=${idHotel}${
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
  const { tanggal, cityId, tamu, idHotel } = await searchParams

  const [dropdownKota, dataHotel] = await Promise.all([
    getDropdownKota(),
    getHotel(tanggal!, idHotel!, cityId, tamu),
  ])

  console.log(dataHotel, 'apakah ada', idHotel, '<')

  return (
    <DetailHotelComponent
      dropdownKota={dropdownKota.data}
      dataHotel={dataHotel.data.data}
    />
  )
}
