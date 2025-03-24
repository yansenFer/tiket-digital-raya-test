'use client'
import { IKota } from '@/app/interfaces/IKota'
import SearchListHotelForm from '../Form/SearchListHotelForm'
import Header from '../Navigation/Header'
import { IHotel } from '@/app/interfaces/IHotel'
import {
  Star,
  MapPin,
  WashingMachine,
  Bed,
  Coffee,
  Users,
  Wifi,
} from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import { FormatRupiah } from '@/app/utils/FormatRupiah'

interface DetailHotelComponentProps {
  dropdownKota: IKota[]
  dataHotel: IHotel[]
}

export default function DetailHotelComponent({
  dropdownKota,
  dataHotel,
}: DetailHotelComponentProps) {
  const [activeTab, setActiveTab] = useState('tentang')

  return (
    <main className="min-h-screen relative">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <SearchListHotelForm dropdownKota={dropdownKota} />

        {/* Hotel Title */}
        <div className="mt-10">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            {dataHotel[0].name}
            <div className="flex">
              {[...Array(dataHotel[0].star)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </h1>
          <div className="flex items-center text-gray-600 mt-1">
            <MapPin className="w-4 h-4 text-red-500 mr-1" />
            <span className="text-sm">{dataHotel[0].address}</span>
          </div>
        </div>

        {/* Hotel Images */}
        <div className="grid grid-cols-1 md:grid-cols-4 mt-5 gap-2 mb-6">
          <div className="md:col-span-2 row-span-2">
            <Image
              src={dataHotel[0].images[0]}
              alt="Hotel main view"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {dataHotel[0].images.slice(1).map((image, i) => (
            <div key={i}>
              <Image
                src={image}
                alt={`Hotel view ${i + 1}`}
                width={300}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Manual Tabs */}
        <div className="mb-8">
          {/* Tab Headers */}
          <div className="flex flex-wrap border-b gap-6 overflow-x-auto">
            {[
              { id: 'tentang', label: 'Tentang Hotel' },
              { id: 'fasilitas', label: 'Fasilitas' },
              { id: 'kamar', label: 'Kamar' },
              { id: 'review', label: 'Review' },
              { id: 'lokasi', label: 'Lokasi' },
              { id: 'kebijakan', label: 'Kebijakan Hotel' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2 px-1 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {/* Tentang Hotel Tab */}
            {activeTab === 'tentang' && (
              <div className="space-y-4 text-gray-700">
                <p>{dataHotel[0].description}</p>
              </div>
            )}

            {/* Fasilitas Tab */}
            {activeTab === 'fasilitas' && (
              <>
                <h3 className="text-xl font-semibold mb-4">Fasilitas Hotel</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {dataHotel[0].facilities.map((fasilitas, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center">
                        <WashingMachine />
                      </div>
                      <span>{fasilitas}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Kamar Tab */}
            {activeTab === 'kamar' && (
              <>
                <h1 className="text-2xl font-medium text-gray-800 mb-6">
                  Tipe dan Harga Kamar
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Room thumbnail with details */}
                  {dataHotel.map((hotel) => (
                    <>
                      <div
                        key={hotel.id}
                        className="bg-white h-fit rounded-lg shadow-md overflow-hidden"
                      >
                        <div className="relative h-48">
                          <Image
                            src={hotel.rooms[0].images[0]}
                            alt="Kamar Twin Bed"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-4 flex justify-between items-center">
                          <span className="font-medium">
                            {hotel.rooms[0].bed_type}
                          </span>
                          <span className="text-gray-600">
                            {hotel.rooms[0].size}m
                          </span>
                        </div>
                      </div>

                      {/* Room listings */}
                      <div className="md:col-span-2 space-y-6">
                        {hotel.rooms.map((room, index) => (
                          <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-5 border border-gray-100"
                          >
                            <h2 className="text-lg font-medium mb-3">
                              {room.bed_type}
                            </h2>

                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                                Bisa refund
                              </span>
                              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                                Bisa reschedule
                              </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              <div className="flex items-center gap-2">
                                <Users size={20} className="text-gray-500" />
                                <span>{room.guest_capacity} Tamu</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Coffee size={20} className="text-gray-500" />
                                <span>
                                  {room.is_breakfast_included
                                    ? 'Termasuk Sarapan'
                                    : 'Tidak Termasuk Sarapan'}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Bed size={20} className="text-gray-500" />
                                <span>{room.bed_type}</span>
                              </div>
                              {room.facilities.includes('Free WiFi') && (
                                <div className="flex items-center gap-2">
                                  <Wifi size={20} className="text-gray-500" />
                                  <span>Free Wifi</span>
                                </div>
                              )}
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-end mt-4">
                              <div className="mb-3 md:mb-0">
                                <div className="text-blue-600 font-bold text-xl">
                                  {FormatRupiah(room.price)}
                                </div>
                                <div className="text-gray-500 text-sm">
                                  /malam
                                </div>
                              </div>
                              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition">
                                Pilih Kamar
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ))}
                </div>
              </>
            )}

            {/* Review Tab */}
            {activeTab === 'review' && (
              <div className="text-center py-8 text-gray-500">
                Review hotel akan ditampilkan di sini
              </div>
            )}

            {/* Lokasi Tab */}
            {activeTab === 'lokasi' && (
              <div className="text-center py-8 text-gray-500">
                Informasi lokasi akan ditampilkan di sini
              </div>
            )}

            {/* Kebijakan Hotel Tab */}
            {activeTab === 'kebijakan' && (
              <div className="text-left py-8 text-gray-500">
                {dataHotel[0].policy}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
