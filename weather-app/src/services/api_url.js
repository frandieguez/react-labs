const api_key = `d9ad11fb4b6b8357afd1540e2b7e20d3`

const getApiUrl = (location) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&apikey=${api_key}`
}

export default getApiUrl;
