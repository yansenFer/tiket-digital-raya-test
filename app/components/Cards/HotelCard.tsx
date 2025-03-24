import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { IHotel } from '@/app/interfaces/IHotel'
import { FormatRupiah } from '@/app/utils/FormatRupiah'
import { useRouter, useSearchParams } from 'next/navigation'

interface HotelCardProps {
  dataHotel: IHotel
}

export default function HotelCard({ dataHotel }: HotelCardProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const tanggal = searchParams.get('tanggal')
  const kota = searchParams.get('cityId')
  const jumlahTamu = searchParams.get('tamu')
  const jumlahKamar = searchParams.get('kamar')
  const handleRoute = () => {
    if (tanggal && dataHotel.id) {
      router.push(
        `/pages/detail-hotel?tanggal=${tanggal}&idHotel=${dataHotel.id}${
          kota ? `&cityId=${kota}` : ''
        }${jumlahTamu ? `&tamu=${jumlahTamu}` : ''}${
          jumlahKamar ? `&kamar=${jumlahKamar}` : ''
        }`
      )
    }
  }

  return (
    <div
      onClick={handleRoute}
      className="bg-white w-full cursor-pointer rounded-lg shadow-sm overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr]">
        <div className="relative h-48 md:h-full">
          <Image
            src={dataHotel.images[0]}
            alt="gambar hotel"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-4 flex flex-col">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">{dataHotel.name}</h3>
              <div className="flex text-yellow-400 my-1">
                {Array.from({ length: dataHotel.star }, (_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
              <div className="flex items-start text-sm text-gray-600 mt-1">
                <MapPin className="w-4 h-4 text-red-500 mr-1 shrink-0 mt-0.5" />
                <span>{dataHotel.address}</span>
              </div>
            </div>

            <div className="text-right hidden md:block">
              <div className="text-blue-600 font-bold text-xl">
                {FormatRupiah(
                  Math.min(...dataHotel.rooms.map((item) => item.price))
                )}
                {' - '}
                {FormatRupiah(
                  Math.max(...dataHotel.rooms.map((item) => item.price))
                )}
              </div>
              <div className="text-sm text-gray-500">/malam</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 my-3">
            {dataHotel?.facilities?.map((fasilitas, index) => (
              <div key={index} className="flex items-center gap-1">
                <span className="text-xs">{fasilitas}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-2 mt-auto">
            <button className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
              Termurah
            </button>
            <button className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
              Rekomendasi
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
