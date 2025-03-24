'use client'
import { IKota } from '@/app/interfaces/IKota'
import { IOption } from '@/app/interfaces/IOption'
import { useState } from 'react'
import Select from 'react-select'

interface SearchListHotelFormProps {
  dropdownKota: IKota[]
}

export default function SearchListHotelForm({
  dropdownKota,
}: SearchListHotelFormProps) {
  const [kota, setKota] = useState<IOption>()
  const [date, setDate] = useState('')
  const SubmitCariHotel = () => {}

  const optionDropdownKota = dropdownKota?.map((kota) => ({
    value: kota.id,
    label: `${kota.name} - ${kota.country}`,
  }))
  return (
    <div className="bg-white border border-gray-200 shadow-xl rounded-lg p-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
        <div>
          <label className="text-xs text-gray-600 mb-1 block">
            Pilih Kota/Nama Hotel (Destinasi)
          </label>
          <Select
            key={typeof window !== 'undefined' ? 'client' : 'server'}
            className="w-full border-gray-300 text-gray-600 rounded text-sm"
            placeholder="Pilih Kota/Nama Hotel"
            isClearable={true}
            value={kota}
            isSearchable={true}
            onChange={(e) => setKota(e as IOption)}
            options={optionDropdownKota}
          />
        </div>
        <div>
          <label className="text-xs text-gray-600 mb-1 block">
            Tanggal Menginap
          </label>
          <input
            value={date}
            onChange={(e) => setDate(e.currentTarget.value)}
            type="date"
            placeholder="Pilih tanggal menginap..."
            className="w-full p-2 border border-gray-300 text-gray-600 rounded text-sm"
          />
        </div>
        <div>
          <label className="text-xs text-gray-600  mb-1 block">
            Jumlah Tamu dan Kamar
          </label>
          <details className="dropdown w-full">
            <summary className="btn text-gray-600 w-full h-[39px] bg-white btn-md border-gray-300 font-light text-left shadow-none flex justify-start">
              Masukkan Jumlah Tamu dan Kamar
            </summary>
            <ul className="menu dropdown-content rounded-box border-gray-300 border bg-white z-1 w-52">
              <li>
                <a>Item 1</a>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <button
          onClick={SubmitCariHotel}
          className="bg-blue-500 text-white font-medium px-4 py-2 rounded"
        >
          Ubah Pencarian
        </button>
      </div>
    </div>
  )
}
