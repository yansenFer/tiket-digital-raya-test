'use client'
import { IKota } from '@/app/interfaces/IKota'
import SearchListHotelForm from '../Form/SearchListHotelForm'
import Header from '../Navigation/Header'
import HotelCard from '../Cards/HotelCard'
import HotelFilterCard from '../Cards/HotelFilterCard'
import { IHotel } from '@/app/interfaces/IHotel'

interface ListHotelComponentProps {
  dropdownKota: IKota[]
  dataHotel: IHotel[]
}

export default function ListHotelComponent({
  dropdownKota,
  dataHotel,
}: ListHotelComponentProps) {
  return (
    <main className="min-h-screen relative">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <SearchListHotelForm dropdownKota={dropdownKota} />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
          <HotelFilterCard />
          <div className="space-y-4 w-full ">
            <div className="flex items-center justify-between">
              <h2 className="text-xl text-gray-600 font-semibold">
                Hasil Pencarian{' '}
                <span className="text-gray-500 text-sm">
                  {dataHotel.length} Hotel Ditemukan
                </span>
              </h2>
            </div>

            {dataHotel?.map((item, index) => (
              <HotelCard key={index} dataHotel={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
