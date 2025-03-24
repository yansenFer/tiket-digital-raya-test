'use client'
import { IKota } from '@/app/interfaces/IKota'
import { IOption } from '@/app/interfaces/IOption'
import { ChevronDown } from 'lucide-react'
import moment from 'moment'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
const Select = dynamic(() => import('react-select'), { ssr: false })

interface SearchFormProps {
  dropdownKota?: IKota[]
}

export default function SearchForm({ dropdownKota }: SearchFormProps) {
  const [kota, setKota] = useState<IOption>()
  const [date, setDate] = useState('')
  const router = useRouter()
  const [jumlahKamar, setJumlahKamar] = useState(0)
  const [jumlahTamu, setJumlahTamu] = useState(0)
  const optionDropdownKota = dropdownKota?.map((kota) => ({
    value: kota.id,
    label: `${kota.name} - ${kota.country}`,
  }))

  const SubmitCariHotel = () => {
    if (date) {
      router.push(
        `/pages/list-hotel?tanggal=${moment(date).format('YYYY-MM-DD')}${
          kota ? `&cityId=${kota}` : ''
        }${jumlahTamu ? `&tamu=${jumlahTamu}` : ''}${
          jumlahKamar ? `&kamar=${jumlahKamar}` : ''
        }`
      )
    } else {
      alert('Tanggal Perlu Di isi')
    }
  }

  return (
    <div className="bg-white rounded-lg p-4 w-full max-w-4xl">
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
          <div className="dropdown w-full">
            <div
              tabIndex={0}
              role="button"
              className="btn text-gray-600 w-full h-[39px] bg-white btn-md border-gray-300 font-light text-left shadow-none flex justify-start"
            >
              Masukkan Jumlah Tamu dan Kamar
            </div>
            <div
              tabIndex={0}
              className=" menu mt-1 w-full dropdown-content rounded-box border-gray-300 border bg-white z-1"
            >
              <div className="flex flex-col py-3 gap-5">
                <div className="flex flex-row items-center justify-between w-full gap-1">
                  <span className="text-gray-600">Jumlah Tamu</span>
                  <div className="flex flex-row gap-2 items-center justify-center">
                    <button
                      onClick={() =>
                        setJumlahTamu((prev) => {
                          if (prev !== 0) {
                            return prev - 1
                          }
                          return prev
                        })
                      }
                      className="border rounded-full text-gray-600 w-7 h-7 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="text-gray-500 font-bold">
                      {jumlahTamu}
                    </span>
                    <button
                      onClick={() => {
                        setJumlahTamu(jumlahTamu + 1)
                      }}
                      className="border rounded-full text-gray-600 w-7 h-7 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full gap-1">
                  <span className="text-gray-600">Jumlah Kamar</span>
                  <div className="flex flex-row gap-2 items-center justify-center">
                    <button
                      onClick={() =>
                        setJumlahKamar((prev) => {
                          if (prev !== 0) {
                            return prev - 1
                          }
                          return prev
                        })
                      }
                      className="border rounded-full text-gray-600 w-7 h-7 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="text-gray-500 font-bold">
                      {jumlahKamar}
                    </span>
                    <button
                      onClick={() => setJumlahKamar(jumlahKamar + 1)}
                      className="border rounded-full text-gray-600 w-7 h-7 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="bg-blue-800 text-white text-sm px-3 py-1.5 rounded flex items-center gap-1">
          <span>Lihat Pencarian Terakhir-mu</span>
          <ChevronDown size={16} />
        </button>
        <button
          onClick={SubmitCariHotel}
          className="bg-blue-500 text-white font-medium px-4 py-2 rounded"
        >
          Cari Hotel
        </button>
      </div>
    </div>
  )
}
