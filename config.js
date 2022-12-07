require('dotenv').config()

const API_KEY = process.env.API_KEY
const SERVER_PREFIX = process.env.SERVER_PREFIX
const EMAIL = process.env.EMAIL

module.exports = { API_KEY, SERVER_PREFIX, EMAIL }
