import HTTP from './create.api'

const getToken = (data) => HTTP.get('v1/bpi/currentprice.json', data)

export { getToken }
