import HomeComponent from '@/app/components/Pages/HomeComponent'

async function getData() {
  const res = await fetch('https://ota-gin.onrender.com/api/v1/cities/', {
    cache: 'no-store',
  })
  return res.json()
}

export default async function HomePage() {
  const data = await getData()

  return <HomeComponent dropdownKota={data.data} />
}
