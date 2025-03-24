'use client'

import { useState } from 'react'

export default function HotelFilterCard() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-xl p-4">
      <h3 className="font-semibold mb-4 text-gray-600">Filter Pencarian</h3>

      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2 text-gray-600">Bintang Hotel</h4>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((stars) => (
              <label key={stars} className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox bg-white border border-gray-300 w-5 h-5 rounded-none text-blue-600"
                />

                <div className="flex ml-1">
                  {Array.from({ length: stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-2 text-gray-600">Fasilitas</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox bg-white border border-gray-300 w-5 h-5 rounded-none text-blue-600"
              />
              <span className="text-gray-600 ml-1">Kolam Renang</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox bg-white border border-gray-300 w-5 h-5 rounded-none text-blue-600"
              />
              <span className="text-gray-600 ml-1">Parkir Gratis</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox bg-white border border-gray-300 w-5 h-5 rounded-none text-blue-600"
              />
              <span className="text-gray-600 ml-1">Pusat Kebugaran</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox bg-white border border-gray-300 w-5 h-5 rounded-none text-blue-600"
              />
              <span className="text-gray-600 ml-1">SPA</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox bg-white border border-gray-300 w-5 h-5 rounded-none text-blue-600"
              />
              <span className="text-gray-600 ml-1">Mesin Cuci</span>
            </label>

            {showMore && (
              <>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox bg-white border border-gray-300 w-5 h-5 rounded-none text-blue-600"
                  />
                  <span className="text-gray-600 ml-1">WiFi Gratis</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox bg-white border border-gray-300 w-5 h-5 rounded-none text-blue-600"
                  />
                  <span className="text-gray-600 ml-1">Sarapan</span>
                </label>
              </>
            )}

            <button
              className="text-blue-500 text-sm hover:underline"
              onClick={() => setShowMore(!showMore)}
            >
              + Tampilkan {showMore ? 'lebih sedikit' : 'lebih banyak'}
            </button>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-2 text-gray-600">Harga</h4>
          <div className="space-y-4">
            <input
              type="range"
              min="0"
              max="999999999"
              className="w-full accent-blue-500"
              defaultValue="500000000"
            />
            <div className="flex justify-between text-sm">
              <div className="text-gray-600">IDR 0</div>
              <div className="text-gray-600">IDR 999.999.999</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
