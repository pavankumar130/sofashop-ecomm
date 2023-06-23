export const formatPrice = (number) => {
  if (number === undefined || number === null) {
    return 'Price not available'
  }
  return number.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
  })
}

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type])
  if (type === 'colors') {
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
}
