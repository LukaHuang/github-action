require('dotenv').config()

const API_KEY = process.env.API_KEY
const SERVER_PREFIX = process.env.SERVER_PREFIX

module.exports = { API_KEY, SERVER_PREFIX }
