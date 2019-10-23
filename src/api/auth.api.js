import HTTP from './create.api'

const getToken = (data) => HTTP.get('/', data)

export { getToken }
