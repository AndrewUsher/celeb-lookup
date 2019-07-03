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

export {
  border,
  createError,
  formatDay,
  formatMonth,
  validateMonth,
  validateDay
}
