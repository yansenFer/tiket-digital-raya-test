import Image from 'next/image'
import SearchForm from '../Form/SearchForm'
import { IKota } from '@/app/interfaces/IKota'
import Header from '../Navigation/Header'

interface HomeComponentProp {
  dropdownKota: IKota[]
}

export default function HomeComponent({ dropdownKota }: HomeComponentProp) {
  return (
    <main className="min-h-screen relative">
      {/* Background Image - Full Page */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background-home.jpg"
          alt="Hotel background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Header - On top of background */}
      <Header />

      {/* Content - On top of background */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-56px)] px-4">
        <div className="text-white text-center max-w-3xl mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Staycation menjadi lebih mudah hanya dengan satu klik
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold">
            dan dapatkan banyak promo menarik!
          </h2>
        </div>

        {/* Search Form */}
        <SearchForm dropdownKota={dropdownKota} />
      </div>
    </main>
  )
}
