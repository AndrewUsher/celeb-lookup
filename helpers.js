import { WebBrowser } from 'expo'

const border = (width, color) => ({
  borderBottomWidth: width,
  borderLeftWidth: width,
  borderRightWidth: width,
  borderTopWidth: width,
  borderColor: color
})

const createError = field => `Please enter a valid ${field}`

const formatMonth = month => (parseInt(month, 10) < 10 ? `0${month}` : month)
const formatDay = day => (parseInt(day, 10) < 10 ? `0${day}` : day)
const validateMonth = month => parseInt(month, 10) <= 12
const validateDay = day => parseInt(day, 10) <= 31

const launchGoogleSearch = (name) => async () => {
  const encodedName = encodeURIComponent(name)
  await WebBrowser.openBrowserAsync(`https://google.com/search?q=${encodedName}`)
}

export {
  border,
  createError,
  formatDay,
  formatMonth,
  launchGoogleSearch,
  validateMonth,
  validateDay
}
