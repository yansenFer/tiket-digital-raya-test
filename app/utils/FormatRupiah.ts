export const FormatRupiah = (value: number) => {
  const roundedValue = Math.floor(value)
  const rupiah = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(roundedValue)

  return rupiah
}
